import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ListCardItem from '../../../components/ListCardItem/ListCardItem';

const ListBuilds = () => {
    const testBuildingArr = [1, 2, 3, 4, 5];

    return (
        <Container
            style={{
                minHeight: window.visualViewport.height - 100,
                maxWidth: '100%',
            }}
        >
            {testBuildingArr.map((item, index) => (
                <Row className="mt-1" key={index}>
                    <ListCardItem key={index} />
                </Row>
            ))}
        </Container>
    );
};

export default ListBuilds;
