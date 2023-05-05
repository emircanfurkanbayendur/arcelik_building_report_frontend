import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ListCardItem from '../../../components/ListCardItem/ListCardItem';
import { getBuildingsByUserId } from '../../../api/building';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/auth/authSlice';

const ListBuilds = () => {
    const user = useSelector(userSelector);
    const { id } = user;
    const [buildingList, setBuildingList] = useState([]);

    const updateBuildingList = async () => {
        const buildingList = await getBuildingsByUserId(id);
        await setBuildingList(buildingList);
        await console.log(buildingList);
    };

    useEffect(() => {
        updateBuildingList();
    }, []);

    return (
        <Container
            style={{
                minHeight: window.visualViewport.height - 100,
                maxWidth: '100%',
            }}
        >
            {buildingList.map((building, index) => (
                <Row className="mt-1" key={index}>
                    <ListCardItem key={index} building={building} />
                </Row>
            ))}
        </Container>
    );
};

export default ListBuilds;
