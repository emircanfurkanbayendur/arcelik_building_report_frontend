import axios from 'axios';

const POST_USER_URL = `${process.env.REACT_APP_BASE_URL}/api/User`;
const POST_LOGIN_AUTHENTICATE_URL = `${process.env.REACT_APP_BASE_URL}/api/Login/authenticate`;
const POST_VERIFY_URL = `${process.env.REACT_APP_BASE_URL}/api/User/verifyToken?token=`;
const POST_FORGOT_URL = `${process.env.REACT_APP_BASE_URL}/api/User/ForgotPassword?mail=`;

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

export const postVerifyToken = async ( token ) => {
    var resultData;
    

    await axios.post(POST_VERIFY_URL+token).then(async (result) => {
        resultData = await result.data;
    });

    return await resultData;
};

export const postForgotPassword = async ( mail ) => {
    var resultData;
    

    await axios.post(POST_FORGOT_URL+mail).then(async (result) => {
        resultData = await result.data;
    });

    return await resultData;
};
