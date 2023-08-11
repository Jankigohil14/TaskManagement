import React from 'react';

const AvatarIcon = () => {
    return (
        <React.Fragment>
            <svg
                width={25}
                height={25}
                version='1.1'
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 512 512'
                xmlSpace='preserve'
            >
                <g>
                    <circle
                        style={{fill: '#32BEA6'}}
                        cx='256'
                        cy='129.92'
                        r='129.92'
                    />
                    <path
                        style={{fill: '#32BEA6'}}
                        d='M461.696,512C459.456,387.904,368.32,288.016,256,288.016S52.544,387.904,50.304,512H461.696z'
                    />
                </g>
            </svg>
        </React.Fragment>
    );
};

export default AvatarIcon;
