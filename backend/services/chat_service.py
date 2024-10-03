import openai
from config import Config

# Set OpenAI API key
openai.api_key = Config.OPENAI_API_KEY

# Context for the chat
context = [
    {'role': 'system', 'content': """
        You are ChatBot, your name is Sun.
        You can only reply to messages which are related to cats and dogs.
    """}
]


def get_completion_from_messages(messages):
    response = openai.chat.completions.create(
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
