import { useEffect } from 'react';

import { getBuildingsAsync } from './redux/buildings/services';

import { useDispatch, useSelector } from 'react-redux';
import { postUserSelector } from './redux/auth/authSlice';

const TestPage = () => {
    const dispatch = useDispatch();
    const { postUser } = useSelector((state) => state.auth);
    const isLoading = useSelector(
        (state) => state.buildings.getBuildings.isLoading
    );
    const error = useSelector((state) => state.buildings.getBuildings.error);

    useEffect(() => {
        console.log(postUser);
    }, []);

    useEffect(() => {
        dispatch(getBuildingsAsync());
    }, [dispatch]);

    useEffect(() => {
        console.log(isLoading);
    });

    if (isLoading) return <div>loading</div>;
    if (error) return <div>error: {error}</div>;

    return <div>success</div>;
};

export default TestPage;
