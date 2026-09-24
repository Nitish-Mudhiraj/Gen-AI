import axios from "axios";

const API_URL = "https://gen-ai-inr6.onrender.com";

export const register = async (username, email, password) => {
    try {
        const response = await axios.post(
            `${API_URL}/perplex/users/register`,
            {
                username,
                email,
                password
            },
            {
                withCredentials: true
            }
        );

        return response.data;

    } catch (err) {
        console.log(err);
    }
};


export const login = async (email, password) => {
    try {
        const response = await axios.post(
            `${API_URL}/perplex/users/login`,
            {
                email,
                password
            },
            {
                withCredentials: true
            }
        );

        return response.data;

    } catch (err) {
        console.log(err);
    }
};


export const getme = async () => {
    try {
        const response = await axios.get(
            `${API_URL}/perplex/users/get-me`,
            {
                withCredentials: true
            }
        );

        return response.data;

    } catch (err) {
        console.log(err);
    }
};

