import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { loginSchema, registerSchema } from './formSchema';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import './styles.css';
import { postUser, postAuthenticate, postVerifyToken } from '../../api/auth';
import ResetPasswordModal from './ResetPasswordModal';
import VerifyTokenModal from './VerifyTokenModal';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearErrors,
    isLoadingSelector,
    postAuthenticateSelector,
    postUserSelector,
} from '../../redux/auth/authSlice';
import {
    postAuthenticateAsync,
    postUserAsync,
} from '../../redux/auth/services';

const initialValuesForRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verifyToken: '',
};

const initialValuesForLogin = {
    email: '',
    password: '',
};

const Form = () => {
    const dispatch = useDispatch();

    const postUser = useSelector(postUserSelector);
    const postAuthenticate = useSelector(postAuthenticateSelector);
    const isLoading = useSelector(isLoadingSelector);

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [pageType, setPageType] = useState('login');
    const [showModal, setModalShow] = useState(false);

    const handleClickShowPassword = () =>
        setIsShowPassword((isShowPassword) => !isShowPassword);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleFormSubmit = async (values) => {
        console.log(postAuthenticate);
        pageType === 'login'
            ? dispatch(postAuthenticateAsync(values))
            : dispatch(postUserAsync(values));
    };

    useEffect(() => {
        if (postUser.status === 'succeeded') {
            setModalShow(true);
        }
    }, [postUser.status]);

    useEffect(() => {
        if (postAuthenticate.status === 'succeeded') {
            window.location.replace('/admin');
        }
    }, [postAuthenticate.status]);

    return (
        <>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={
                    pageType === 'login'
                        ? initialValuesForLogin
                        : initialValuesForRegister
                }
                validationSchema={
                    pageType === 'login' ? loginSchema : registerSchema
                }
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
                                    {pageType === 'register'
                                        ? 'Yeni hesap oluştur'
                                        : 'Hesabına giriş yap'}
                                </h1>

                                <Col className="mt-2"></Col>
                            </Row>
                            <Row className="">
                                <p
                                    className="d-none d-md-block"
                                    style={{ textAlign: 'justify' }}
                                >
                                    {pageType === 'register'
                                        ? `Yapı Sorgulama Sistemi'nde hesap oluşturan
                                yetkili kullanıcılar bilgi sahibi olduğu yapı
                                hakkında belge girişi yapabilecek ve böylelikle
                                sorgulama yapan kullanıcılar için ilgili sorguya
                                ait evrakları diğer kullanıcılara
                                sunabileceklerdir.`
                                        : `Yapı Sorgulama Sistemi'ne giriş yapan yetkili kullanıcılar
                                yapıyla ilgili bilgi/evrak ekleme ve düzenleme işlemlerini gerçekleştirebilecektir.`}
                                </p>
                                <Col className="mt-2"></Col>
                            </Row>
                            <Row>
                                <Col>
                                    {postAuthenticate.status === 'failed' &&
                                        postAuthenticate.error && (
                                            <Alert variant="danger">
                                                {postAuthenticate.error}
                                            </Alert>
                                        )}

                                    {postUser.status === 'failed' &&
                                        postUser.error && (
                                            <Alert variant="danger">
                                                {postUser.error}
                                            </Alert>
                                        )}
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    {pageType === 'register' && (
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
                                                            Boolean(
                                                                errors.lastName
                                                            )
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
                                                            Boolean(
                                                                errors.email
                                                            )
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
                                                            Boolean(
                                                                errors.password
                                                            )
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
                                                disabled={
                                                    postAuthenticate.status ===
                                                        'loading' ||
                                                    postUser.status ===
                                                        'loading'
                                                }
                                                onClick={() =>
                                                    handleFormSubmit(values)
                                                }
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
                                                {pageType === 'login' &&
                                                !isLoading
                                                    ? 'Giriş yap'
                                                    : pageType === 'register' &&
                                                      !isLoading
                                                    ? 'Hesap oluştur'
                                                    : ''}

                                                {/* {postAuthenticate.status ===
                                                    'loading' && (
                                                    <Spinner animation="border" />
                                                )} */}
                                                {isLoading && (
                                                    <Spinner animation="border" />
                                                )}
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <p
                                                style={{
                                                    // textAlign: 'end',
                                                    cursor: 'pointer',
                                                }}
                                                className="float-end hover-underline-animation"
                                                onClick={() => {
                                                    setModalShow(true);
                                                }}
                                            >
                                                {pageType === 'login'
                                                    ? 'Şifreni mi unuttun? Burdan sıfırla.'
                                                    : ''}
                                            </p>
                                        </Col>
                                        <Col sm={6}>
                                            <p
                                                style={{
                                                    // textAlign: 'end',
                                                    cursor: 'pointer',
                                                }}
                                                className="float-end hover-underline-animation"
                                                onClick={() => {
                                                    setPageType(
                                                        pageType === 'login'
                                                            ? 'register'
                                                            : 'login'
                                                    );
                                                    resetForm();
                                                    dispatch(clearErrors());
                                                }}
                                            >
                                                {pageType === 'login'
                                                    ? 'Bir hesabınız yok mu? Burdan kaydolun.'
                                                    : 'Zaten bir hesabınız var mı? Burdan giriş yapın.'}
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                        <VerifyTokenModal
                            show={showModal}
                            onHide={() => setModalShow(false)}
                            isResetModal={pageType === 'login' ? true : false}
                            values={values}
                        />
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Form;
