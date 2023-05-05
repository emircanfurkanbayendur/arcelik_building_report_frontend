import React from 'react';
import { Container, Row, Col, ListGroup, Tab, Tabs } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import CreateBuild from './CreateBuild/CreateBuild';
import ListBuilds from './ListBuilds/ListBuilds';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { tokenSelector, userSelector } from '../../redux/auth/authSlice';

const Admin = () => {
    const user = useSelector(userSelector);
    const token = useSelector(tokenSelector);

    useEffect(() => {
        console.log('buralar bi bak -------------');
        console.log(user);
        console.log(token);
    }, []);
    if (!user || user.roleId != 1) {
        return window.location.replace('/');
    }
    return (
        <Container style={{ minHeight: window.visualViewport.height - 100 }}>
            <Tabs
                defaultActiveKey="createbuild"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="createbuild" title="Yeni Yapı Girişi">
                    <CreateBuild />
                </Tab>

                <Tab eventKey="listbuilds" title="Kayıtlı Yapılar">
                    <ListBuilds />
                </Tab>
            </Tabs>
        </Container>
    );
};

export default Admin;
