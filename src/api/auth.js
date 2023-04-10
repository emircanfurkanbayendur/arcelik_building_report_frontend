import axios from 'axios';

const POST_USER_URL = `${process.env.REACT_APP_BASE_URL}/api/User`;
const POST_LOGIN_AUTHENTICATE_URL = `${process.env.REACT_APP_BASE_URL}/api/Login/authenticate`;

// Example API request when button is clicked.
export const postUser = async ({ firstName, lastName, email, password }) => {
    var resultData;

    const user = {
        
        firstName,
        lastName,
        email,
        password,
        
    };

    await axios.post(POST_USER_URL, user).then(async (result) => {
        resultData = await result.data;
    });

    return await resultData;
};

export const postAuthenticate = async ({ email, password }) => {
    var resultData;

    const user = {
        email,
        password,
    };

    await axios.post(POST_LOGIN_AUTHENTICATE_URL, user).then(async (result) => {
        resultData = await result.data;
    });

    return await resultData;
};
