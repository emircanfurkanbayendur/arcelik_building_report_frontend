import { useState } from 'react';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import { TextField, Button } from '@mui/material';
import {
    postAuthenticate,
    postForgotPassword,
    postVerifyToken,
} from '../../api/auth';
import {
    postAuthenticateAsync,
    postVerifyTokenAsync,
} from '../../redux/auth/services';

function VerifyTokenModal({ show, onHide, isResetModal, values }) {
    const [inputText, setInputText] = useState('');

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {isResetModal ? 'Şifre Sıfırlama' : 'Mail Doğrulama'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <p className="font-monospace d-flex justify-content-center">
                            {isResetModal
                                ? 'Şifresi sıfırlanıcak mail adresini giriniz...'
                                : 'Mailinize gelen doğrulama kodunu giriniz...'}
                        </p>
                    </Row>
                    <Row>
                        <TextField
                            label={
                                isResetModal ? 'Mail adresi' : 'Doğrulama Kodu'
                            }
                            value={inputText}
                            size="small"
                            fullWidth
                            onChange={(event) =>
                                setInputText(event.target.value)
                            }
                        />
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Kapat
                </Button>
                <Button
                    variant="primary"
                    onClick={async () => {
                        if (isResetModal) {
                            await postForgotPassword(inputText);
                        } else {
                            await postVerifyTokenAsync(inputText);
                            await postAuthenticateAsync(values);

                            window.location.reload();
                        }

                        await onHide();
                    }}
                >
                    {isResetModal ? 'Sıfırla' : 'Doğrula'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VerifyTokenModal;
