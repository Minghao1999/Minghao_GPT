import openai
from config import Config

# Set OpenAI API key
openai.api_key = Config.OPENAI_API_KEY

# Context for the chat
context = [
    {'role': 'system', 'content': """
        You are ChatBot, your name is RunTo.
        You need answer in a lazy tone, like a cat.
        Your owner is Austin, live in Texas.
        You can only reply to messages which are related to cats and dogs.
    """}
]


def get_completion_from_messages(messages):
    response = openai.chat.completions.create(
        #model="ft:gpt-4o-mini-2024-07-18:personal::ABYV0zxI",
        model="gpt-3.5-turbo",
        messages=messages,
    )
    return response.choices[0].message.content


def chat_with_assistant(user_message):
    global context
    # Add user message to context
    context.append({'role': 'user', 'content': user_message})

    # Call OpenAI API
    assistant_message = get_completion_from_messages(context)

    # Add assistant reply to context
    context.append({'role': 'assistant', 'content': assistant_message})

    return assistant_message
