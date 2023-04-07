import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import {
    TextField,
    Autocomplete,
    Select,
    OutlinedInput,
    MenuItem,
    InputLabel,
    FormControl,
} from '@mui/material';
import { Formik } from 'formik';
import { formSchema } from './formSchema';
import PopupModal from './PopupModal';
import DragDrop from '../../../components/DragDrop/DragDrop';
import { postBuilding } from '../../../api/building';
import { postDocument } from '../../../api/document';

import cities from '../../../db/cities';
import counties from '../../../db/counties';
import villages from '../../../db/villages';
import neighbourhoods from '../../../db/neighbourhoods';

const initialValues = {
    cityName: 'ADANA',
    countyName: 'SEYHAN',
    neighbourhoodName: 'AHMET REMZİ YÜREĞİR',
    streetName: '',
    buildingCode: '',
    buildingName: '',
    latitude: '-',
    longitude: '-',
};

const handleSelect = () => {};

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

const CreateBuild = () => {
    const [modalShow, setModalShow] = useState(false);
    const [documentToUpload, setDocumentToUpload] = useState(null);
    const [selectBoxValues, setSelectBoxValues] = useState({
        city: '',
        county: '',
        neighbourhood: '',
    });
    const [isPending, setIsPending] = useState(false);

    const fileTypes = ['PDF'];
    let utf8Encode = new TextEncoder();

    const handleFormSubmit = async (values) => {
        setIsPending(true);

        const { createdByUserId, id } = await postBuilding({
            name: values.buildingName,
            city: values.cityName,
            district: values.countyName,
            neighbourhood: values.neighbourhoodName,
            street: values.streetName,
            buildingNumber: 0,
            code: values.buildingCode,
            latitude: values.latitude,
            longitude: values.longitude,
            createdByUserId: JSON.parse(localStorage.getItem('user')).id,
        });

        const document = await postDocument({
            report: await getBase64(documentToUpload).then((data) =>
                data.replace('data:application/pdf;base64,', '')
            ),
            uploadedByUserId: createdByUserId,
            buildingId: id,
        });

        setIsPending(false);
    };

    const handleClick = (setFieldValue) => {
        navigator.geolocation.getCurrentPosition((position) => {
            setFieldValue('latitude', String(position.coords.latitude));
            setFieldValue('longitude', String(position.coords.longitude));
        });
    };

    useEffect(() => {
        let buffer;
        let x = getBase64(documentToUpload).then((data) => {
            console.log(data);
            console.log(data.replace('data:application/pdf;base64,', ''));
        });
    }, [documentToUpload]);

    return (
        <Container
            style={{
                minHeight: window.visualViewport.height - 100,
            }}
            fluid
        >
            <Row>
                <Card>
                    <Card.Body>
                        <Formik
                            enableReinitialize={true}
                            onSubmit={(values) => handleFormSubmit(values)}
                            initialValues={initialValues}
                            validationSchema={formSchema}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleBlur,
                                handleChange,
                                handleSubmit,
                                setFieldValue,
                                resetForm,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <Container>
                                        <Row>
                                            <h1 className="font-monospace d-flex justify-content-center">
                                                Yeni yapı girişi yap
                                            </h1>

                                            <Col className="mt-2"></Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Col sm={12} md={12} lg={6}>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                >
                                                    <InputLabel id="demo-multiple-name-label">
                                                        İl
                                                    </InputLabel>
                                                    <Select
                                                        name="cityName"
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        input={
                                                            <OutlinedInput label="İl" />
                                                        }
                                                        value={values.cityName}
                                                        onChange={handleChange}
                                                    >
                                                        {cities.map((city) => {
                                                            return (
                                                                <MenuItem
                                                                    key={
                                                                        city.Name
                                                                    }
                                                                    value={
                                                                        city.Name
                                                                    }
                                                                >
                                                                    {city.Name}
                                                                </MenuItem>
                                                            );
                                                        })}
                                                    </Select>
                                                </FormControl>
                                            </Col>
                                            <Row className="my-1 d-sm-block d-lg-none"></Row>
                                            <Col sm={12} md={12} lg={6}>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                >
                                                    <InputLabel id="demo-multiple-name-label">
                                                        İlçe
                                                    </InputLabel>
                                                    <Select
                                                        name="countyName"
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        input={
                                                            <OutlinedInput label="İlçe" />
                                                        }
                                                        value={
                                                            values.countyName
                                                        }
                                                        onChange={handleChange}
                                                    >
                                                        {counties.map(
                                                            (county) => {
                                                                if (
                                                                    county.CityId ==
                                                                    cities.find(
                                                                        (
                                                                            city
                                                                        ) =>
                                                                            city.Name ==
                                                                            values.cityName
                                                                    ).Id
                                                                ) {
                                                                    return (
                                                                        <MenuItem
                                                                            key={
                                                                                county.Name
                                                                            }
                                                                            value={
                                                                                county.Name
                                                                            }
                                                                        >
                                                                            {
                                                                                county.Name
                                                                            }
                                                                        </MenuItem>
                                                                    );
                                                                }
                                                            }
                                                        )}
                                                    </Select>
                                                </FormControl>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col sm={12} md={12} lg={6}>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                >
                                                    <InputLabel id="demo-multiple-name-label">
                                                        Mahalle
                                                    </InputLabel>
                                                    <Select
                                                        name="neighbourhoodName"
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        input={
                                                            <OutlinedInput label="Mahalle" />
                                                        }
                                                        value={
                                                            values.neighbourhoodName
                                                        }
                                                        onChange={handleChange}
                                                    >
                                                        {villages.map(
                                                            (village) => {
                                                                if (
                                                                    village.DistrictId ==
                                                                    counties.find(
                                                                        (
                                                                            county
                                                                        ) =>
                                                                            county.Name ==
                                                                            values.countyName
                                                                    ).Id
                                                                ) {
                                                                    var selectedVillage =
                                                                        village;
                                                                    {
                                                                        console.log(
                                                                            selectedVillage
                                                                        );
                                                                    }
                                                                    return neighbourhoods.map(
                                                                        (
                                                                            neighbourhood
                                                                        ) => {
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
                                                                                        {
                                                                                            neighbourhood.Name
                                                                                        }
                                                                                    </MenuItem>
                                                                                );
                                                                            }
                                                                        }
                                                                    );
                                                                }
                                                            }
                                                        )}
                                                    </Select>
                                                </FormControl>
                                            </Col>
                                            <Row className="my-1 d-sm-block d-lg-none"></Row>

                                            <Col sm={12} md={12} lg={6}>
                                                <TextField
                                                    size="large"
                                                    fullWidth
                                                    name="streetName"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.streetName}
                                                    label="Sokak"
                                                    error={
                                                        Boolean(
                                                            touched.streetName
                                                        ) &&
                                                        Boolean(
                                                            errors.streetName
                                                        )
                                                    }
                                                    helperText={
                                                        touched.streetName &&
                                                        errors.streetName
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col sm={12} md={12} lg={6}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    name="buildingName"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.buildingName}
                                                    label="Yapı Adı"
                                                    error={
                                                        Boolean(
                                                            touched.buildingName
                                                        ) &&
                                                        Boolean(
                                                            errors.buildingName
                                                        )
                                                    }
                                                    helperText={
                                                        touched.buildingName &&
                                                        errors.buildingName
                                                    }
                                                />
                                            </Col>
                                            <Row className="my-1 d-sm-block d-lg-none"></Row>

                                            <Col sm={12} md={12} lg={6}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    name="buildingCode"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.buildingCode}
                                                    label="Yapı Kodu"
                                                    error={
                                                        Boolean(
                                                            touched.buildingCode
                                                        ) &&
                                                        Boolean(
                                                            errors.buildingCode
                                                        )
                                                    }
                                                    helperText={
                                                        touched.buildingCode &&
                                                        errors.buildingCode
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col sm={12} md={12} lg={3}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    name="latitude"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.latitude}
                                                    label="Enlem (Latitude)"
                                                    error={
                                                        Boolean(
                                                            touched.latitude
                                                        ) &&
                                                        Boolean(errors.latitude)
                                                    }
                                                    helperText={
                                                        touched.latitude &&
                                                        errors.latitude
                                                    }
                                                />
                                            </Col>
                                            <Row className="my-1 d-sm-block d-lg-none"></Row>

                                            <Col sm={12} md={12} lg={3}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    name="longitude"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.longitude}
                                                    label="Boylam (Longitude)"
                                                    error={
                                                        Boolean(
                                                            touched.longitude
                                                        ) &&
                                                        Boolean(
                                                            errors.longitude
                                                        )
                                                    }
                                                    helperText={
                                                        touched.longitude &&
                                                        errors.longitude
                                                    }
                                                />
                                            </Col>
                                            <Row className="my-1 d-sm-block d-lg-none"></Row>

                                            <Col
                                                sm={12}
                                                md={12}
                                                lg={3}
                                                className="d-grid"
                                            >
                                                <Button
                                                    variant="secondary"
                                                    onClick={() =>
                                                        handleClick(
                                                            setFieldValue
                                                        )
                                                    }
                                                >
                                                    Konumunu Kullan
                                                </Button>
                                            </Col>
                                            <Row className="my-1 d-sm-block d-lg-none"></Row>

                                            <Col
                                                sm={12}
                                                md={12}
                                                lg={3}
                                                className="d-grid"
                                            >
                                                <Button
                                                    variant="outline-secondary"
                                                    onClick={() =>
                                                        setModalShow(true)
                                                    }
                                                >
                                                    Haritadan Seç
                                                </Button>
                                                <PopupModal
                                                    setFieldValue={
                                                        setFieldValue
                                                    }
                                                    show={modalShow}
                                                    onHide={() =>
                                                        setModalShow(false)
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <DragDrop
                                                selectedFile={documentToUpload}
                                                setSelectedFile={
                                                    setDocumentToUpload
                                                }
                                                fileTypes={fileTypes}
                                                label="Yüklemek istediğiniz dokümanı seçiniz."
                                            />
                                        </Row>
                                        <Row className="mt-3 px-2">
                                            <Button
                                                type="submit"
                                                variant="secondary"
                                                disabled={
                                                    isPending ? true : false
                                                }
                                                /*onClick={async () => {
                                                    setIsPending(true);
                                                    handleFormSubmit(values);
                                                    setIsPending(false);
                                                }}*/
                                            >
                                                {!isPending && 'Kaydet'}
                                                {isPending && (
                                                    <Spinner animation="border" />
                                                )}
                                            </Button>
                                        </Row>
                                    </Container>
                                </form>
                            )}
                        </Formik>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};

export default CreateBuild;
