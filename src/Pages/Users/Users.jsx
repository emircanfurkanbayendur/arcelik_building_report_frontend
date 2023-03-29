import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Figure,Button } from 'react-bootstrap';
import { getUsers } from '../../api/updateuser';
import Card from 'react-bootstrap/Card';
import ListCardItem from '../../components/ListCardItem/ListCardItem';


const Users = () => {
 
   
    useEffect(() => {
     
        getUsers();
       console.log(JSON.parse(localStorage.getItem("users")))
      
      }, []);
      
    
   
    return (
       
            
          <div >
 <Container
            style={{
                minHeight: window.visualViewport.height - 100,
                maxWidth: '60%',
            }}
        >
          <br/>
          
              
            {JSON.parse(localStorage.getItem("users")).map((item, index) => (
              
                <Row className="mt-1" key={index}>
               <br/>
               
                   <Card border="secondary" >
       
        <Card.Body>
        
          <Card.Title style={{fontWeight: "bold"}}>{item.firstName} {item.lastName}</Card.Title>
          <hr/>
          <Card.Text>
          <Row>
            <Col md={4} style={{ fontSize: 20 }}>
            Ad : {item.firstName}
        
           </Col> 
           <Col md={{ span: 4, offset: 12 }} style={{ fontSize: 20 }}>
           Soyad : {item.lastName}
        
           </Col> 
            </Row>
            <Row>
            <Col md={4} style={{ fontSize: 20 }}>
            E-mail : {item.email}
        
           </Col> 
           <Col md={{ span: 4, offset: 12 }} style={{ fontSize: 20 }}>
           Aktiflik Durumu :  {item.isActive==true?'Aktif':'Pasif'}
        
           </Col> 
            </Row>
            <Row>
            <Col md={4} style={{ fontSize: 20 }}>
            Kayıt Tarihi : {item.createdAt}
        
           </Col> 
           <Col md={{ span: 4, offset: 12 }} style={{ fontSize: 20 }}>
           id :  {item.id}
        
           </Col> 
            </Row>
           <Row className="mb-1">
           <Col md={4} style={{ fontSize: 20 }}>
            Kullanıcı Rolü : {item.role.name}
            </Col>
            
                        </Row>
            <Row>
            <Col md={{ span: 4, offset: 12 }} style={{ fontSize: 20}}>
                            <Button variant="danger" size="12">
                                Yetkilendir
                            </Button>
                            </Col>
            </Row>

          </Card.Text>
        </Card.Body>
        <br/>
      </Card>
      <br/>
                </Row>
            ))}
           
        </Container>
          </div>
          
      
        
    );
};

export default Users;
