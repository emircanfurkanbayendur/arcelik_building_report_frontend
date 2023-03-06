import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import QRCode from 'react-qr-code';

const ListCardItem = ({ buildingInfo }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Row className="align-items-center">
                    <Col sm={10}>
                        <Card.Title>
                            <h1>Test Apartmanı</h1>
                        </Card.Title>
                        <Card.Subtitle className="mb-1 text-muted">
                            Yapı Kodu: 123456789
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-1 text-muted">
                            Güncellenme Tarihi: 02.07.2022
                        </Card.Subtitle>
                    </Col>
                    <Col sm={2}>
                        <QRCode
                            size={256}
                            style={{
                                height: 'auto',
                                maxWidth: '100%',
                                width: '100%',
                            }}
                            value={123456789}
                        />
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <Row>
                    <Col sm={10} className="pt-2">
                        <Card.Subtitle className="mt-2 text-muted">
                            Adres Bilgisi:
                        </Card.Subtitle>
                        <Card.Text>
                            Abc Mahallesi, Abc Sokak, No: 1 Çankaya/Ankara
                        </Card.Text>
                    </Col>
                    <Col sm={2} className="pt-2">
                        <Row className="mb-1">
                            <Button variant="danger" size="sm">
                                Kaydı sil
                            </Button>
                        </Row>
                        <Row>
                            <Button variant="secondary" size="sm">
                                Kaydı düzenle
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ListCardItem;
