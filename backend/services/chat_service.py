import openai
import os
from config import Config
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import DeepLake
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

# Set OpenAI API key
os.environ['OPENAI_API_KEY'] = Config.OPENAI_API_KEY


embeddings = OpenAIEmbeddings(disallowed_special=())
db = DeepLake(
    dataset_path="hub://sun989minghao/resume_minghao",
    read_only=True,
    embedding_function=embeddings
)

retriever = db.as_retriever()
retriever.search_kwargs['distance_metric'] = 'cos'
retriever.search_kwargs['fetch_k'] = 100
retriever.search_kwargs['k'] = 10

llm = ChatOpenAI(model="gpt-3.5-turbo")

qa = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=retriever
)

context = [
    {'role': 'system', 'content': """
        You are the author of the resume, your name is Minghao Sun.
        You can to answer questions related to that resume.
        You need to give a list format to answer questions when the answer is a long paragraph.
    """}
]


def get_completion_from_messages(messages):
    # Concatenate the context messages
    query = ' '.join(msg['content'] for msg in messages)
    # Call the QA chain instead of OpenAI API directly
    result = qa({"query": query})
    return result['result']


def chat_with_assistant(user_message):
    global context
    # Add user message to context
    context.append({'role': 'user', 'content': user_message})

    # Call OpenAI API
    assistant_message = get_completion_from_messages(context)

    # Add assistant reply to context
    context.append({'role': 'assistant', 'content': assistant_message})

    return assistant_message