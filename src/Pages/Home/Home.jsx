import React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container style={{ minHeight: window.visualViewport.height - 100 }}>
            <Row className="mt-5">
                <Col>
                    <h1 className="font-monospace d-flex justify-content-left">
                        Yapı Sorgulama Sistemine Hoşgeldiniz
                    </h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col sm={12} md={6}>
                    <Card>
                        <Card.Header>Sistem Hakkında</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Yapı Sorgulama Sistemi Nedir?
                            </Card.Title>
                            <Card.Text>
                                Yapı Sorgulama Sistemi sorgulanması istenilen
                                yapıya ait adres bilgisi, QR kod veya yapı kodu
                                kullanılarak ilgili yapı hakkında gerekli
                                kontrol belgelerine erişim sağlayabileceğiniz
                                bir platformdur. Aşağıdaki bağlantıyı kullanarak
                                proje hakkında detaylı bilgiye erişebilirsiniz.
                            </Card.Text>
                            <Link to="/project">
                                <Button variant="secondary">
                                    Proje Hakkında
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6}>
                    <Card>
                        <Card.Header>Sistem Hakkında</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Yapı Durum Belgesi Sorgulaması Nasıl Yapılır?
                            </Card.Title>
                            <Card.Text>
                                Yapı Durum Belgesi Sorgulama sayfası üzerinde
                                bulunan "Adres Kullanarak Sorgula", "QR Kod
                                Kullanarak Sorgula" veya "Yapı Kodu Kullanarak
                                Sorgula" seçenekleri kullanılarak ilgili yapı
                                hakkında sorgulama işlemi
                                gerçekleştirilebilinir. Aşağıdaki bağlantıyı
                                kullanarak ilgili yapı hakkında durum belgesi
                                sorgulaması yapılabilir.
                            </Card.Text>
                            <Link to="/documentinquiry">
                                <Button variant="secondary">
                                    Yapı Durum Belgesi Sorgulama
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col sm={12} md={6}>
                    <Card>
                        <Card.Header>Sistem Hakkında</Card.Header>
                        <Card.Body>
                            <Card.Title>Kullanıcı Girişi</Card.Title>
                            <Card.Text>
                                Yapı Sorgulama Sistemi üzerinde normal kullanıcı
                                ve yetkili kullanıcı girişleri
                                yapılabilmektedir. Yetkili kullanıcı girişi
                                hakkına sahip kullanıcılar ilgili yapı hakkında
                                o yapıya ait durum belgesini yükleyebilecekleri
                                alana erişim hakkına sahiptirler. Aşağıdaki
                                bağlantıyı kullanarak kullanıcı girişi
                                yapılabilir.
                            </Card.Text>
                            <Link to="/auth">
                                <Button variant="secondary">
                                    Kullanıcı Girişi Yap
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12} md={6}>
                    <Card>
                        <Card.Header>Sistem Hakkında</Card.Header>
                        <Card.Body>
                            <Card.Title>Diğer Bağlantılar</Card.Title>
                            <Card.Text>
                                Ayrıca aşağıdaki bağlantılar üzerinden proje
                                ekibi hakkında bilgi alabilir ve iletişim
                                bilgilerini görüntüleyebilirsiniz.
                            </Card.Text>
                            <br></br>
                            <br></br>

                            <Link to="/project" className="me-2">
                                <Button variant="secondary">Proje Ekibi</Button>
                            </Link>
                            <Link to="/information">
                                <Button variant="secondary">
                                    İletişim Bilgileri
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
