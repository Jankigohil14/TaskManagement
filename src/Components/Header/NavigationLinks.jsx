import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationLinks = () => {
    return (
        <React.Fragment>
            <button
                className='navbar-toggler'
                style={{border: 'none'}}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarlinks'
                aria-controls='navbarlinks'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li class='nav-item'>
                        <NavLink
                            to='index'
                            className='nav-link active'
                            aria-current='page'
                        >
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default NavigationLinks;
