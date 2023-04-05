import React , { useState }from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon,  MDBCheckbox, MDBBtn,MDBInput } from 'mdb-react-ui-kit';
import {Button } from '@mui/material';
import {useNavigate} from "react-router-dom"
import {useLocation} from 'react-router-dom';
import updateUser from '../../api/user';



const Update = () => {
 
const [name,setName] = useState("");
const [lastName,setlastName] = useState("");
const [email,setEmail] = useState("");
const [pass,setPass] = useState("");
const location = useLocation();
 let navigate = useNavigate();

  const Update = () => {
 
 updateUser(user); 
 navigate("/profile");
  
  
  };
  const user = {
        id:JSON.parse(localStorage.getItem('user')).id,
        firstName:name==""
        ? JSON.parse(localStorage.getItem('user')).firstName
        : name,
        lastName:lastName==""
        ? JSON.parse(localStorage.getItem('user')).lastName
        : lastName,
        email:email==""
        ? JSON.parse(localStorage.getItem('user')).email
        : email,
        password:pass,
        createdAt: new Date().toJSON(),
        isActive: true,
        roleId: 1,
  };
 
 
    return (
    
       <div>
       
        <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                  <MDBCardText>Web Designer</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBInput id='form3Example2' defaultValue={JSON.parse(
                                                    localStorage.getItem('user')
                                                ).email}  onChange={(e)=>setEmail(e.target.value)}/>
                      </MDBCol>
                
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Şifre</MDBTypography>
                        <MDBInput id='form3Example2'  placeholder="***********" onChange={(e)=>setPass(e.target.value)}/ >
                      </MDBCol>
                    </MDBRow>

                    
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Ad</MDBTypography>
                        <MDBInput id='form3Example2'  defaultValue={JSON.parse(
                                                    localStorage.getItem('user')
                                                ).firstName}  onChange={(e)=>setName(e.target.value)}/>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Soyad</MDBTypography>
                        <MDBInput id='form3Example2' defaultValue={JSON.parse(
                                                    localStorage.getItem('user')
                                                ).lastName}  onChange={(e)=>setlastName(e.target.value)}/>
                      </MDBCol>
                    </MDBRow>
                   
                        <Button
                        onClick={()=>Update()}
                        >
                         Bilgileri Güncelle
                        </Button>
                       
                    
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
     
    </section>
    </div>
    )
};

export default Update;
