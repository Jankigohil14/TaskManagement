import React from 'react';
import styles from './Login.module.css';
import {useDispatch} from 'react-redux';
import {UISliceAction} from '../../../store/UISlice';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(UISliceAction.login());
        navigate(`index`);
    };

    return (
        <React.Fragment>
            <section>
                <div className={`container ${styles.login_container}`}>
                    <div className='row justify-content-center align-items-center m-2'>
                        <div className='col-sm-5 col-md-8'>
                            <div className='text-center'>
                                <h2 className='display-4 mb-2'>
                                    Please Login to Continue
                                </h2>
                                <button
                                    className='btn btn-primary rounded-pill'
                                    onClick={handleLogin}
                                >
                                    Please Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Login;
