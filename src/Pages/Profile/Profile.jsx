import React , { useState }from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon,  MDBCheckbox, MDBBtn,MDBInput } from 'mdb-react-ui-kit';
import {Button } from '@mui/material';
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import {useLocation} from 'react-router-dom';

const refresh = () => window.location.reload(true)


const Profile = () => {
 

 const location = useLocation();
 let navigate = useNavigate();
  const Logout = () => {
  
    localStorage.removeItem("user");
    navigate("/");
    refresh();
  };
  const Update = () => {
   
       navigate("/update");

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
                        <MDBCardText className="text-muted">{JSON.parse(
                                                    localStorage.getItem('user')
                                                ).email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Şifre</MDBTypography>
                        <MDBCardText className="text-muted">*********</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Ad</MDBTypography>
                        <MDBCardText className="text-muted">{JSON.parse(
                                                    localStorage.getItem('user')
                                                ).firstName}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Soyad</MDBTypography>
                        <MDBCardText className="text-muted">{JSON.parse(
                                                    localStorage.getItem('user')
                                                ).lastName}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <Button
                        onClick={()=>Logout()}
                        >
                         Çıkış Yap
                        </Button>
                        <Button
                        onClick={()=>Update()}
                        >
                         Bilgileri Güncelle
                        </Button>
                       
                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
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

export default Profile;
