import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Alert,Spinner } from 'react-bootstrap';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MDBBadge } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import { postDatasAsync } from '../../redux/project/reduxRole';
import { useSelector } from 'react-redux';
import {getDatasAsync} from '../../redux/project/reduxRole'
import { useDispatch } from 'react-redux';
import BeatLoader from "react-spinners/BeatLoader";
const Roles = () => {
  
    const dispatch = useDispatch();
    
    const [variable, setVariable] = useState("")
    const [variable2, setVariable2] = useState("")
    const [control, setControl] = useState("true")
    const [showAlert, setShowAlert] = useState("false");
    const [showAlert2, setShowAlert2] = useState("false");
    
    useEffect(  () => {
         dispatch( getDatasAsync())

    }, [dispatch])
   const list =  useSelector((state) => state.reduxRole.items)
   const pending =  useSelector((state) => state.reduxRole. getDatasIsPending)
   const rejected = useSelector((state) => state.reduxRole. getDatasIsRejected)
   const updateRolePending = useSelector((state) => state.reduxRole. updateRolePending)
   const updateRoleIsRejected = useSelector((state) => state.reduxRole. updateRoleIsRejected)
    const updateRoleIsAccepted = useSelector((state) => state.reduxRole. updateRoleIsAccepted)
   console.log(list)
   
    const createRoleAuthority = async(variable, variable2) => {
        setControl("false")
        let data = {
            "role": variable,
            "authority": variable2
        }
      await dispatch(postDatasAsync(data))
      setShowAlert("false")
      setShowAlert2("false")

    }


    const handleChange = (event) => {
        setVariable(event.target.value);
        
    };
    const handleChange2= (event) => {
       
        setVariable2(event.target.value);
    };
   
    return (
        <div >
            
            <Container
                style={{
                    minHeight: window.visualViewport.height - 100,
                    maxWidth: '60%',
                    flex: 1
                }}
            >
                <br />




                <Row className="mt-1" >
                    <br />
                    {updateRoleIsAccepted == "true" && showAlert=="false" && updateRoleIsRejected==null ? (
                        <>
                            <Alert
                                variant="success"
                              onClose= {() => setShowAlert("true")}
                              dismissible
                            >
                                <Alert.Heading>
                                    Role Authority ekleme başarılı oldu
                                    
                                </Alert.Heading>
                                <p>
                                    Role Authority ekleme başarılı
                                    oldu. Alt tarafta bulunan listeden Authority bilgilerini kontrol edebilirsiniz.
                                </p>
                            </Alert>
                        </>
                    ):""}
                    
                    {updateRoleIsRejected !=null && showAlert2=="false" ?(
                        <>
                            <Alert
                                variant="danger"
                                onClose= {() => setShowAlert2("true")}
                                dismissible
                            >
                                <Alert.Heading>
                                    Role Authority ekleme başarısız oldu !!!!
                                    
                                </Alert.Heading>
                                <p>
                                    Role Authority başarısız
                                    oldu. Lütfen eklediğiniz Role Authority bilgilerini kontrol ediniz. (Eklenilen Role Authority daha önce eklenmiş olabilir.)
                                </p>
                            </Alert>
                        </>
                    ):""}
                   


                    <Card border="secondary" >

                        <Card.Body>

                            <Card.Title style={{ fontWeight: "bold" }}>Create Role Authority </Card.Title>
                            <hr />
                            <Row className="mb-3">
                            <Col sm={12} md={12} lg={6}>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={variable}
                                            label="Role"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={1}>Admin</MenuItem>
                                            <MenuItem value={2}>Guest</MenuItem>
                                            <MenuItem value={3}>Confirmed Guest</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                            </Col>
                            <Row className="my-1 d-sm-block d-lg-none"></Row>
                            <Col sm={12} md={12} lg={6}>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" >Authority</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={variable2}
                                            input={
                                                <OutlinedInput label="Authority" />
                                            }
                                            label="Age"
                                            onChange={handleChange2}
                                        >
                                            <MenuItem value={1}>Download</MenuItem>
                                            <MenuItem value={2}>Upload</MenuItem>
                                            <MenuItem value={3}>Delete</MenuItem>
                                            <MenuItem value={4}>Update</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                
                                

                            </Col>
                            <Row >
                                <h1></h1>
                            </Row>
                            <Button
                                                
                                                variant="secondary"
                                                
                                                onClick={async () => {createRoleAuthority(variable, variable2)
                                                   
                                                }}
                                            >
                                                {updateRolePending == true ? (
                                                <Spinner animation="border" />
                                            ) :  "Yetkilendir" }
                                                
                                                  
                                               
                                              
                                            </Button>
                           
                                            </Row>


                            





                        </Card.Body>

                    </Card>

                </Row>



                <br />
                <br />

                <hr></hr>



                <br />

                {pending == true ?(<>  <div style={{display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:'200px'}}>
<BeatLoader color="#585c5b" />
</div></>) :(<>
                <h2 style={{ fontWeight: "bold" }}>Role Authoritys</h2>
                <br />
{ rejected == null ?(<>
                {list.map((item, index) => (
                    <Row className="mt-1" key={index}>
                        <br />

                        <Card border="secondary" >

                            <Card.Body>

                                <Card.Title style={{ fontWeight: "bold" }}>Role Authority {index + 1}</Card.Title>
                                <hr />
                                <Card.Text>
                                    <Row>
                                        <Col md={4} style={{ fontSize: 20 }}>
                                            Role : {item.roleId == 1 ? <MDBBadge color='success' pill>
                                                Admin
                                            </MDBBadge> : item.roleId == 2 ? <MDBBadge color='secondary' pill>
                                                Guest
                                            </MDBBadge> : <MDBBadge color='warning' pill>   Confirmed Guest        </MDBBadge>}

                                        </Col>
                                        <Col md={{ span: 4, offset: 12 }} style={{ fontSize: 20 }}>
                                            Authority : {item.authorityId == 1 ? "Download" : item.authorityId == 2 ? "Upload" : item.authorityId == 3 ? "Delete" : "Update"}

                                        </Col>
                                    </Row>

                                </Card.Text>
                            </Card.Body>
                            <br />
                        </Card>
                        <br />
                    </Row>

                ))}</>):(<Container>
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
                    </Container>)}
                </>)}
                
            </Container>

        </div>

    )
}
export default Roles;