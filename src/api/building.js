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

export const putBuilding = async (building) => {
    var resultData;
    let config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };

    await axios
        .put(`${BUILDING_ENDPOINT_URL}`, building, config)
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

export const getBuildingsByUserId = async (userId) => {
    var resultData;
    let config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };

    await axios
        .get(`${BUILDING_ENDPOINT_URL}/user/${userId}`)
        .then(async (result) => {
            resultData = await result.data;
        });

    return await resultData;
};

export const getStreetsByAddress = async (city, district, neighbourhood) => {
    var resultData;

    await axios
        .get(`${BUILDING_ENDPOINT_URL}/streetByAdress`, {
            params: {
                city: city,
                district: district,
                neighbourhood: neighbourhood,
            },
        })
        .then(async (result) => {
            resultData = await result.data;
        });

    return await resultData;
};

export const getBuildingsByAddress = async (
    city,
    district,
    neighbourhood,
    street
) => {
    var resultData;

    await axios
        .get(`${BUILDING_ENDPOINT_URL}/buildingsByAdress`, {
            params: {
                city: city,
                district: district,
                neighbourhood: neighbourhood,
                street: street,
            },
        })
        .then(async (result) => {
            resultData = await result.data;
        });

    return await resultData;
};

export const getCount = async () => {
    var resultData;

    await axios.get(`${BUILDING_ENDPOINT_URL}/count/`).then(async (result) => {
        resultData = await result.data;
    });

    return await resultData;
};
