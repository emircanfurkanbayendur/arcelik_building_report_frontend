import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container
            fluid
            className="text-center text-lg-start bg-light text-muted"
        >
            <div
                className="text-center p-2"
                style={{ backgroundColor: '#f7f7fa' }}
            >
                <small>© 2023 Copyright: </small>
                <small className="text-reset fw-bold">
                    Yapı Sorgulama Sistemi
                </small>
            </div>
        </Container>
    );
};

export default Footer;
