import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <div
                className="text-center p-2"
                style={{ backgroundColor: '#f7f7fa' }}
            >
                <small>© 2023 Copyright: </small>
                <small className="text-reset fw-bold">
                    Yapı Sorgulama Sistemi
                </small>
            </div>
        </footer>
    );
};

export default Footer;
