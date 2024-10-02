import axios from "axios";

const baseURL = 'http://127.0.0.1:5000'

const getMessages = async () =>{
    try{
        const response = await axios.get(`${baseURL}/get`)
        return response.data
    }catch (error){
        console.error('Error getting chats', error)
        throw error
    }
}

export {getMessages}