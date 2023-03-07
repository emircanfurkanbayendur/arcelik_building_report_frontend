import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
//import { Map } from '../../components/Map/Map';
import MapPicker from "react-google-map-picker";
const DefaultLocation = { lat:  41.01, lng: 28.95 };
const DefaultZoom = 10;
function HomePage() {
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
    <div>
      <Container style={{ minHeight: window.visualViewport.height - 100 }}>
        <Row>
          <Col md={12} lg={3}>
            <Row className="mt-2">
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
            <Row className="mt-2">
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
          <Col md={12} lg={3}>
            <Row>
              <Card
                bg="info"
                key="info"
                text="white"
                style={{ width: "18rem" }}
                className="mb-5 mt-2 mx-2"
              >
                <Card.Body>
                  <Card.Title> Sistemde Bulunan Rapor Sayısı: 15 </Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col md={12} lg={3}>
            <Row>
              <Card
                bg="dark"
                key="dark"
                text="white"
                style={{ width: "18rem" }}
                className="mb-5 mt-2 mx-2"
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
            <Row className="mt-2">
              <Card
                bg="dark"
                key="dark"
                text="white"
                style={{ width: "81rem" }}
                className=""
              >
                <Card.Body>
                  <MapPicker
                    defaultLocation={defaultLocation}
                    zoom={zoom}
                    mapTypeId="roadmap"
                    style={{ height: "600px" }}
                    onChangeLocation={handleChangeLocation}
                    onChangeZoom={handleChangeZoom}
                    apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
                  />
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
