import { TextField } from '@mui/material';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MapPicker from 'react-google-map-picker';

const DefaultLocation = { lat: 10, lng: 106 };
navigator.geolocation.getCurrentPosition((position) => {
    DefaultLocation.lat = position.coords.latitude;
    DefaultLocation.lng = position.coords.longitude;
});
const DefaultZoom = 15;

const PopupModal = (props) => {
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    function handleChangeLocation(lat, lng) {
        setLocation({ lat: lat, lng: lng });
        props.setFieldValue('latitude', String(lat));
        props.setFieldValue('longitude', String(lng));
    }

    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    }

    function handleResetLocation() {
        setDefaultLocation({ ...DefaultLocation });
        setZoom(DefaultZoom);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Haritadan Konum Seç
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <h5>Lokasyon Bilgileri</h5>
                </Row>
                <Row className="mb-2">
                    <Col sm={6}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Enlem (Latitude)"
                            variant="outlined"
                            value={location.lat}
                            onChange={(e) =>
                                handleChangeLocation(
                                    e.target.value,
                                    location.lng
                                )
                            }
                        />
                    </Col>
                    <Col sm={6}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Boylam (Longitude)"
                            variant="outlined"
                            value={location.lng}
                            onChange={(e) =>
                                handleChangeLocation(
                                    location.lat,
                                    e.target.value
                                )
                            }
                        />
                    </Col>
                </Row>

                <MapPicker
                    defaultLocation={defaultLocation}
                    zoom={zoom}
                    mapTypeId="roadmap"
                    style={{ height: '700px' }}
                    onChangeLocation={handleChangeLocation}
                    onChangeZoom={handleChangeZoom}
                    apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Kaydet
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PopupModal;
