import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
const Documentinfo = () => {
    const location = useLocation();
const data = location.state.id;
console.log(data[0].report);
var data2 = "data:application/pdf;base64," + data[0].report 
    return (
        <div>
         <iframe src={data2} height="1000px" width="100%" ></iframe>
         
        </div>
    );
};

export default Documentinfo;
