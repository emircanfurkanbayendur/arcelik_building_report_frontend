import axios from 'axios';

export const getUsers = ()  => {
    var resultData;
    let config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };
    const url = `${process.env.REACT_APP_BASE_URL}/api/User`;
     axios.get(url,config).then(async (result) => {
        //resultData = await result.data;
        localStorage.setItem("users",JSON.stringify(result.data));
        
      // console.log(JSON.stringify(result.data[0]));
        
    });

    return  resultData;
};

export const updateUser = async ({
    id,
    firstName,
    lastName,
    email,
    password,
    
}) => {
    const user = {
        id,
        firstName,
        lastName,
        email,
        password,
        createdAt: new Date().toJSON(),
        isActive: true,
        roleId: 1,
        
     
    };
    const refresh = () => window.location.reload(true)
const url = `${process.env.REACT_APP_BASE_URL}/api/User`;

   await  axios.put(url, user,{ headers: {"Authorization" : ` Bearer ${localStorage.getItem("token")}`} }).then((result) => {
    
        const dt = result.data;
        localStorage.setItem(
            'user',
            JSON.stringify(dt)
        );
       
        
        refresh();
    });
   
};
export default  updateUser 
