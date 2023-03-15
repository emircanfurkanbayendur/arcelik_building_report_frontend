import axios from 'axios';

const POST_USER_URL = `${process.env.REACT_APP_BASE_URL}/api/User`;
const POST_AUTHENTICATE_URL = `${process.env.REACT_APP_BASE_URL}/api/User/authenticate`;

// Example API request when button is clicked.
export const postUser = async ({ firstName, lastName, email, password }) => {
    var resultData;

    const user = {
        id: 0,
        firstName,
        lastName,
        email,
        password,
        createdAt: new Date().toJSON(),
        isActive: true,
        roleId: 1,
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

    await axios.post(POST_AUTHENTICATE_URL, user).then(async (result) => {
        resultData = await result.data;
    });

    return await resultData;
};
