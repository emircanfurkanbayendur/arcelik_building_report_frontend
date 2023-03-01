import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
//import { Map } from '../../components/Map/Map';


function HomePage() {
  return (
    <div>
      <Container style={{ minHeight: window.visualViewport.height - 100 }}>
        <Row>
          <Col md={12} lg={3}>
            <Row className="mt-5">
              <Card
                bg="danger"
                key="danger"
                text="white"
                style={{ width: "18rem" }}
                className=""
              >
                <Card.Body>
                  <Card.Title> Sistemde Bulunan İlçe Sayısı: 15 </Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col md={12} lg={3}>
            <Row className="mt-5">
              <Card
                bg="success"
                key="success"
                text="white"
                style={{ width: "18rem" }}
                className=""
              >
                <Card.Body>
                  <Card.Title> Sistemde Bulunan Bina Sayısı: 15 </Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col md={12} lg={3} >
            <Row>
              <Card
                bg="info"
                key="info"
                text="white"
                style={{ width: "18rem" }}
                className="mb-5 mt-5 mx-2"
              >
                <Card.Body>
                  <Card.Title> Sistemde Bulunan Rapor Sayısı: 15 </Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col md={12} lg={3} >
            <Row>
              <Card
                bg="dark"
                key="dark"
                text="white"
                style={{ width: "18rem" }}
                className="mb-5 mt-5 mx-2"
              >
                <Card.Body>
                  <Card.Title> Sistemde Bulunan Rapor Sayısı: 15 </Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={12}>
            <Row className="mt-5">
              <Card
                bg="danger"
                key="danger"
                text="white"
                style={{ width: "81rem" }}
                className=""
              >
                <Card.Body>
                  Harita gelecek
                  
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
