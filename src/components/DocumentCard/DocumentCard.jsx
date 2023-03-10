import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import QRCode from 'react-qr-code';

function TextExample({
    isThereResult,
    buildingCode,
    buildingTitle,
    address,
    updateDate,
    qrCodeValue,
}) {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Row className="align-items-center">
                    <Col sm={8}>
                        <Card.Title>
                            {isThereResult
                                ? buildingTitle
                                : 'Lütfen geçerli bilgi giriniz'}
                        </Card.Title>
                        <Card.Subtitle className="mb-1 text-muted">
                            Yapı Kodu: {buildingCode}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-1 text-muted">
                            Güncellenme Tarihi: {updateDate}
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
                            value={String(qrCodeValue)}
                        />
                    </Col>
                </Row>

                {isThereResult && (
                    <Row>
                        <Col sm={12}>
                            <Card.Subtitle className="mt-2 text-muted">
                                Adres Bilgisi:
                            </Card.Subtitle>
                            <Card.Text>{address}</Card.Text>
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
                                <Button variant="secondary">
                                    Dokümanı Görüntüle
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                )}
            </Card.Body>
        </Card>
    );
}

export default TextExample;
