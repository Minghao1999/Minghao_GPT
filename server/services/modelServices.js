const { Pinecone } = require('@pinecone-database/pinecone')
const openai = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY
})

const getPineconeContext = async (queryText) => {
    const index = pinecone.Index('minghao');
    const queryEmbedding = await getEmbeddings(queryText);

    const queryResponse = await index.namespace('cv').query({
        vector: queryEmbedding,
        topK: 3,
        includeMetadata: true,
    });

    const contexts = queryResponse.matches.map(match => match.metadata.content);
    return contexts.join('\n');
};

const getEmbeddings = async (text) => {
    try {
        const response = await openai.post('https://api.openai.com/v1/embeddings', {
            input: text,
            model: 'text-embedding-ada-002'
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });
        return response.data.data[0].embedding;
    } catch (err) {
        console.error('Error generating embeddings:', err);
        return [];
    }
};

const getBotResponse = async (contextMessages) => {
    try {
        const userQuestion = contextMessages.find(msg => msg.role === 'user').content;

        const retrievedContext = await getPineconeContext(userQuestion);

        const systemContext = [
            { role: 'system', content: `
                You are the author of the resume, your name is Minghao Sun.\\
                Your estimate graduate time is December 2025\\
                If the response includes different points or ideas, separate them into sections using line breaks and numbered lists.\\
                However, if the response is a continuous explanation of a single idea, do not use numbered lists, even if the answer is long.\\
                Use the following format when multiple points are present:
                1. \\n\\n
                2. \\n\\n
                n. \\n\\n
            `}
        ]

        contextMessages.push({ role: 'system', content: `Relevant information: ${retrievedContext}` });

        const finalMessages = [...systemContext, ...contextMessages];

        const response = await openai.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: finalMessages
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });

        const botReply = response.data.choices[0].message.content.trim();
        return botReply;
    } catch (err) {
        console.error('Error calling OpenAI API:', err);
        return 'Sorry, I could not process your request.';
    }
};

module.exports = {
    getBotResponse
}
