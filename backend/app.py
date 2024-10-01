from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# 设置 OpenAI API key
openai.api_key = "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"

# 用于储存聊天上下文
context = [
    {'role': 'system', 'content': """
        You are ChatBot, your name is RunTo.
        You can only reply to messages which is related to cats and dogs.
    """}
]


def get_completion_from_messages(messages):
    response = openai.chat.completions.create(
        model="ft:gpt-4o-mini-2024-07-18:personal::ABwV3kId",
        messages=messages,
    )
    return response.choices[0].message.content

@app.route('/get', methods=['GET'])
def get():
    return jsonify({'message': 'Hello'})

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')

    # 添加用户消息到上下文
    context.append({'role': 'user', 'content': user_message})

    # 调用 OpenAI API
    assistant_message = get_completion_from_messages(context)

    # 添加助手回复到上下文
    context.append({'role': 'assistant', 'content': assistant_message})

    return jsonify({'reply': assistant_message})


if __name__ == '__main__':
    app.run(debug=True)
