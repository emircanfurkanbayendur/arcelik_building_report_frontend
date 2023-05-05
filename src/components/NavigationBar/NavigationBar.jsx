import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import SearchIcon from '@rsuite/icons/Search';
import SendIcon from '@rsuite/icons/Send';
import ProjectIcon from '@rsuite/icons/Project';
import MemberIcon from '@rsuite/icons/Member';
import EmailIcon from '@rsuite/icons/Email';
import AdminIcon from '@rsuite/icons/Admin';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PeoplesIcon from '@rsuite/icons/Peoples';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/auth/authSlice';

const linkStyle = {
    textDecoration: 'none',
    color: '#000',
};

const NavigationBar = ({ onSelect, activeKey, ...props }) => {
    const navigation = useNavigate();
    const user = useSelector(userSelector);

    console.log(user);
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
                                <Link to="/home" style={linkStyle}>
                                    Anasayfa
                                </Link>
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<SearchIcon />}>
                                <Link to="/documentinquiry" style={linkStyle}>
                                    Yapı Durum Belgesi Sorgulama
                                </Link>
                            </Nav.Item>

                            <Nav.Menu title="Hakkında" style={linkStyle}>
                                <Nav.Item eventKey="3" icon={<ProjectIcon />}>
                                    <Link to="/project" style={linkStyle}>
                                        Proje
                                    </Link>
                                </Nav.Item>
                                <Nav.Item eventKey="4" icon={<MemberIcon />}>
                                    <Link to="/team" style={linkStyle}>
                                        Takım
                                    </Link>
                                </Nav.Item>
                                <Nav.Item eventKey="5" icon={<EmailIcon />}>
                                    <Link to="/information" style={linkStyle}>
                                        İletişim
                                    </Link>
                                </Nav.Item>
                            </Nav.Menu>
                            {user && user.roleId === 1 && (
                                <>
                                    <Nav.Item eventKey="6" icon={<AdminIcon />}>
                                        <Link to="/admin" style={linkStyle}>
                                            Yönetici Paneli
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item
                                        eventKey="7"
                                        icon={<PeoplesIcon />}
                                    >
                                        <Link to="/users" style={linkStyle}>
                                            Kullanıcı Yönetimi
                                        </Link>
                                    </Nav.Item>
                                </>
                            )}
                        </Nav>
                    </Col>
                    <Col>
                        <Nav pullRight>
                            <Nav.Item icon={<UserInfoIcon />}>
                                <Button onClick={null}>
                                    {user
                                        ? user.firstName + ' ' + user.lastName
                                        : 'Giriş Yap'}
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
