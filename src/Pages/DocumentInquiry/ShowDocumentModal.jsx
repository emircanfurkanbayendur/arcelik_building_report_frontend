import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ShowDocumentModal = (props) => {
    const { name, documents } = props.buildingInfo;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {name}
                </Modal.Title>
            </Modal.Header>

            <iframe
                src={'data:application/pdf;base64,' + documents[0].report}
                width="100%"
                height={600}
            />

            <Modal.Footer>
                Güncellenme Tarihi:{' '}
                {documents[documents.length - 1]?.uploadedAt}
            </Modal.Footer>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Kapat
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowDocumentModal;
