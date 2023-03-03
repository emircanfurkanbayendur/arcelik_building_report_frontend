import * as yup from 'yup';

export const formSchema = yup.object().shape({
    cityName: yup.string().required('İl alanı boş bırakılamaz!'),
    countyName: yup.string().required('İlçe alanı boş bırakılamaz!'),
    neighbourhoodName: yup.string().required('Mahalle alanı boş bırakılamaz!'),
    streetName: yup.string().required('Sokak alanı boş bırakılamaz!'),
    buildingCode: yup.string().required('Yapı kodu alanı boş bırakılamaz!'),
    buildingName: yup.string().required('Yapı ismi alanı boş bırakılamaz!'),
    latitude: yup.string().required('Coğrafi konum alanı boş bırakılamaz!'),
    longitude: yup.string().required('Coğrafi konum alanı boş bırakılamaz!'),
});
