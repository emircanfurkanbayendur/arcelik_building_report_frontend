import axios from 'axios';

const POST_BUILDING_URL = `${process.env.REACT_APP_BASE_URL}/api/Building`;

// Example API request when button is clicked.
export const postBuilding = async ({
    name,
    city,
    district,
    neighbourhood,
    street,
    buildingNumber,
    code,
    latitude,
    longitude,
    createdByUserId,
}) => {
    var resultData;

    const building = {
        id: 0,
        name,
        city,
        district,
        neighbourhood,
        street,
        buildingNumber,
        code,
        latitude,
        longitude,
        registeredAt: new Date().toJSON(),
        isActive: true,
        createdByUserId,
    };

    let config = {
        headers: {
            Authorization:
                'Bearer ' +
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9zbWFuY2FnbGFydGVzdEBnbWFpbC5jb20iLCJuYmYiOjE2Nzg3MTgzNzgsImV4cCI6MTY3ODcyMTk3OCwiaWF0IjoxNjc4NzE4Mzc4fQ.VY00jxeKICzDNFG5zeWz9suYg83DfPIVXH74-6eAwKM',
        },
    };
    await axios
        .post(POST_BUILDING_URL, building, config)
        .then(async (result) => {
            resultData = await result.data;
        });

    return await resultData;
};
export default postBuilding;
