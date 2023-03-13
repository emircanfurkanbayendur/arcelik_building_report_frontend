import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import QRCode from 'react-qr-code';

const ListCardItem = () => {
    const [isInEditMode, setIsInEditMode] = useState(false);
    const [buildingInfo, setBuildingInfo] = useState({
        code: '123456789',
        name: 'Test Apartmanı',
        address: 'Abc Mahallesi, Abc Sokak, No: 1 Çankaya/Ankara',
        updatedAt: '02.07.2022',
    });

    return (
        <Card className="mb-3">
            <Card.Body>
                <Row className="align-items-center">
                    <Col sm={10}>
                        <Card.Title>
                            <h1>
                                {!isInEditMode ? (
                                    buildingInfo.name
                                ) : (
                                    <>
                                        <h5>Yapı Adı:</h5>
                                        <TextField
                                            size="small"
                                            fullWidth
                                            value={buildingInfo.name}
                                            onChange={(
                                                event: React.ChangeEvent<HTMLInputElement>
                                            ) => {
                                                setBuildingInfo((prev) => ({
                                                    ...prev,
                                                    name: event.target.value,
                                                }));

                                                console.log(buildingInfo);
                                            }}
                                        />
                                    </>
                                )}
                            </h1>
                        </Card.Title>
                        <Card.Subtitle className="mb-1 text-muted">
                            Yapı Kodu:{' '}
                            {!isInEditMode ? (
                                buildingInfo.code
                            ) : (
                                <>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        value={buildingInfo.code}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            setBuildingInfo((prev) => ({
                                                ...prev,
                                                code: event.target.value,
                                            }));

                                            console.log(buildingInfo);
                                        }}
                                    />
                                </>
                            )}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-1 text-muted">
                            Güncellenme Tarihi: {buildingInfo.updatedAt}
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
                            value={buildingInfo.code}
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
                            {!isInEditMode ? (
                                buildingInfo.address
                            ) : (
                                <>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        value={buildingInfo.address}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            setBuildingInfo((prev) => ({
                                                ...prev,
                                                address: event.target.value,
                                            }));

                                            console.log(buildingInfo);
                                        }}
                                    />
                                </>
                            )}
                        </Card.Text>
                    </Col>
                    <Col sm={2} className="pt-2">
                        <Row className="mb-1">
                            <Button variant="danger" size="sm">
                                Kaydı sil
                            </Button>
                        </Row>
                        <Row>
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={() => {
                                    setIsInEditMode((prev) => !prev);
                                }}
                            >
                                {!isInEditMode ? 'Kaydı düzenle' : 'Kaydet'}
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ListCardItem;
