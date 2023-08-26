import React, { useState, useRef, useContext} from 'react';
import { Button, Overlay, Popover } from 'react-bootstrap';
import './PopOver.css';
import img from '../../../resources/img/user.svg'
import toast from 'react-hot-toast';
import { UserContext } from '../../../App';
import { useAuth } from '../../../pages/LogIn/contexts/AuthContext';

const PopOver = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const { currentUser, logout } = useAuth();
    const {user, setUser} = useContext(UserContext)

    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };

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
        <>
        <div ref={ref}>
            <img onClick={handleClick} src={`${user?.photoURL ? user?.photoURL : currentUser?.photoURL ? currentUser?.photoURL : img }`} alt="" className="popImg"/>
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={50}
            >
                <Popover id="popover-contained">
                    <Popover.Body className="text-center">
                        <img src={`${user?.photoURL ? user?.photoURL : currentUser?.photoURL ? currentUser?.photoURL : img }`} alt="" className="popUserImg"/>
                        <p className="userName">{currentUser?.displayName || user?.email === 'test@admin.com' || currentUser?.email === 'test@admin.com'? 'Admin' :'User'}</p>
                        <p className="userEmail">{user?.email || currentUser?.email}</p>
                        <Button onClick={signOut} variant="outline-danger" size="sm">Log out</Button>
                    </Popover.Body>
                </Popover>
            </Overlay>
            </div>
        </>
    );
};

export default PopOver;