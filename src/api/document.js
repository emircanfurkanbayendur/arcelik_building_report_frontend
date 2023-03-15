import axios from 'axios';

const POST_DOCUMENT_URL = `${process.env.REACT_APP_BASE_URL}/api/Document`;

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
            Authorization:
                'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token,
        },
    };
    await axios
        .post(POST_DOCUMENT_URL, document, config)
        .then(async (result) => {
            resultData = await result.data;
        });

    return await resultData;
};
