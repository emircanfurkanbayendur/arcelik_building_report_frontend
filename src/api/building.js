import axios from 'axios';

const BUILDING_ENDPOINT_URL = `${process.env.REACT_APP_BASE_URL}/api/Building`;

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
        city:"sehir",
        district:"sehir",
        neighbourhood:"sehir",
        street:"sehir",
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
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };
    await axios
        .post(BUILDING_ENDPOINT_URL, building, config)
        .then(async (result) => {
            resultData = await result.data;
        });

    return await resultData;
};

export const getBuildingByCode = async (buildingCode) => {
    var resultData;

    await axios
        .get(`${BUILDING_ENDPOINT_URL}/code/${buildingCode}`)
        .then(async (result) => {
            resultData = await result.data;
        });

    return await resultData;
};
