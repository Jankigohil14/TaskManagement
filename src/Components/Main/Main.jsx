import React from 'react';
import styles from './Main.module.css';
import {Outlet} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {UISliceAction} from '../../store/UISlice';

const Main = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    //const isSidebarshown = useSelector((state) => state.ui.isSidebarOpen);

    const show_Sidebar = () => {
        dispatch(UISliceAction.showSidebar());
    };

    return (
        <React.Fragment>
            <div className={styles.main_page_content}>
                <div className={styles.main_container}>
                    {/* Page Naavigation */}
                    <div
                        className={` align-items-center  ${styles.page_navigation}`}
                    >
                        <button
                            onClick={show_Sidebar}
                            aria-controls='sidebar'
                            aria-expanded='false'
                            className='bg-transparent me-2'
                        >
                            <span
                                className='position-absolute overflow-hidden border-0 p-0 text-secondary '
                                style={{
                                    margin: '-1px',
                                    height: '1px',
                                    width: '1px',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                Menu
                            </span>
                            <svg
                                height={24}
                                width={24}
                                style={{fill: '#555'}}
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <rect x='4' y='5' width='16' height='2'></rect>
                                <rect x='4' y='11' width='16' height='2'></rect>
                                <rect x='4' y='17' width='16' height='2'></rect>
                            </svg>
                        </button>
                        {/* BreadCrumbs */}
                        <div
                            className={`d-flex align-items-center  me-3 ${styles.breadcrumbs}`}
                        >
                            <span className='text-secondary'>
                                {location.pathname.slice(7, 23)}
                            </span>
                            <svg
                                className=' shrink-1 mx-2 mt-1'
                                style={{
                                    height: '0.75rem',
                                    width: '0.75rem',
                                    fill: 'currentcolor',
                                }}
                                viewBox='0 0 16 16'
                            >
                                <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z'></path>
                            </svg>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Main;
