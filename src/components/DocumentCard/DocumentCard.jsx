import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';
const addressToString = (
    neighbourhood,
    street,
    buildingName,
    district,
    city
) => {
    return `${neighbourhood}, ${street}, ${buildingName} ${district}/${city}`;
};

const DocumentCard = ({ buildingInfo, setModalShow }) => {
    const navigate = useNavigate();
    const click= () =>
    {
navigate("/documnet",{state:{id:buildingInfo.documents}});
    }
    console.log('props');
    console.log(buildingInfo);
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Row className="align-items-center">
                    <Col sm={8}>
                        <Card.Title>
                            {buildingInfo.id > 0
                                ? buildingInfo.name
                                : 'Lütfen geçerli bilgi giriniz'}
                        </Card.Title>
                        <Card.Subtitle className="mb-1 text-muted">
                            Yapı Kodu: {buildingInfo.code}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-1 text-muted">
                            Güncellenme Tarihi:{' '}
                            {buildingInfo.id > 0
                                ? buildingInfo.documents[
                                      buildingInfo.documents.length - 1
                                  ].uploadedAt
                                : ''}
                        </Card.Subtitle>
                    </Col>
                    <Col sm={4}>
                        <QRCode
                            size={256}
                            style={{
                                height: 'auto',
                                maxWidth: '100%',
                                width: '100%',
                            }}
                            value={String(buildingInfo.code)}
                        />
                    </Col>
                </Row>

                {buildingInfo.id > 0 && (
                    <Row>
                        <Col sm={12}>
                            <Card.Subtitle className="mt-2 text-muted">
                                Adres Bilgisi:
                            </Card.Subtitle>
                            <Card.Text>
                                {addressToString(
                                    buildingInfo.neighbourhood,
                                    buildingInfo.street,
                                    buildingInfo.name,
                                    buildingInfo.district,
                                    buildingInfo.city
                                )}
                            </Card.Text>
                        </Col>
                        <Col sm={12}>
                            <Row className="mt-3 mb-1">
                                <Button variant="outline-secondary">
                                    Dokümanı İndir
                                </Button>
                            </Row>
                        </Col>
                        <Col sm={12}>
                            <Row>
                                <Button
                                    variant="secondary"
                                    onClick={() => setModalShow(true)}
                                >
                                    Dokümanı Görüntüle
                                </Button>
                            </Row>
                        </Col>
                        <Col sm={12}>
                            <Row>
                                <Button
                                    variant="secondary"
                                    onClick={() => click()}
                                >
                                    Dokümanı Görüntüle 2
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                )}
            </Card.Body>
        </Card>
    );
};

export default DocumentCard;
