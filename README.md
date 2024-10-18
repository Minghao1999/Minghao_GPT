# Minghao GPT

This is a smart chatbot also named Minghao. You can ask some questions about work and education experiences about Minghao.


# Frontend

The frontend developed by **React**. 

# Backend

The backend developed by **Flask**. It is worth noting that, I use **deeplake** as Vector Database, **GPT-4o-mini** as LLM, **RAG** technology to let model search my profile to generate answers, **MongoDB** to store history messages.

# Future development

For the future work, I plan to use **AI Agent** to show the previous projects I did and give chatbot decision-making ability. Also, I plan to do a complete website to introduce myself not only a chatbot.

Overall, I will let it become more and more smart by updating it using other AI technology.


# Environment Variables

Create an _**.env**_ file in backend directories. You need set up your MongoDB URI and OpenAI API in _**.env**_ file as _**.env_example**_ file


# Frontend

1. Clone the Project

2. Navigate to the frontend

    `cd frontend`

3. Install dependencies

    `npm i `

4. Start the frontend

    `npm run dev`

# Backend

1. Navigate to the backend

    `cd backend`

2. Install dependencies

    `source venv/bin/activate`

    `pip install requirements.txt`

3. Start the backend

    `python3 app.py`
