import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    firstName: yup.string().required('İsim alanı boş bırakılamaz!'),
    lastName: yup.string().required('Soyisim alanı boş bırakılamaz!'),
    email: yup
        .string()
        .email('Lütfen geçerli mail adresi giriniz!')
        .required('Mail adresi boş bırakılamaz!'),
    password: yup
        .string()
        .required('Şifre alanı boş bırakılamaz!')
        .min(8, 'Şifre minimum 8 karakterden oluşmalıdır!')
        .max(32, 'Şifre 32 karakterden uzun olamaz!'),
});

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Lütfen geçerli mail adresi giriniz!')
        .required('Mail adresi boş bırakılamaz!'),
    password: yup.string().required('Şifre alanı boş bırakılamaz!'),
});
