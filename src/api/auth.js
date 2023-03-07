import axios from 'axios';

// Example API request when button is clicked.
export const saveUserToDatabase = async ({
    firstName,
    lastName,
    email,
    password,
}) => {
    const user = {
        id:0,
        firstName,
        lastName,
        email,
        password,
        createdAt: new Date().toJSON(),
        isActive: true,
        roleId: 1,
    };
//console.log(user)
const user2={
    "firstName": "values.firstName",
    "lastName": "values.lastName",
    "email": "values.email",
    "password": "values.password",
    "createdAt": new Date().toJSON(),
    "isActive": true,
    "roleId": 1,



} 
const url = `${process.env.REACT_APP_BASE_URL}/api/User`;
//console.log(user2)
    await  axios.post(url, user).then((result) => {
        const dt = result.data;
    });
};
export default  saveUserToDatabase 
