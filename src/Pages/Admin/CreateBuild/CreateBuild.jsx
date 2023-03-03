import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { TextField, Autocomplete } from '@mui/material';
import { Formik } from 'formik';
import { formSchema } from './formSchema';
import cities from '../../DocumentInquiry/cities';
import counties from '../../DocumentInquiry/counties';
import neighborhoods from '../../DocumentInquiry/neighborhoods';
import streets from '../../DocumentInquiry/streets';
import PopupModal from './PopupModal';

const initialValues = {
    cityName: '',
    countyName: '',
    neighbourhoodName: '',
    streetName: '',
    buildingCode: '',
    buildingName: '',
    latitude: '-',
    longitude: '-',
};

const handleFormSubmit = () => {};
const handleSelect = () => {};

const CreateBuild = () => {
    const [modalShow, setModalShow] = React.useState(false);

    const handleClick = (setFieldValue) => {
        navigator.geolocation.getCurrentPosition((position) => {
            setFieldValue('latitude', String(position.coords.latitude));
            setFieldValue('longitude', String(position.coords.longitude));

            console.log(
                `position.coords.latitude: ${position.coords.latitude}`
            );
            console.log(
                `position.coords.longitude: ${position.coords.longitude}`
            );
        });
    };

    return (
        <Container
            style={{
                minHeight: window.visualViewport.height - 100,
                maxWidth: '65%',
            }}
        >
            <Row>
                <Card>
                    <Card.Body>
                        <Formik
                            enableReinitialize={true}
                            onSubmit={handleFormSubmit}
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
                                                <Autocomplete
                                                    size="small"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    error={
                                                        Boolean(
                                                            touched.cityName
                                                        ) &&
                                                        Boolean(errors.cityName)
                                                    }
                                                    helperText={
                                                        touched.cityName &&
                                                        errors.cityName
                                                    }
                                                    disablePortal
                                                    id="combo-box-cities"
                                                    options={cities}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            name="cityName"
                                                            value={
                                                                values.cityName
                                                            }
                                                            {...params}
                                                            label="İl"
                                                        />
                                                    )}
                                                />
                                            </Col>
                                            <Col sm={12} md={12} lg={6}>
                                                <Autocomplete
                                                    size="small"
                                                    disablePortal
                                                    id="combo-box-counties"
                                                    options={counties}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            name="countyName"
                                                            onBlur={handleBlur}
                                                            onChange={
                                                                handleChange
                                                            }
                                                            value={
                                                                values.countyName
                                                            }
                                                            {...params}
                                                            label="İlçe"
                                                            error={
                                                                Boolean(
                                                                    touched.countyName
                                                                ) &&
                                                                Boolean(
                                                                    errors.countyName
                                                                )
                                                            }
                                                            helperText={
                                                                touched.countyName &&
                                                                errors.countyName
                                                            }
                                                        />
                                                    )}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col sm={12} md={12} lg={6}>
                                                <Autocomplete
                                                    size="small"
                                                    disablePortal
                                                    id="combo-box-neighbourhoods"
                                                    options={neighborhoods}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            name="neighbourhoodName"
                                                            onBlur={handleBlur}
                                                            onChange={
                                                                handleChange
                                                            }
                                                            value={
                                                                values.neighbourhoodName
                                                            }
                                                            {...params}
                                                            label="Mahalle"
                                                            error={
                                                                Boolean(
                                                                    touched.neighbourhoodName
                                                                ) &&
                                                                Boolean(
                                                                    errors.neighbourhoodName
                                                                )
                                                            }
                                                            helperText={
                                                                touched.neighbourhoodName &&
                                                                errors.neighbourhoodName
                                                            }
                                                        />
                                                    )}
                                                />
                                            </Col>
                                            <Col sm={12} md={12} lg={6}>
                                                <Autocomplete
                                                    size="small"
                                                    disablePortal
                                                    id="combo-box-streets"
                                                    options={streets}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            name="streetName"
                                                            onBlur={handleBlur}
                                                            onChange={
                                                                handleChange
                                                            }
                                                            value={
                                                                values.streetName
                                                            }
                                                            {...params}
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
                                                    )}
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
                                        <Row>
                                            <Col sm={6} md={6} lg={3}>
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
                                            <Col sm={6} md={6} lg={3}>
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
                                            <Col
                                                sm={6}
                                                md={6}
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
                                                    Konum Kullanarak Doldur
                                                </Button>
                                            </Col>
                                            <Col
                                                sm={6}
                                                md={6}
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
                                                    show={modalShow}
                                                    onHide={() =>
                                                        setModalShow(false)
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Button variant="secondary">
                                                Kaydet
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
