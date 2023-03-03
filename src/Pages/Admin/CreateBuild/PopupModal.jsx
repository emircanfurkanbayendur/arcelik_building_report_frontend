import { useState } from 'react';
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
                <h4>Centered Modal</h4>
                <>
                    <button onClick={handleResetLocation}>
                        Reset Location
                    </button>
                    <label>Latitute:</label>
                    <input type="text" value={location.lat} disabled />
                    <label>Longitute:</label>
                    <input type="text" value={location.lng} disabled />
                    <label>Zoom:</label>
                    <input type="text" value={zoom} disabled />

                    <MapPicker
                        defaultLocation={defaultLocation}
                        zoom={zoom}
                        mapTypeId="roadmap"
                        style={{ height: '700px' }}
                        onChangeLocation={handleChangeLocation}
                        onChangeZoom={handleChangeZoom}
                        apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
                    />
                </>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PopupModal;
