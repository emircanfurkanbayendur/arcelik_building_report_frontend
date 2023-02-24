import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import Form from './Form';

import AUTH_IMAGE from '../../images/auth_image.avif';

const Auth = () => {
    return (
        <>
            <Container fluid>
                <Row
                    className="align-items-center"
                    style={{ minHeight: window.visualViewport.height - 100 }}
                >
                    <Col sm={0} lg={6} className="d-none d-lg-block">
                        <Figure>
                            <Figure.Image
                                className="border border-secondary rounded"
                                width="100%"
                                height="100%"
                                alt="Yapı Sorgulama Sistemi"
                                src={AUTH_IMAGE}
                            />
                        </Figure>
                    </Col>

                    <Col sm={12} lg={6}>
                        <Form></Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Auth;
