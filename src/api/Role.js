import axios from 'axios';

export const getRoleAuthority = async () => {
 
    var resultData;
    let config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };
    const url = `${process.env.REACT_APP_BASE_URL}/api/RoleAuthority`;
    await axios.get(url,config).then(async (result) => {
        
     
   
       
       
     
     
       resultData = result.data;
    
 
        
    });
return resultData;
};
export const postRoleAuthority = async ( roleId,AuthorityId ) => {
    var resultData;
  var  authorityId = AuthorityId;

    const roleAuthority = {
        
        roleId,
        authorityId,
        
        
    };
    let config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        credentials:'include'
    };
   
    const url = `${process.env.REACT_APP_BASE_URL}/api/RoleAuthority`;
    await axios.post(url, roleAuthority,config).then(async (result) => {
        resultData = result.data;
       
    })

    return await resultData;
};