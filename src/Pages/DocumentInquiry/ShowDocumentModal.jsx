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
            {documents.forEach((document, index) => {
                console.log('document');
                console.log(document);

                const src = 'data:application/pdf;base64,' + document.report;
                return (
                    <>
                        {document.uploadedByUserId}
                        <iframe
                            key={index}
                            src={src}
                            width="500px"
                            height="500px"
                        />
                    </>
                );
            })}
            <Modal.Footer>
                Güncellenme Tarihi:{' '}
                {documents[documents.length - 1]?.uploadedAt}
            </Modal.Footer>
            <Modal.Footer>
                <Button onClick={props.onHide}>Kapat</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowDocumentModal;
