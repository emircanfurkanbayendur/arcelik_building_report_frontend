import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBuildingByCode } from '../../api/building';
const DocumentInfo = () => {
    const [buildingInfo, setBuildingInfo] = useState({
        documents: [],
    });
    const { id } = useParams();
    var data2;

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const building = await getBuildingByCode({ id }.id);
            await setBuildingInfo(building);

            console.log('building');
            console.log(building.documents[0].report);
            setBuildingInfo(building.documents[0].report);
        };

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, []);
    var data2 = 'data:application/pdf;base64,' + buildingInfo;
    //console.log({id}.id);

    return (
        <div>
            <iframe src={data2} height="1000px" width="100%"></iframe>
        </div>
    );
};

export default DocumentInfo;
