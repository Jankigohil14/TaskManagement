import React from 'react';
import TaskLogo from '../../assets/Images/tasklogo.png';
// import ArrowSVG from '../../assets/SVGs/ArrowSVG.svg';
import styles from './Header.module.css';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {UISliceAction} from '../../store/UISlice';
import UserDetail from './UserDetail';
// import NavigationLinks from './NavigationLinks';

const Header = () => {
    const isLoggedInToSite = useSelector((state) => state.ui.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(isLoggedInToSite);

    const logoutHandler = () => {
        dispatch(UISliceAction.logout());
        navigate('');
    };

    return (
        <header className={` ${styles.header}`}>
            <nav
                className={`navbar navbar-expand-md shadow-sm mb-2 mb-md-0 w-100 position-fixed ${styles.nav_bar_bg}`}
            >
                <div className='container-fluid'>
                    <Link className='navbar-brand d-flex' to='index'>
                        <img
                            src={TaskLogo}
                            alt='Logo'
                            width={48}
                            height={48}
                            className='d-inline-block align-text-top'
                        />
                        <div className='d-flex flex-column'>
                            <span className='ms-2 tasklogo'>Task</span>
                            <span className='ms-2 tasklogo'>Management</span>
                        </div>
                    </Link>
                    {/* <NavigationLinks /> */}
                    <div>
                        {!isLoggedInToSite && (
                            <Link
                                to=''
                                className='btn btn-dark rounded-pill d-inline-flex justify-content-betwen align-items-center px-3'
                            >
                                Sign up
                                <span className='text-info ms-2'>
                                    <svg
                                        width='12'
                                        height='10'
                                        xmlns='http://www.w3.org/2000/svg'
                                        style={{fill: 'currentcolor'}}
                                    >
                                        <path d='M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z'></path>
                                    </svg>
                                </span>
                            </Link>
                        )}

                        {isLoggedInToSite && (
                            <div className='d-flex justify-content-center align-items-center'>
                                <UserDetail />
                                <button
                                    onClick={logoutHandler}
                                    className='btn btn-danger rounded-pill d-inline-flex justify-content-betwen align-items-center px-3 ms-3'
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
