import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import cities from '../../db/cities';
import counties from '../../db/counties';
import villages from '../../db/villages';
import neighbourhoods from '../../db/neighbourhoods';
import {
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from '@mui/material';
import { getStreetsByAddress, getBuildingsByAddress } from '../../api/building';

function SearchForm({ buildingInfo, setBuildingInfo }) {
    const [selectedAddress, setSelectedAddress] = useState({
        cityName: 'ADANA',
        countyName: '',
        neighbourhoodName: '',
        streetName: '',
        building: '',
    });
    const [streetList, setStreetList] = useState([]);
    const [buildingList, setBuildingList] = useState([]);

    const updateStreetList = async () => {
        const { streets } = await getStreetsByAddress(
            selectedAddress.cityName,
            selectedAddress.countyName,
            selectedAddress.neighbourhoodName
        );
        await setStreetList(streets);
    };

    const updateBuildingList = async () => {
        const { buildings } = await getBuildingsByAddress(
            selectedAddress.cityName,
            selectedAddress.countyName,
            selectedAddress.neighbourhoodName,
            selectedAddress.streetName
        );
        await setBuildingList(buildings);
    };

    useEffect(() => {
        updateStreetList();
    }, [selectedAddress.neighbourhoodName]);

    useEffect(() => {
        updateBuildingList();
    }, [selectedAddress.streetName]);

    useEffect(() => {
        console.log(selectedAddress);
        if (selectedAddress.building) setBuildingInfo(selectedAddress.building);
    }, [selectedAddress.building]);

    useEffect(() => {
        console.log(selectedAddress);
    }, [selectedAddress]);

    useEffect(() => {
        console.log(streetList);
    }, [streetList]);
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col sm={6} md={12}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="demo-multiple-name-label">
                                İl
                            </InputLabel>
                            <Select
                                name="cityName"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                input={<OutlinedInput label="İl" />}
                                value={selectedAddress.cityName}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    setSelectedAddress((prev) => ({
                                        ...prev,
                                        cityName: event.target.value,
                                        countyName: '',
                                        neighbourhoodName: '',
                                        streetName: '',
                                        building: '',
                                    }));
                                }}
                            >
                                {cities.map((city) => {
                                    return (
                                        <MenuItem
                                            key={city.Name}
                                            value={city.Name}
                                        >
                                            {city.Name}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Col>
                    <Row className="my-1 d-sm-block"></Row>

                    <Col sm={6} md={12}>
                        <FormControl
                            disabled={
                                selectedAddress.cityName == '' ? true : false
                            }
                            sx={{ width: '100%' }}
                        >
                            <InputLabel id="demo-multiple-name-label">
                                İlçe
                            </InputLabel>
                            <Select
                                name="countyName"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                input={<OutlinedInput label="İlçe" />}
                                value={selectedAddress.countyName}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    setSelectedAddress((prev) => ({
                                        ...prev,
                                        countyName: event.target.value,
                                        neighbourhoodName: '',
                                        streetName: '',
                                        building: '',
                                    }));
                                }}
                            >
                                {counties.map((county) => {
                                    if (
                                        county.CityId ==
                                        cities.find(
                                            (city) =>
                                                city.Name ==
                                                selectedAddress.cityName
                                        )?.Id
                                    ) {
                                        return (
                                            <MenuItem
                                                key={county.Name}
                                                value={county.Name}
                                            >
                                                {county.Name}
                                            </MenuItem>
                                        );
                                    }
                                })}
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col sm={12}>
                        <FormControl
                            sx={{ width: '100%' }}
                            disabled={
                                selectedAddress.countyName == '' ? true : false
                            }
                        >
                            <InputLabel id="demo-multiple-name-label">
                                Mahalle
                            </InputLabel>
                            <Select
                                name="neighbourhoodName"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                input={<OutlinedInput label="Mahalle" />}
                                value={selectedAddress.neighbourhoodName}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    setSelectedAddress((prev) => ({
                                        ...prev,
                                        neighbourhoodName: event.target.value,
                                        streetName: '',
                                        building: '',
                                    }));
                                }}
                            >
                                {villages.map((village) => {
                                    if (
                                        village.DistrictId ==
                                        counties.find(
                                            (county) =>
                                                county.Name ==
                                                selectedAddress.countyName
                                        )?.Id
                                    ) {
                                        var selectedVillage = village;

                                        return neighbourhoods.map(
                                            (neighbourhood) => {
                                                if (
                                                    neighbourhood.VillageId ==
                                                    selectedVillage.Id
                                                ) {
                                                    return (
                                                        <MenuItem
                                                            key={
                                                                neighbourhood.Name
                                                            }
                                                            value={
                                                                neighbourhood.Name
                                                            }
                                                        >
                                                            {neighbourhood.Name}
                                                        </MenuItem>
                                                    );
                                                }
                                            }
                                        );
                                    }
                                })}
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col sm={12}>
                        <FormControl
                            sx={{ width: '100%' }}
                            disabled={
                                selectedAddress.neighbourhoodName == '' ||
                                streetList?.length == 0
                                    ? true
                                    : false
                            }
                        >
                            <InputLabel id="demo-multiple-name-label">
                                Sokak
                            </InputLabel>
                            <Select
                                name="streetName"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                input={<OutlinedInput label="Sokak" />}
                                value={selectedAddress.streetName}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    setSelectedAddress((prev) => ({
                                        ...prev,
                                        streetName: event.target.value,
                                        building: '',
                                    }));
                                }}
                            >
                                {streetList?.map((street) => {
                                    return (
                                        <MenuItem key={street} value={street}>
                                            {street}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col sm={12}>
                        <FormControl
                            sx={{ width: '100%' }}
                            disabled={
                                selectedAddress.streetName == '' ||
                                buildingList?.length == 0
                                    ? true
                                    : false
                            }
                        >
                            <InputLabel id="demo-multiple-name-label">
                                Yapı
                            </InputLabel>
                            <Select
                                name="building"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                input={<OutlinedInput label="Yapı" />}
                                value={selectedAddress.building}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    setSelectedAddress((prev) => ({
                                        ...prev,
                                        building: event.target.value,
                                    }));
                                }}
                            >
                                {buildingList?.map((building) => {
                                    return (
                                        <MenuItem
                                            key={building.name}
                                            value={building}
                                        >
                                            {building.name}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default SearchForm;
