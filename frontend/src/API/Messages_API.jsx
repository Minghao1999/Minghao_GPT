import axios from "axios";

const baseURL = 'http://127.0.0.1:3000'

const getMessages = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/messages`);
        // Restructure the response to match the expected format: {date: [messages]}
        const historyMessages = response.data.reduce((acc, day) => {
            acc[day._id] = day.messages; // _id is the date, and messages is the array of messages
            return acc;
        }, {});
        return historyMessages;
    } catch (error) {
        console.error('Error getting chats', error);
        throw error;
    }
}


const postMessage = async (message) => {
    try {
        const response = await axios.post(`${baseURL}/api/messages`, message, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error sending messages', error);
        throw error;
    }
};


export {getMessages, postMessage}