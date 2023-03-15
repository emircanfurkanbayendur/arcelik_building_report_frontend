import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import SearchIcon from '@rsuite/icons/Search';
import SendIcon from '@rsuite/icons/Send';
import ProjectIcon from '@rsuite/icons/Project';
import MemberIcon from '@rsuite/icons/Member';
import EmailIcon from '@rsuite/icons/Email';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
import {Button} from '@mui/material';
const linkStyle = {
    textDecoration: 'none',
    color: '#000',
};

const NavigationBar = ({ onSelect, activeKey, ...props }) => {
    const navigation = useNavigate();
    const informations = () => {
        if(localStorage.getItem("user")==null){
            navigation("/auth");
        
        
        }
        else{
            
            navigation("/profile");
            };
    }
    return (
        <Container fluid>
            <Row>
                <Navbar {...props}>
                    <Col>
                        <Navbar.Brand href="/">
                            <h6>Yapı Sorgulama Sistemi</h6>
                        </Navbar.Brand>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <Nav onSelect={onSelect} activeKey={activeKey}>
                            <Nav.Item eventKey="1" icon={<HomeIcon />}>
                                <Link to="/HomePage" style={linkStyle}>
                                    Anasayfa
                                </Link>
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<SearchIcon />}>
                                <Link to="/documentinquiry" style={linkStyle}>
                                    Yapı Durum Belgesi Sorgulama
                                </Link>
                            </Nav.Item>
                            <Nav.Item eventKey="3" icon={<SendIcon />}>
                                <Link to="/" style={linkStyle}>
                                    Faydalı bağlantılar
                                </Link>
                            </Nav.Item>
                            <Nav.Menu title="Hakkında" style={linkStyle}>
                                <Nav.Item eventKey="4" icon={<ProjectIcon />}>
                                    <Link to="/project" style={linkStyle}>
                                        Proje
                                    </Link>
                                </Nav.Item>
                                <Nav.Item eventKey="5" icon={<MemberIcon />}>
                                    <Link to="/team" style={linkStyle}>
                                        Takım
                                    </Link>
                                </Nav.Item>
                                <Nav.Item eventKey="6" icon={<EmailIcon />}>
                                    <Link to="/information" style={linkStyle}>
                                        İletişim
                                    </Link>
                                </Nav.Item>
                            </Nav.Menu>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav pullRight>
                            <Nav.Item icon={<UserInfoIcon />}>
                            <Button onClick={()=>informations()}>
                                {localStorage.getItem("user")==null
                                                ? 'Kullanıcı Girişi'
                                                : JSON.parse(
                                                    localStorage.getItem('user')
                                                ).firstName +
                                                ' ' +
                                                JSON.parse(
                                                    localStorage.getItem('user')
                                                ).lastName}
                                   
                                </Button>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Navbar>
            </Row>
        </Container>
    );
};

export default NavigationBar;
