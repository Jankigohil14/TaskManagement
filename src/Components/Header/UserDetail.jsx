import React from 'react';
import AvatarIcon from './../../assets/SVGs/AvatarIcon';
import styles from './UserDetail.module.css';
// import {useSearchParams} from 'react-router-dom';

const UserDetail = () => {
    // const [searchParams] = useSearchParams();
    // const user_role = searchParams.get('user');
    // console.log(user);
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className={styles.user_details}>
                <AvatarIcon />
            </div>
            <h5 className={`${styles.user_name} mt-2`}>Janki Gohil</h5>
            <div className='mx-2 vr'></div>
            <div className={styles.user_role}>BO</div>
        </div>
    );
};

export default UserDetail;
