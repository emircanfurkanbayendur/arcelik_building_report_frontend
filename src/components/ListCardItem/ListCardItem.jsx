import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Card, Row, Col, Button, Accordion, Spinner } from 'react-bootstrap';
import QRCode from 'qrcode'
import { deleteDocument, postDocument } from '../../api/document';
import { putBuilding } from '../../api/building';
import DragDrop from '../DragDrop/DragDrop';
import CryptoJS from "crypto-js";
import { useEffect } from 'react';

const addressToString = (
    neighbourhood,
    street,
    buildingName,
    district,
    city
) => {
    return `${neighbourhood}, ${street}, ${buildingName} ${district}/${city}`;
};

const fileTypes = ['PDF'];

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

const ListCardItem = ({ building }) => {
    const [kontrol, setKontrol] = useState('')
    const [qr, setQr] = useState('')
    const [isPending, setIsPending] = useState(false);
    const [isPendingForNewDocument, setIsPendingForNewDocument] =
        useState(false);
    const [isInEditMode, setIsInEditMode] = useState(false);
    const [buildingInfo, setBuildingInfo] = useState(building);
    const [documentToUpload, setDocumentToUpload] = useState(null);

    const handleDeleteDocument = async (id) => {
        setIsPending(true);
       
        await deleteDocument(id);
        setBuildingInfo((prev) => ({
            ...prev,
            documents: prev.documents.filter((doc) => doc.id !== id),
        }));
        setIsPending(false);
    };
    const GenerateQRCode = (data) => {
      
		QRCode.toDataURL(data, {
			width: 200,
			margin: 2,
			color: {
				dark: '#000000',
				light: '#ffffff'
			}
		}, (err, data) => {
			if (err) return console.error(err)

			
			setQr(data)
		})
	}
    
    useEffect(() => {
        GenerateQRCode(`http://localhost:3000/document/${data}`);
        
    }, [kontrol]);
  
    const handlePostDocument = async () => {
        setIsPendingForNewDocument(true);
        const document = await postDocument({
            report: await getBase64(documentToUpload).then((data) =>
                data.replace('data:application/pdf;base64,', '')
            ),
            uploadedByUserId: buildingInfo.createdByUserId,
            buildingId: buildingInfo.id,
        });

        buildingInfo.documents.push(document);

        setDocumentToUpload(null);
        setIsPendingForNewDocument(false);
    };

    const handleUpdateBuilding = async () => {
        
        await putBuilding(buildingInfo);
        setKontrol(buildingInfo.code);
    };
   
    const secretPass = "XkhZG4fW2t2W";
    var data;
    do {
        data = CryptoJS.AES.encrypt(
           JSON.stringify(buildingInfo.code),
           secretPass
         ).toString();
         
     } while (data.search("/")>0);
     const deger = `http://localhost:3000/document/${data}`
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
                                    <Col sm={5}>
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

                                                
                                            }}
                                        />
                                    </Col>
                                )}
                            </h1>
                        </Card.Title>

                        <Card.Subtitle className="mb-1 text-muted">
                            <Row>
                                <Col sm={12}>
                                    Güncellenme Tarihi:{' '}
                                    {buildingInfo.documents[0]?.uploadedAt}
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                {!isInEditMode ? (
                                    <Col sm={12}>
                                        Yapı Kodu:
                                        {' ' + buildingInfo.code}
                                    </Col>
                                ) : (
                                    <>
                                        <Col sm={3}>
                                            Yapı Kodu:{' '}
                                            {!isInEditMode ? (
                                                buildingInfo.code
                                            ) : (
                                                <>
                                                    <TextField
                                                        size="small"
                                                        fullWidth
                                                        value={
                                                            buildingInfo.code
                                                        }
                                                        onChange={(
                                                            event: React.ChangeEvent<HTMLInputElement>
                                                        ) => {
                                                            setBuildingInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    code: event
                                                                        .target
                                                                        .value,
                                                                })
                                                            );

                                                            
                                                        }}
                                                    />
                                                </>
                                            )}
                                        </Col>
                                    </>
                                )}
                            </Row>
                            <Row className="mt-1">
                                {!isInEditMode ? (
                                    <Col sm={12}>
                                        Enlem:{' '}
                                        {' ' + buildingInfo.latitude + ' | '}{' '}
                                        Boylam: {' ' + buildingInfo.longitude}{' '}
                                    </Col>
                                ) : (
                                    <>
                                        <Col sm={3}>
                                            Enlem:{' '}
                                            {!isInEditMode ? (
                                                buildingInfo.latitude
                                            ) : (
                                                <>
                                                    <TextField
                                                        size="small"
                                                        fullWidth
                                                        value={
                                                            buildingInfo.latitude
                                                        }
                                                        onChange={(
                                                            event: React.ChangeEvent<HTMLInputElement>
                                                        ) => {
                                                            setBuildingInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    latitude:
                                                                        event
                                                                            .target
                                                                            .value,
                                                                })
                                                            );
                                                        }}
                                                    />
                                                </>
                                            )}
                                        </Col>
                                        <Col sm={3}>
                                            Boylam:{' '}
                                            {!isInEditMode ? (
                                                buildingInfo.longitude
                                            ) : (
                                                <>
                                                    <TextField
                                                        size="small"
                                                        fullWidth
                                                        value={
                                                            buildingInfo.longitude
                                                        }
                                                        onChange={(
                                                            event: React.ChangeEvent<HTMLInputElement>
                                                        ) => {
                                                            setBuildingInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    longitude:
                                                                        event
                                                                            .target
                                                                            .value,
                                                                })
                                                            );
                                                        }}
                                                    />
                                                </>
                                            )}
                                        </Col>
                                    </>
                                )}
                            </Row>
                        </Card.Subtitle>
                    </Col>
                    <Row className="my-2 d-sm-block d-lg-none"></Row>

                    <Col sm={2} className="d-flex justify-content-center">
                      
                    <img src={qr} width="200" height="200" style={{marginLeft:"auto", marginRight:"auto"}}/>
                  
                
               
                    </Col>
                    
                    <Row className="my-2 d-sm-block d-lg-none"></Row>

                    <Col sm={1}></Col>
                </Row>
                <Row>
                    <Col sm={10} className="pt-2">
                        <Card.Subtitle className="mt-2 text-muted">
                            Adres Bilgisi:
                        </Card.Subtitle>
                        <Card.Text>
                            {!isInEditMode ? (
                                addressToString(
                                    buildingInfo.neighbourhood,
                                    buildingInfo.street,
                                    buildingInfo.name,
                                    buildingInfo.district,
                                    buildingInfo.city
                                )
                            ) : (
                                <>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        value={addressToString(
                                            buildingInfo.neighbourhood,
                                            buildingInfo.street,
                                            buildingInfo.name,
                                            buildingInfo.district,
                                            buildingInfo.city
                                        )}
                                        disabled
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            setBuildingInfo((prev) => ({
                                                ...prev,
                                                address: event.target.value,
                                            }));

                                           
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
                        <Row className="mb-1">
                        <Button href={qr} variant="secondary" download="qrcode.png" style={{marginLeft:"auto", marginRight:"auto", textDecoration:"none", color:"#FFFFFF"}}>Qr İndir</Button>
                        </Row>
                        <Row>
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={() => {
                                    setIsInEditMode((prev) => !prev);
                                    handleUpdateBuilding(buildingInfo.id);
                                }}
                            >
                                {!isInEditMode ? 'Kaydı düzenle' : 'Kaydet'}
                            </Button>
                        </Row>
                       
                        
                    </Col>
                </Row>
                {isInEditMode && (
                    <>
                        <Row className="mt-3">
                            <DragDrop
                                selectedFile={documentToUpload}
                                setSelectedFile={setDocumentToUpload}
                                fileTypes={fileTypes}
                                label="Yüklemek istediğiniz dokümanı seçiniz."
                            />
                        </Row>
                        <Row className="mt-2 mb-4">
                            <Col>
                                <Button
                                    variant="success"
                                    size="sm"
                                    onClick={handlePostDocument}
                                >
                                    {isPendingForNewDocument ? (
                                        <Spinner animation="border" />
                                    ) : (
                                        'Yeni doküman ekle'
                                    )}
                                </Button>
                            </Col>
                        </Row>
                    </>
                )}

                <Row className="mt-1">
                    <Accordion defaultActiveKey="0">
                        {buildingInfo.documents.map((document, index) => {
                            return document.isActive ? (
                                <>
                                    <Row>
                                        <Col sm={12}>
                                            <Accordion.Item
                                                className="mb-2"
                                                eventKey={index}
                                                size="sm"
                                            >
                                                <Accordion.Header>
                                                    Doküman {index + 1} -
                                                    {' Güncellenme Tarihi: ' +
                                                        document.uploadedAt}
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <iframe
                                                        src={
                                                            'data:application/pdf;base64,' +
                                                            document.report
                                                        }
                                                        width="100%"
                                                        height={600}
                                                    />
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Col>
                                    </Row>

                                    {isInEditMode && (
                                        <Row className="mb-3">
                                            <Col
                                                sm={12}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'right',
                                                }}
                                            >
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    disabled={
                                                        isPending ? true : false
                                                    }
                                                    onClick={() =>
                                                        handleDeleteDocument(
                                                            document.id
                                                        )
                                                    }
                                                >
                                                    {isPending ? (
                                                        <Spinner animation="border" />
                                                    ) : (
                                                        'Dokümanı kaldır'
                                                    )}
                                                </Button>
                                            </Col>
                                        </Row>
                                    )}
                                </>
                            ) : null;
                        })}
                    </Accordion>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ListCardItem;
