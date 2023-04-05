
import React, { useEffect, useState } from 'react';
import {  useParams } from "react-router-dom";
import { getBuildingByCode } from '../../api/building';
import CryptoJS from "crypto-js";
const Documentinfo = () => {
    const [buildingInfo, setBuildingInfo] = useState({
       
        documents: []
     
    });
   const {id} = useParams();
   var data2;

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
        const secretPass = "XkhZG4fW2t2W";
         const bytes = CryptoJS.AES.decrypt(id, secretPass);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
 
        const building = await  getBuildingByCode(data);
        await setBuildingInfo(building);
 
        console.log('building');
        console.log(building.documents[0].report);
        setBuildingInfo(building.documents[0].report);
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])
  var data2 = "data:application/pdf;base64," + buildingInfo 
  console.log(data2)
//console.log({id}.id);

    return (
        
        <div>
            
        <iframe src={data2} height="1000px" width="100%" ></iframe>
          
      
        </div>
    );
};

export default Documentinfo;
