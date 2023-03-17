import axios from 'axios';

const DOCUMENT_ENDPOINT_URL = `${process.env.REACT_APP_BASE_URL}/api/Document`;

export const postDocument = async ({
    report,
    uploadedByUserId,
    buildingId,
}) => {
    var resultData;

    const document = {
        id: 0,
        report,
        uploadedAt: new Date().toJSON(),
        isActive: true,
        uploadedByUserId,
        buildingId,
    };

    let config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };
    await axios
        .post(DOCUMENT_ENDPOINT_URL, document, config)
        .then(async (result) => {
            resultData = await result.data;
        });

    return await resultData;
};

export const getDocument = async (id) => {
    var resultData;

    await axios.get(`${DOCUMENT_ENDPOINT_URL}/${id}`).then(async (result) => {
        resultData = await result.data;
    });

    return await resultData;
};
