import { useState } from 'react';
import { Formik } from 'formik';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { loginSchema, registerSchema } from './formSchema';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { sha256, sha224 } from 'js-sha256';
import axios from 'axios';
import './styles.css';
import postUser from '../../api/auth';
import { isDisabled } from '@testing-library/user-event/dist/utils';
const initialValuesForRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

const initialValuesForLogin = {
    email: '',
    password: '',
};

const handleFormSubmit = () => {};

const Form = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [pageType, setPageType] = useState('login');
    const [isPending, setIsPending] = useState(false);
    const isLogin = pageType === 'login';
    const isRegister = pageType === 'register';

    const handleClickShowPassword = () =>
        setIsShowPassword((isShowPassword) => !isShowPassword);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={
                isLogin ? initialValuesForLogin : initialValuesForRegister
            }
            validationSchema={isLogin ? loginSchema : registerSchema}
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
                                {isRegister
                                    ? 'Yeni hesap olu??tur'
                                    : 'Hesab??na giri?? yap'}
                            </h1>

                            <Col className="mt-2"></Col>
                        </Row>
                        <Row className="">
                            <p
                                className="d-none d-md-block"
                                style={{ textAlign: 'justify' }}
                            >
                                {isRegister
                                    ? `Yap?? Sorgulama Sistemi'nde hesap olu??turan
                                yetkili kullan??c??lar bilgi sahibi oldu??u yap??
                                hakk??nda belge giri??i yapabilecek ve b??ylelikle
                                sorgulama yapan kullan??c??lar i??in ilgili sorguya
                                ait evraklar?? di??er kullan??c??lara
                                sunabileceklerdir.`
                                    : `Yap?? Sorgulama Sistemi'ne giri?? yapan yetkili kullan??c??lar
                                yap??yla ilgili bilgi/evrak ekleme ve d??zenleme i??lemlerini ger??ekle??tirebilecektir.`}
                            </p>
                            <Col className="mt-2"></Col>
                        </Row>

                        <Row>
                            <Col>
                                {isRegister && (
                                    <>
                                        <Row>
                                            <Col sm={12} md={12} lg={6}>
                                                <TextField
                                                    label="Ad"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.firstName}
                                                    name="firstName"
                                                    size="small"
                                                    fullWidth
                                                    error={
                                                        Boolean(
                                                            touched.firstName
                                                        ) &&
                                                        Boolean(
                                                            errors.firstName
                                                        )
                                                    }
                                                    helperText={
                                                        touched.firstName &&
                                                        errors.firstName
                                                    }
                                                />
                                            </Col>
                                            <div
                                                style={{ display: 'block' }}
                                                className="mt-2 d-sm-block d-md-block d-lg-none"
                                            ></div>
                                            <Col sm={12} md={12} lg={6}>
                                                <TextField
                                                    label="Soyad"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.lastName}
                                                    name="lastName"
                                                    size="small"
                                                    fullWidth
                                                    error={
                                                        Boolean(
                                                            touched.lastName
                                                        ) &&
                                                        Boolean(errors.lastName)
                                                    }
                                                    helperText={
                                                        touched.lastName &&
                                                        errors.lastName
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    </>
                                )}
                                {
                                    <>
                                        <Row className="mt-2 mb-2">
                                            <Col sm={12}>
                                                <TextField
                                                    label="Mail adresi"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.email}
                                                    name="email"
                                                    size="small"
                                                    fullWidth
                                                    error={
                                                        Boolean(
                                                            touched.email
                                                        ) &&
                                                        Boolean(errors.email)
                                                    }
                                                    helperText={
                                                        touched.email &&
                                                        errors.email
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mb-2">
                                            <Col sm={12}>
                                                <TextField
                                                    label="Parola"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.password}
                                                    name="password"
                                                    size="small"
                                                    fullWidth
                                                    error={
                                                        Boolean(
                                                            touched.password
                                                        ) &&
                                                        Boolean(errors.password)
                                                    }
                                                    helperText={
                                                        touched.password &&
                                                        errors.password
                                                    }
                                                    type={
                                                        isShowPassword
                                                            ? 'text'
                                                            : 'password'
                                                    }
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={
                                                                        handleClickShowPassword
                                                                    }
                                                                    onMouseDown={
                                                                        handleMouseDownPassword
                                                                    }
                                                                    edge="end"
                                                                >
                                                                    {isShowPassword ? (
                                                                        <VisibilityOff />
                                                                    ) : (
                                                                        <Visibility />
                                                                    )}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </>
                                }

                                {/* BUTTONS */}
                                <Row className="mt-3 mb-1">
                                    <Col sm={12}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="outlined"
                                            disabled={isPending ? true : false}
                                            onClick={async () => {
                                                setIsPending(true);
                                                let x = await postUser(values);
                                                await console.log(x);
                                                setIsPending(false);
                                            }}
                                            sx={{
                                                color: 'rgb(118, 118, 118)',
                                                borderColor:
                                                    'rgb(118, 118, 118)',
                                                '&:hover': {
                                                    backgroundColor:
                                                        '#D8D8D8 !important',
                                                    borderColor: '#B8B8B8',
                                                    color: '#767272',
                                                },
                                            }}
                                        >
                                            {isLogin && !isPending
                                                ? 'Giri?? yap'
                                                : !isLogin && !isPending
                                                ? 'Hesap olu??tur'
                                                : ''}

                                            {isPending && (
                                                <Spinner animation="border" />
                                            )}
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}></Col>
                                    <Col sm={6}>
                                        <p
                                            style={{
                                                // textAlign: 'end',
                                                cursor: 'pointer',
                                            }}
                                            className="float-end hover-underline-animation"
                                            onClick={() => {
                                                setPageType(
                                                    isLogin
                                                        ? 'register'
                                                        : 'login'
                                                );
                                                setIsPending(false);
                                                resetForm();
                                            }}
                                        >
                                            {isLogin
                                                ? 'Bir hesab??n??z yok mu? Burdan kaydolun.'
                                                : 'Zaten bir hesab??n??z var m??? Burdan giri?? yap??n.'}
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </form>
            )}
        </Formik>
    );
};

export default Form;
