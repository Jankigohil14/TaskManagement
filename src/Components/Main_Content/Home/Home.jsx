import React from 'react';
import styles from './Home.module.css';
import SupportIllustration from '../../../assets/SVGs/support-illustration.svg';
import Sidebar from '../../Sidebar/Sidebar';
import Main from '../../Main/Main';
import {useDispatch, useSelector} from 'react-redux';
import {UISliceAction} from '../../../store/UISlice';

const Home = () => {
    const isSidebarshown = useSelector((state) => state.ui.isSidebarisOpen);
    // console.log(isSidebarshown);

    const dispatch = useDispatch();

    const close_sidebar = () => {
        dispatch(UISliceAction.hideSidebar());
    };
    return (
        <React.Fragment>
            <section style={{position: 'relative'}}>
                {/* Illustration */}
                <div className={styles.Header_Illustration}>
                    <img
                        className='max-w-none'
                        src={SupportIllustration}
                        alt='ApplyMainContentSection'
                        aria-hidden='true'
                        width={1440}
                        height={286}
                    />
                </div>
                {/* Page container */}
                <div className='container-fluid'>
                    <div className='d-md-flex justify-content-md-between'>
                        {/* Backdrop */}
                        <div
                            className={styles.sidebar_backdrop}
                            onClick={close_sidebar}
                            style={{
                                display: `${isSidebarshown ? 'block' : 'none'}`,
                            }}
                        ></div>
                        {/* Page Sidebar */}
                        <Sidebar showSidebar={isSidebarshown} />
                        {/* Page Content */}
                        <Main />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;
