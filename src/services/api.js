import axios from 'axios'

export const getUserData = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data;
}

export const getPostData = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data;
}

export const getCommentData = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
    return response.data;
}