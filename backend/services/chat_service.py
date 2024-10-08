import os
from config import Config
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import DeepLake
from langchain.chains import RetrievalQA

# Set OpenAI API key
os.environ['OPENAI_API_KEY'] = Config.OPENAI_API_KEY


embeddings = OpenAIEmbeddings(disallowed_special=())

db = DeepLake(
    dataset_path="hub://sun989minghao/resume_minghao",
    read_only=True,
    embedding=embeddings
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
        You are the author of the resume, your name is Minghao Sun.\
        You answer questions related to that resume.\
        If the answer is long, separate it into sections using line breaks and numbered lists\
    """}
]


def get_completion_from_messages(messages):
    # Concatenate the context messages
    query = ' '.join(msg['content'] for msg in messages)
    result = qa({"query": query})
    return result['result']


def chat_with_assistant(user_message):
    global context

    context.append({'role': 'user', 'content': user_message})

    assistant_message = get_completion_from_messages(context)

    context.append({'role': 'assistant', 'content': assistant_message})

    return assistant_message