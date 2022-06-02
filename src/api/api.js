import axios from "axios";

export default class GetData {

    static async getUsers(limit = 4, page = 1) {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users/', {
            params: {
                _limit: limit,
                _page: page,
            }
        })
        return responce;
    }

    static async getUserById(id) {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        return responce; 
    }

    static async getUserPosts(id) {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts/`)
        return responce; 
    }

    static async getPostById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async getComment(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }

};
