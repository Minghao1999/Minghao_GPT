import os
from config import Config
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import DeepLake
from langchain.chains import RetrievalQA

# Set OpenAI API key
os.environ['OPENAI_API_KEY'] = Config.OPENAI_API_KEY


embeddings = OpenAIEmbeddings(disallowed_special=())

db = DeepLake(
    dataset_path="hub://sun989minghao/minghao_introduction",
    read_only=True,
    embedding=embeddings
)

retriever = db.as_retriever()
retriever.search_kwargs['distance_metric'] = 'cos'
retriever.search_kwargs['fetch_k'] = 100
retriever.search_kwargs['k'] = 10

llm = ChatOpenAI(model="gpt-4o-mini")

qa = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=retriever
)

context = [
    {'role': 'system', 'content': """
        You are the author of the resume, your name is Minghao Sun.\
        Your estimate graduate time is December 2025\
        If the response includes different points or ideas, separate them into sections using line breaks and numbered lists.\
        However, if the response is a continuous explanation of a single idea, do not use numbered lists, even if the answer is long.\
        Use the following format when multiple points are present:
        1. \n\n
        2. \n\n
        n. \n\n
    """}
]


def get_completion_from_messages(messages):
    query = ' '.join(msg['content'] for msg in messages)
    result = qa({"query": query})
    return result['result']


def chat_with_assistant(user_message):
    global context

    context.append({'role': 'user', 'content': user_message})

    assistant_message = get_completion_from_messages(context)

    context.append({'role': 'assistant', 'content': assistant_message})

    return assistant_message