import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../Components/Header/Header';

const RootLayot = () => {
    return (
        <React.Fragment>
            {/* Page Wrapper */}
            <div className=' d-flex flex-column overflow-hidden min-vh-100'>
                {/* Site Header */}
                <Header />
                {/* PageContainer */}
                <main className='flex-grow-1'>
                    <Outlet />
                </main>
            </div>
        </React.Fragment>
    );
};

export default RootLayot;
