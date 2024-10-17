import axios from "axios";

const baseURL = 'https://10.15.159.178:5001'

const getMessages = async () =>{
    try{
        const response = await axios.get(`${baseURL}/message`)
        return response.data
    }catch (error){
        console.error('Error getting chats', error)
        throw error
    }
}

const postMessage = async (message) =>{
    try{
        const response = await axios.post(`${baseURL}/post`,message)
        return response.data
    }catch (error){
        console.error('Error sending messages', error)
        throw error
    }
}

export {getMessages, postMessage}