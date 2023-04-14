import { useState } from "react";
import React from "react";
import { Modal } from "react-bootstrap";
import { Container, Row} from "react-bootstrap";
import { TextField, Button } from "@mui/material";
import { postForgotPassword } from "../../api/auth";
function ResetPasswordModal(props) {
  const [inputText, setInputText] = useState("");

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Şifre Sıfırlama</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <p className="font-monospace d-flex justify-content-center">
              Şifresi sıfırlanıcak mail adresini giriniz...
            </p>
          </Row>
          <Row>
            <TextField
              label="Mail adresi"
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
            postForgotPassword(inputText);
          }}
        >
          Sıfırla
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ResetPasswordModal;
