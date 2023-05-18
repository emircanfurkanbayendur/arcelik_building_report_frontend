import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button,Alert,Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import {getUsersDatasAsync} from '../../redux/project/reduxUsers'
import { useDispatch } from 'react-redux';
import {putUsersDatasAsync} from '../../redux/project/reduxUsers'
import BeatLoader from "react-spinners/BeatLoader";
const Users = () => {

   
    const dispatch = useDispatch();
    const [control,setControl] = useState("12345")
    const rejected=  useSelector((state) => state.reduxUsers. getUsersIsRejected)
    const  updateRole = async (id) => {
setControl("1234")
      await dispatch(putUsersDatasAsync(id))

   


  }

 

  useEffect( () => {
    setControl("1235")

dispatch( getUsersDatasAsync())
  







                                                       
  },[dispatch])
 
  const list =  useSelector((state) => state.reduxUsers.items)
  const pending =  useSelector((state) => state.reduxUsers. getUsersIsPending)
  const rolePending =  useSelector((state) => state.reduxUsers. updateRolePending)
  const roleRejected =  useSelector((state) => state.reduxUsers. updateRoleIsRejected)
  console.log(list)
  if(roleRejected){
alert("Yetkilendirme İşlemi Başarısız Oldu");

  }

if(rejected){
  
  return(
 <div>
 <br/>
              <br/>
              <br/>
  <Container>
      <>
          <Alert
              variant="danger"
            
              
          >
              <Alert.Heading>
                 Kullanıcıların Listelenme İşlemi Sırasında Bir Hata Oluştu
              </Alert.Heading>
              <br/>
              <br/>
              <br/>
              <p>
              Kullanıcıların Listelenme İşlemi Sırasında Bir Hata Oluştu.
              Lütfen Daha Sonra Tekrar Deneyiniz...
              </p>
              <br/>
              <br/>
              <br/>
          </Alert>
      </>
      </Container>
</div>
)
}
else{

    return (

 
   
      <div >
          {pending == false ? (
        <>
         <Container 
          style={{
            minHeight: window.visualViewport.height - 100,
            maxWidth: '60%',
            flex: 1
          }}
        >
          <br />


          {list.map((item, index) => (

            <Row className="mt-1" key={index}>
              <br />

              <Card border="secondary" >

                <Card.Body>

                  <Card.Title style={{ fontWeight: "bold" }}>{item.firstName} {item.lastName}</Card.Title>
                  <hr />
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
                        Aktiflik Durumu :  {item.isActive == true ? <button type="button" class="btn btn-outline-success" data-mdb-ripple-color="dark" disabled>Aktif</button> : <button type="button" class="btn btn-outline-warning" data-mdb-ripple-color="dark" disabled>İn-Aktif</button>}

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
                        Kullanıcı Rolü : {item.roleId}
                      </Col>

                    </Row>
                    <Row>
                      
                      
                        {item.roleId!=1 ?
                        <Button variant="secondary" size="12" onClick={ () =>updateRole(item.id) }>
                           {rolePending == true ? (
                                                <Spinner animation="border" />
                                            ) :  "Yetkilendir" }
                       
                      </Button>:
                        ""}
                        
                     
                    </Row>

                  </Card.Text>
                </Card.Body>
                <br />
              </Card>
              <br />
            </Row>
          ))}

        </Container>
        </>
    ): <Container 
    style={{
      minHeight: window.visualViewport.height - 100,
      maxWidth: '60%',
      flex: 1
    }}
  >
    <br />
    <div style={{display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:'370px'}}>
<BeatLoader color="#585c5b" />
</div>
    

   

  </Container>
  }
       
      
      </div>



    );
          
         
  }
};

export default Users;
