const INFO = {
    socials: {
        email: "sun989minghao@gmail.com",
        github: "https://github.com/Minghao1999",
        linkedin: "https://www.linkedin.com/in/minghao-sun-653778276/",
        instagram: "https://www.instagram.com/minghaosunsun/"
    },

    about: {
        title: "Introduction to Minghao GPT",
        description: [
            "Hello! This is a personal website about Minghao, and the cool thing is that it uses fine-tuned GPT to answer questions people have about Me. In short, this website is an interactive \"self-introduction\". When people have questions about me, such as my work experience, skills, or interests, Minghao GPT will provide detailed and accurate answers instantly. Whether it is a friend or a future partner, they can get to know me better by asking questions. This makes information exchange fun and efficient. It feels like I can chat with you anytime, anywhere!",
            ]
    },
    home:{
        title: "Full-stack web developer, and amateur traveler",
        description: [
            "Hello, I'm Minghao Sun, a Computer Science master's student at the University of the Pacific, with a strong foundation in full-stack development and machine learning.",
            "I have hands-on experience in building responsive web applications using technologies like React, Node.js, MongoDB, and Flask, as well as integrating real-time communication with Socket.IO.",
            "I have also worked on AI-driven projects, fine-tuning large language models and implementing retrieval-augmented generation (RAG).",
            "My recent internship involved optimizing front-end and back-end systems for applications deployed on AWS EC2, where I collaborated closely with cross-functional teams to ensure smooth API communication and real-time updates."
        ]
    },
    projects:[
        {
            title: "iEcho",
            description:
                "Do you want to talk with Elon Reeve Musk or other celebrities. Try iEcho! It can imitate the tone of celebrities and chat with you when the celebrities are not online.",
            logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
            linkText: "View Project",
            link: "https://github.com/Minghao1999/iEcho-Agent",
            technology:
                "Front-end Optimization and Maintenance: Enhanced the application’s UI/UX, ensuring smooth and responsive user interaction. Optimized performance to create a seamless experience across devices and platform.\n" +
                "Real-Time Communication: Integrated and maintained real-time messaging features using Socket.IO, allowing users to interact with their audience without delays or disruptions.\n" +
                "AWS Deployment: Assisted in deploying the chat application to AWS, conducting tests to ensure stability and functionality before the official release.\n" +
                "Technologies Used: Socked.IO, MongoDB, CORS, WhatsAPP Webhooks, AWS EC2, React."
        },
        {
            title: "Pacific Dorm",
            description:
                "Are you always troubled by dealing with damaged items in the dormitory? Using this software can let managers know your needs immediately.",
            logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
            linkText: "View Project",
            link: "https://github.com/Minghao1999/Pacific_Dorm",
            technology:
                "Front-End Development: Utilized React-dom-router for efficient page navigation and Bootstrap for responsive design, ensuring an intuitive and user-friendly interface for students and dorm representatives. \n" +
                "Back-End Integration: Developed and integrated the backend using Express, managing data flow between the application and the MongoDB database. Implemented CORS to handle cross-origin resource sharing securely.\n" +
                "API Communication: Employed Axios for efficient API calls, ensuring smooth data fetching from the server and displaying real-time updates to users without refreshing the page.\n" +
                "Database Management: Managed data storage using Mongoose and MongoDB, ensuring efficient handling of user submissions, issues, and communication logs between students and dorm representatives.\n" +
                "Environment Configuration: Utilized dotenv for managing environment variables securely, streamlining the deployment process and keeping sensitive data protected.\n" +
                "Technologies Used: React-dom-router, Axios, React, Node.js, CORS, Bootstrap, Mongoose, MongoDB, dotenv, JSON."
        },
        {
            title: "RunTo GPT",
            description:
                "Are you still confused about some behaviors of cats and dogs? Just ask RunTo gpt, he knows everything about cats and dogs. If you ask why the name is RunTo, it's because my cat is called RunTo.",
            logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
            linkText: "View Project",
            link: "https://github.com/Minghao1999/RunTo_GPT",
            technology:
                "Developed an Intelligent Chatbot: Contributed to the design and implementation of a chatbot that accurately identifies dog and cat breeds based on user input, providing detailed information such as health, training, lifestyle, and breed-specific traits.\n" +
                "Large Language Model (LLM) Fine-Tuning: Fine-tuned a Large Language Model (LLM) using a dataset of dog and cat descriptions to enhance the chatbot's ability to generate accurate and relevant responses tailored to user queries.\n" +
                "Integration with Retrieval-Augmented Generation (RAG): Improved the chatbot’s response quality by integrating RAG to fetch and deliver more related information from knowledge base.\n" +
                "Technologies Used: Fine-tuning, RAG, LangChain, Flask, MongoDB, deeplake."
        },
        {
            title: "Minghao GPT",
            description:
                "This is a smart chatbot also named Minghao. You can ask some questions about work and education experiences about Minghao.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
            linkText: "View Project",
            link: "https://github.com/Minghao1999/Minghao_GPT",
            technology:
            "Technology information is coming"
        }
    ],
    works: [
        {
            name: "IDEAS (Int'l Data Engineering and Science Association)",
            title: "Software Development Engineer Intern",
            description:
                "Worked as a <strong>Frontend Engineer</strong> closely work with the backend team to streamline interactions between the front-end interface and backend data, ensuring real-time communication and system integrity. \n" +
                "Worked as a <strong>Software Test Engineer</strong> test app on AWS EC2 before launched, simulate the actual operation after going online. \n" +
                "Worked as a <strong>Prompt Engineer</strong>. Design, optimize, and test prompts that interact with fine-tuned models so that the models generate the desired content or achieve the desired effect.\n",
            date: "May-2024 - September-2024"
        }
    ]
}

export default INFO

