import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';

const Project = () => {
    return (
        <div>
            <Container fluid>
                <Row
                    className="align-items-center"
                    style={{ minHeight: window.visualViewport.height - 100 }}
                >
                    <Col sm={0} lg={6} className="d-none d-lg-block">
                        <Figure>
                            <Figure.Image
                                className="border border-secondary rounded"
                                width="100%"
                                height="100%"
                                alt="Yapı Sorgulama Sistemi"
                                src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1882000/deprem-aa-1883024.jpg"
                            />
                        </Figure>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Figure>
                            <h1>Recovery Project</h1>
                            <hr></hr>
                            <p>
                                Ülkemizi derin bir üzüntüyle sarsan ve
                                yurdumuzun her bir köşesinde büyük yaralar açan
                                6 Şubat Depremlerinin ardından ülkecek böyle bir
                                acıyı tekrar yaşamamak adına "Recovery Project"
                                adını verdiğimiz bu projeyi hayata geçirmiş
                                bulunuyoruz.
                                <br />
                                <br />
                                Bu olayların tekrar yaşanmaması adına
                                vatandaşlarımızın binalarına taşınırken
                                güvenliklerinden emin olabilmeleri adına buradan
                                kontrollerini gerçekleştirebilmelerini sağlamak
                                asıl amacımız konumunda. İsteyen vatandaş
                                sisteme girip bilgisine erişmek istediği yapı
                                hakkında çeşitli raporlara erişim sağlayabilecek
                                ve ne ölçüde bu yapının güvenli olduğunu buradan
                                kontrol etme şansı bulacak.
                                <br />
                                <br />
                                Aynı zamanda yapı sahipleride kendilerine ait
                                olan mülkler ile ilgili bilgileri girerek gerek
                                vatandaşlara gerekse yetkililere bir bilgi
                                kaynağı oluşturmuş olup toplum sağlığı ve
                                güvenliği adına önemli bir adım atmış olacak.
                            </p>
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Project;
