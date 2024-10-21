import axios from "axios";

const baseURL = 'http://127.0.0.1:5001'

const getMessages = async () =>{
    try{
        const response = await axios.get(`${baseURL}/message`)
        return response.data
    }catch (error){
        console.error('Error getting chats', error)
        throw error
    }
}

const postMessage = async (message) => {
    try {
        const response = await axios.post(`${baseURL}/post`, message, {
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