import axios from 'axios';

// Example API request when button is clicked.
export const saveUserToDatabase = async ({
    firstName,
    lastName,
    mailAddress,
    password,
}) => {
    const user = {
        firstName,
        lastName,
        mailAddress,
        password,
    };

    await axios
        .post(
            `${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_API_PORT}`,
            { user }
        )
        .then((res) => {
            console.log(res);
            console.log(res.data);
        });
};
