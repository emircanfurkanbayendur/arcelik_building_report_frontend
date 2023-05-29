import React, { useState } from 'react';
import {
    Container, Row, Col, Card,
    Button,
} from 'react-bootstrap';
import ListCardItem from '../../../components/ListCardItem/ListCardItem';
import { getBuildingsByUserId } from '../../../api/building';
import { useEffect } from 'react';

import {
    Input,
    InputLabel,
    FormControl,
} from '@mui/material';
const ListBuilds = () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    const [buildingList, setBuildingList] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
    const updateBuildingList = async () => {
        const buildingList = await getBuildingsByUserId(id);
        await setBuildingList(buildingList);
        
    };

    useEffect(() => {
        setBuildingList([]);
        updateBuildingList();
    }, [searchTerm]);
    const filterFunction = (value) => {
      
        setSearchTerm(value);

    }

    const ids = [];

    return (
        <Container
            style={{
                minHeight: window.visualViewport.height - 100,
                maxWidth: '100%',
            }}
        >

<br></br>
<Card border="secondary" >

<Card.Body>

    <Card.Title style={{ fontWeight: "bold" }}>Yapı Sorgula </Card.Title>
    <hr />
    <Row className="mb-3">
    <Col >
    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Aramak İstediğiniz Bina Adını Giriniz</InputLabel>
          <Input
            id="standard-adornment-amount"
           
          />
          </FormControl>
    </Col>
    <Row className="my-1 d-sm-block d-lg-none"></Row>
    
    <Row >
        <h1></h1>
    </Row>
    <Button
                        
                        variant="secondary"
                        onClick={async () => {filterFunction(document.getElementById("standard-adornment-amount").value)
                                                   
                        }}
                       
                    >
                        Ara
                        
                          
                       
                      
                    </Button>
   
                    </Row>


    





</Card.Body>

</Card>


<br></br>


                        
<h1>Yapı Listesi</h1>






               



            {buildingList.filter((building) => building.name.includes(searchTerm)).map((building, index) => (
ids.push(building.id),

                <Row className="mt-1" key={index}>

                    <ListCardItem key={index} building={building} />
                </Row>
            ))}
            {buildingList.map((building, index) =>
            (
             ids.includes(building.id) ? null :  <Row className="mt-1" key={index}>
             <ListCardItem key={index} building={building} />
         </Row> 
                
            ))}
        </Container>
       
    );
};

export default ListBuilds;
