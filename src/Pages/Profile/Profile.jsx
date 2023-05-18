import React, { useState, useEffect } from 'react';
import {MDBCol, MDBContainer,MDBRow,MDBCard,MDBCardText,MDBCardBody,MDBInput} from 'mdb-react-ui-kit';
import {Button,Row,Alert,Spinner} from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import {  deepPurple } from '@mui/material/colors';
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserDatasAsync, patchUsersDatasAsync } from '../../redux/project/reduxUser';
import BeatLoader from "react-spinners/BeatLoader";

const refresh = () => window.location.reload(true)


const Profile = () => {

  const [profile, setProfile] = useState("True")
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [control, setControl] = useState("")
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const Logout = () => {

    localStorage.removeItem("user");
    navigate("/");
    refresh();
  };
  const UpdateUser = async () => {

    await dispatch(patchUsersDatasAsync(user))
    setProfile('True')


  };

  const ProfileSet = () => {
    setProfile("False")

  };

  useEffect(() => {
setControl("1235")
dispatch(getUserDatasAsync(JSON.parse(localStorage.getItem('user')).id));
console.log("123");
    


 


  }, [dispatch])
  
  const userInfo =  useSelector((state) => state.reduxUser.items)
  const getUserDatasPending =  useSelector((state) => state.reduxUser.getUserDatasPending)
  const rejected =  useSelector((state) => state.reduxUser.getUserDatasRejected)
  const updateProfilePending =  useSelector((state) => state.reduxUser.patchUsersDatasPending)
  const patchUsersDatasRejected = useSelector((state) => state.reduxUser.patchUsersDatasRejected)


  const user = {
    id: userInfo.id,
    firstName: name == ""
      ? userInfo.firstName
      : name,
    lastName: lastName == ""
      ? userInfo.lastName
      : lastName,
    email: email == ""
      ? userInfo.email
      : email

  };
 

  return (

    <section className="vh-100">
      
      <br>
      </br>
      <br></br>
      <br></br>
      {getUserDatasPending == false ? <MDBContainer className="py-5">


<MDBRow>
  <MDBCol lg="4">
    <MDBCard className="mb-4">
      <MDBCardBody className="text-center">



        <br />
        <Avatar sx={{ bgcolor: deepPurple[500] }} alt="avatar"

          style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', margin: 'auto', width: '160px', height: '160px' }}

        >{userInfo.firstName}</Avatar>


        <br />
        <br />



        <Button onClick={() => ProfileSet()}>Profili Güncelle</Button>
        <Button outline className="ms-1" onClick={() => Logout()}>Çıkış Yap</Button>

      </MDBCardBody>
    </MDBCard>


  </MDBCol>
  {rejected == null ? <MDBCol lg="8">
    <MDBCard className="mb-4">
      <MDBCardBody>
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Ad</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            {profile == "True" ? <MDBCardText className="text-muted">{userInfo.firstName}</MDBCardText> : <MDBCardText className="text-muted"><MDBInput defaultValue={userInfo.firstName} onChange={(e) => setName(e.target.value)} type='text' /></MDBCardText>}
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Soyad</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            {profile == "True" ? <MDBCardText className="text-muted">{userInfo.lastName}</MDBCardText> : <MDBCardText className="text-muted"><MDBInput defaultValue={userInfo.lastName} onChange={(e) => setlastName(e.target.value)} type='text' /></MDBCardText>}
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>E-mail</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            {profile == "True" ? <MDBCardText className="text-muted">{userInfo.email}</MDBCardText> : <MDBCardText className="text-muted"><MDBInput defaultValue={userInfo.email} onChange={(e) => setEmail(e.target.value)} type='text' /></MDBCardText>}
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Kayıt Tarihi</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">{userInfo.createdAt}</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Aktiflik Durumu</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">{userInfo.isActive == true ? <MDBCardText className="text-muted">Aktif</MDBCardText> : <MDBCardText className="text-muted"></MDBCardText>}</MDBCardText>
          </MDBCol>
        </MDBRow>
        <Row className="mt-3 px-2">
          {profile != "True" ? <Button variant="primary" size="12" onClick={() => UpdateUser()}>
          {updateProfilePending == true ? (
                                                <Spinner animation="border" />
                                            ) :  "Profili Güncelle" }
          </Button> : ""}
        </Row>


      </MDBCardBody>
    </MDBCard>

    <MDBRow>



    </MDBRow>
  </MDBCol> :<MDBCol lg="8"><Alert
                            variant="danger"
                          
                            
                        >
                            <Alert.Heading>
                               Profil Bilgilerinin Getirilmesinde Bir Hata Oluştu
                            </Alert.Heading>
                            <br/>
                            <br/>
                            <br/>
                            <p>
                            Profil Bilgilerinin Getirilmesinde Bir Hata Oluştu Bunun Sebebi Oturum Süresini
                            Aşmanız Veya İnternet Bağlantınızın Olmaması Olabilir. Lütfen Çıkış Yapıpıp Ardından Tekrar Giriş Yapınız.
                            </p>
                            <br/>
                            <br/>
                            <br/>
                        </Alert>
                       
                        </MDBCol> 
                        }
  
</MDBRow>
</MDBContainer>:<div style={{display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:'200px'}}>
<BeatLoader color="#585c5b" />
</div>}
      
    </section>



  )
};

export default Profile;
