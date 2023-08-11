import React, {useEffect} from 'react';
import AllRoutes from './routes/AllRoutes';
import {useDispatch} from 'react-redux';
import {UISliceAction} from './store/UISlice';
const count = 2;
const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // count++;
        const localstorageValue = localStorage.getItem('LOGGED_IN');
        if (count === 2) {
            if (localstorageValue === '1') {
                dispatch(UISliceAction.login());
            }
        }
    }, [dispatch]);
    return (
        <React.Fragment>
            <AllRoutes />
        </React.Fragment>
    );
};

export default App;
