import axios from 'axios';

let GET_DOCUMENT_URL = `${process.env.REACT_APP_BASE_URL}/api/Document/`;

// Example API request when button is clicked.
export const getDocument = async ( id ) => {
    var resultData;

    GET_DOCUMENT_URL=GET_DOCUMENT_URL+id;

    await axios.get(GET_DOCUMENT_URL).then(async (result) => {
        resultData = await result.data;
    });

    return await resultData;
};
export default getDocument;