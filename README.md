# Minghao GPT

This is a smart chatbot also named Minghao. You can ask some questions about work and education experiences about Minghao.

![GIF](frontend/assets/readme.gif)

# Frontend

The frontend developed by **React**. 

# Backend

The backend developed by **Node.js*. It is worth noting that, I use **Pinecone** as Vector Database, **gpt-3.5-turbo** as LLM, **RAG** technology to let model search my profile to generate answers, **MongoDB** to store history messages.

# Tech Stack

o Frontend: Built with React, responsive web design showcases the user's education, projects, and skills.

o Backend: Node.js powers the server-side processing and handles API calls.

o Vector Database (Pinecone): Stores the user’s information as embeddings to facilitate similarity searches for questions.

o GPT-3.5 from OpenAI: Generating text embeddings using the text-embedding-ada-002 model and Processes user questions to generate
contextual answers.

o Database: MongoDB is used to store conversation histories.

o Pipeline: Implemented end-to-end document processing pipeline from text extraction to embedding storage with metadata.


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

    `cd server`

2. Install dependencies

    `npm i`

3. Start the backend

    `npm run dev`
