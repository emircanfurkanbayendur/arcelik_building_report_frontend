import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    ButtonGroup,
    ToggleButton,
    Form,
    Card,
} from 'react-bootstrap';
import { Autocomplete, TextField } from '@mui/material';
import DragDrop from '../../components/DragDrop/DragDrop';
import DocumentCard from '../../components/DocumentCard/DocumentCard';
import QrCodeReader from '../../components/QrCodeReader/QrCodeReader';
import QrScanner from 'qr-scanner';

import cities from './cities';
import counties from './counties';
import neighborhoods from './neighborhoods';
import streets from './streets';
import buildings from './buildings';

const DocumentInquiry = () => {
    const [isButtonChecked, setIsButtonChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const [isCameraAllowed, setIsCameraAllowed] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [buildingCodeInput, setBuildingCodeInput] = useState(null);
    const [fullAddress, setFullAddress] = useState('');
    const [addressInfo, setAddressInfo] = useState({
        buildingName: '',
        streetName: '',
        neighborhoodName: '',
        countyName: '',
        cityName: '',
    });

    const buttonTypes = [
        { name: 'Adres Kullanarak Sorgula', value: '1' },
        { name: 'QR Kod Kullanarak Sorgula', value: '2' },
        { name: 'Yapı Kodu Kullanarak Sorgula', value: '3' },
    ];

    const handleClick = () => {
        setFullAddress(addressToString());
    };

    const addressToString = () => {
        return `${addressInfo.neighborhoodName}, ${addressInfo.streetName}, ${addressInfo.buildingName} ${addressInfo.countyName}/${addressInfo.cityName}`;
    };

    const clearAddressForm = () => {
        setAddressInfo({
            buildingName: '',
            streetName: '',
            neighborhoodName: '',
            countyName: '',
            cityName: '',
        });
    };

    const handleSelect = (e) => {
        setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        QrScanner.scanImage(uploadedImage, {
            returnDetailedScanResult: true,
        }).then((result) => {
            setBuildingCodeInput(result.data);
        });
    }, [uploadedImage]);

    return (
        <Container style={{ minHeight: window.visualViewport.height - 100 }}>
            <Row className="mt-4">
                <Col sm={12}>
                    <h1 className="font-monospace text-center">
                        Yapı Durum Belgesi Sorgulama
                    </h1>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={12} lg={4}>
                    <Row className="mt-3">
                        <ButtonGroup className="mt-5" vertical={true}>
                            {buttonTypes.map((buttonType, idx) => (
                                <>
                                    <ToggleButton
                                        size="lg"
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant="outline-secondary"
                                        name="radio"
                                        value={buttonType.value}
                                        checked={
                                            radioValue === buttonType.value
                                        }
                                        onChange={(e) =>
                                            setRadioValue(e.currentTarget.value)
                                        }
                                    >
                                        {buttonType.name}
                                    </ToggleButton>
                                </>
                            ))}
                        </ButtonGroup>
                    </Row>
                </Col>
                <div className="d-sm-block d-md-none mt-3"></div>
                <Col md={12} lg={8} className="mt-3">
                    <Row>
                        <h3 className="font-monospace text-center">
                            {radioValue === '1'
                                ? 'Adres Kullanarak Sorgulama Yap'
                                : radioValue === '2'
                                ? 'QR Kod Kullanarak Sorgulama Yap'
                                : radioValue === '3'
                                ? 'Yapı Kodu Kullanarak Sorgulama Yap'
                                : ''}
                        </h3>
                    </Row>
                    <div className="d-md-block d-lg-none mt-3 mb-1"></div>

                    <Row className="mt-1">
                        <Col sm={6}>
                            {/* Adres Kullanarak Sorgula */}
                            {radioValue === '1' && (
                                <>
                                    <Row>
                                        <Card>
                                            <Card.Body>
                                                <Row>
                                                    <Col sm={6}>
                                                        <Autocomplete
                                                            disablePortal
                                                            id="combo-box-cities"
                                                            options={cities}
                                                            sx={{
                                                                width: '100%',
                                                            }}
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    name="cityName"
                                                                    onSelect={
                                                                        handleSelect
                                                                    }
                                                                    {...params}
                                                                    label="İl"
                                                                />
                                                            )}
                                                        />
                                                    </Col>
                                                    <Col sm={6}>
                                                        <Autocomplete
                                                            disablePortal
                                                            id="combo-box-counties"
                                                            options={counties}
                                                            sx={{
                                                                width: '100%',
                                                            }}
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    name="countyName"
                                                                    onSelect={
                                                                        handleSelect
                                                                    }
                                                                    {...params}
                                                                    label="İlçe"
                                                                />
                                                            )}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col sm={12}>
                                                        <Autocomplete
                                                            disablePortal
                                                            id="combo-box-neighborhoods"
                                                            options={
                                                                neighborhoods
                                                            }
                                                            sx={{
                                                                width: '100%',
                                                            }}
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    name="neighborhoodName"
                                                                    onSelect={
                                                                        handleSelect
                                                                    }
                                                                    {...params}
                                                                    label="Mahalle"
                                                                />
                                                            )}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col sm={12}>
                                                        <Autocomplete
                                                            disablePortal
                                                            id="combo-box-streets"
                                                            options={streets}
                                                            sx={{
                                                                width: '100%',
                                                            }}
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    name="streetName"
                                                                    onSelect={
                                                                        handleSelect
                                                                    }
                                                                    {...params}
                                                                    label="Sokak"
                                                                />
                                                            )}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col sm={12}>
                                                        <Autocomplete
                                                            disablePortal
                                                            id="combo-box-buildings"
                                                            options={buildings}
                                                            sx={{
                                                                width: '100%',
                                                            }}
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    name="buildingName"
                                                                    onSelect={
                                                                        handleSelect
                                                                    }
                                                                    {...params}
                                                                    label="Yapı"
                                                                />
                                                            )}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                    {isCameraAllowed && (
                                        <Row className="mt-2">
                                            <QrCodeReader
                                                buildingCodeInput={
                                                    buildingCodeInput
                                                }
                                                setBuildingCodeInput={
                                                    setBuildingCodeInput
                                                }
                                            />
                                        </Row>
                                    )}
                                    {!isCameraAllowed && radioValue === '2' && (
                                        <Row className="mt-2">
                                            <Button
                                                variant="secondary"
                                                onClick={() =>
                                                    setIsCameraAllowed(
                                                        (prev) => !prev
                                                    )
                                                }
                                            >
                                                Kamerayı Aç
                                            </Button>
                                        </Row>
                                    )}
                                </>
                            )}
                            {/* QR Kod Kullanarak Sorgula */}
                            {radioValue === '2' && (
                                <>
                                    <Row>
                                        <DragDrop
                                            uploadedImage={uploadedImage}
                                            setUploadedImage={setUploadedImage}
                                        />
                                    </Row>
                                    {isCameraAllowed && (
                                        <Row className="mt-2">
                                            <QrCodeReader
                                                buildingCodeInput={
                                                    buildingCodeInput
                                                }
                                                setBuildingCodeInput={
                                                    setBuildingCodeInput
                                                }
                                            />
                                        </Row>
                                    )}
                                    {!isCameraAllowed && (
                                        <Row className="mt-2">
                                            <Button
                                                variant="secondary"
                                                onClick={() =>
                                                    setIsCameraAllowed(
                                                        (prev) => !prev
                                                    )
                                                }
                                            >
                                                Kamerayı Aç
                                            </Button>
                                        </Row>
                                    )}
                                </>
                            )}

                            {/* Adres Kullanarak Sorgula */}
                            {radioValue === '3' && (
                                <>
                                    <Row>
                                        <Card>
                                            <Card.Body>
                                                <Row>
                                                    <Col sm={12}>
                                                        <TextField
                                                            fullWidth
                                                            id="outlined-basic-building-code"
                                                            label="Yapı Kodu"
                                                            variant="outlined"
                                                            value={
                                                                buildingCodeInput
                                                            }
                                                            onChange={(e) =>
                                                                setBuildingCodeInput(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                    {isCameraAllowed && (
                                        <Row className="mt-2">
                                            <QrCodeReader
                                                buildingCodeInput={
                                                    buildingCodeInput
                                                }
                                                setBuildingCodeInput={
                                                    setBuildingCodeInput
                                                }
                                            />
                                        </Row>
                                    )}
                                    {!isCameraAllowed && radioValue === '2' && (
                                        <Row className="mt-2">
                                            <Button
                                                variant="secondary"
                                                onClick={() =>
                                                    setIsCameraAllowed(
                                                        (prev) => !prev
                                                    )
                                                }
                                            >
                                                Kamerayı Aç
                                            </Button>
                                        </Row>
                                    )}
                                </>
                            )}

                            <Row className="mt-2">
                                <Button
                                    variant="secondary"
                                    onClick={handleClick}
                                >
                                    Sorgula
                                </Button>
                            </Row>
                        </Col>

                        <Col sm={6}>
                            <DocumentCard
                                isThereResult={true}
                                buildingCode={
                                    buildingCodeInput
                                        ? String(buildingCodeInput)
                                        : '123456'
                                }
                                buildingTitle={
                                    addressInfo.buildingName
                                        ? addressInfo.buildingName
                                        : 'ABC Apartmanı'
                                }
                                address={fullAddress}
                                updateDate="11/01/2023"
                                qrCodeValue={
                                    buildingCodeInput ? buildingCodeInput : 0
                                }
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default DocumentInquiry;
