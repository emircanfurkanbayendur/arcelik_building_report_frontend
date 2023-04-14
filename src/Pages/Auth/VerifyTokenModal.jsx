import { useState } from "react";
import React from "react";
import { Modal } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import { TextField, Button } from "@mui/material";
import { postForgotPassword, postVerifyToken } from "../../api/auth";
function VerifyTokenModal(props) {
  const [inputText, setInputText] = useState("");

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Mail Doğrulama</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <p className="font-monospace d-flex justify-content-center">
              Mailinize gelen doğrulama kodunu giriniz...
            </p>
          </Row>
          <Row>
            <TextField
              label="Doğrulama Kodu"
              value={inputText}
              size="small"
              fullWidth
              onChange={(event) => setInputText(event.target.value)}
            />
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Kapat
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            postVerifyToken(inputText);
          }}
        >
          Doğrula
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerifyTokenModal;
