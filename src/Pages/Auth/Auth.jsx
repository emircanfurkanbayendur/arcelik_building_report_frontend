import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import Form from './Form';

const Auth = () => {
    return (
        <>
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
                                src="https://img.freepik.com/free-photo/construction-site_53876-23129.jpg?w=1060&t=st=1676968835~exp=1676969435~hmac=15e2d19bafb2038d90d9164c43ddbcc4ecd788f079c56b4ff22bc824167e8318"
                            />
                        </Figure>
                    </Col>

                    <Col sm={12} lg={6}>
                        <Form></Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Auth;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import Form from './Form';

// const Auth = () => {
//     return (
//         <>
//             <Container fluid>
//                 <Row
//                     className="align-items-center"
//                     style={{ minHeight: window.visualViewport.height - 100 }}
//                 >
//                     <Col sm={0} lg={3}></Col>
//                     <Col sm={12} lg={6}>
//                         <Form></Form>
//                     </Col>
//                     <Col sm={0} lg={3}></Col>
//                 </Row>
//             </Container>
//         </>
//     );
// };

// export default Auth;
