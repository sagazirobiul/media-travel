import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import './Profile.css'
import img from '../../resources/img/user.svg'
import toast from 'react-hot-toast';
import { UserContext } from '../../App';
import { useAuth } from '../../pages/LogIn/contexts/AuthContext';

const Profile = () => {
    const { currentUser, logout } = useAuth();
    const {user, setUser} = useContext(UserContext)

    const signOut = () => {
        const loading = toast.loading('Please wait...');
        setUser('')
        logout()
        .then(res => {
            toast.dismiss(loading);
            toast.error('Logged Out!');
        })
    }

    return (
        <Col md={5} className="mx-auto">
            <div className="profile">
                <h2>Profile</h2>
                <div className="profileInfo">
                    <img src={`${user?.photoURL ? user?.photoURL : currentUser?.photoURL ? currentUser?.photoURL : img }`} alt="" />
                    <h3>{currentUser?.displayName || user?.email === 'test@admin.com' || currentUser?.email === 'test@admin.com'? 'Admin' :'User'}</h3>
                    <h5>{user?.email || currentUser?.email}</h5>
                    <button onClick={signOut} className="mainBtn mt-3">Log out</button>
                </div>
            </div>
        </Col>
    );
};

export default Profile;