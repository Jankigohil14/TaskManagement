import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';
import {pagelinks} from '../../routes/PageLinks';

const Sidebar = ({showSidebar}) => {
    return (
        <React.Fragment>
            {/* Aside - Sidebar */}
            <aside
                id='sidebar'
                className={`ms-md-0 position-fixed top-0 bottom-0 start-0 bg-white border-end  d-md-block ${styles.sidebar_container}`}
                style={{display: `${showSidebar ? 'block' : 'none'}`}}
            >
                <div className={styles.sidebar}>
                    <div className='list-group list-group-flush'>
                        {pagelinks.map((link, indx) => (
                            <NavLink
                                key={indx}
                                to={link.pagelink}
                                className={`list-group-item list-group-item-action py-3 d-flex justify-content-start align-items-center ${(
                                    isActive,
                                ) => isActive && 'active text-white'}`}
                            >
                                {link.pagelink_icon}
                                <span className='ms-2'>{link.pageTitle}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </aside>
        </React.Fragment>
    );
};

export default Sidebar;
