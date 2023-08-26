import React from 'react';
import { useForm } from 'react-hook-form';
import SocialMedia from './SocialMedia';
import { useState } from 'react';
import { Toast } from 'react-bootstrap';
import infoIcon from '../../resources/img/info.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from './contexts/AuthContext';
import { toast } from 'react-hot-toast';


const SignInForm = ({handleResponse}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [show, setShow] = useState(true);
    const { login } = useAuth()

    setTimeout(() => {
        setShow(false);
    }, 10000)

    const onSubmit = ({email, password}) => {
        const loading = toast.loading('Please wait...');
        login(email, password)
        .then( res => {
            handleResponse(res)
            toast.dismiss(loading);
        }).catch( error  => {
            toast.dismiss(loading);
            toast.error(error.message)
        });
        
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} class="sign-in-form">
            <Toast show={show} onClose={() => setShow(!show)} className="signInToast">
                <Toast.Header>
                    <img src={infoIcon} className="circle mr-2 toastIcon" alt=""/>
                    <strong className="mr-auto">Important Info</strong>
                </Toast.Header>
                <Toast.Body>Use this account to sign in as a admin, to test admin panel. Sign in with different account as a user.</Toast.Body>
            </Toast>
            <h2 class="title">Sign in</h2>
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faEnvelope}/></span>
                <input defaultValue='test@admin.com' placeholder="Email" {...register("email", { required: true })} />
            </div>
            {errors.email && <span className="text-warning">This field is required</span>}
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faLock}/></span>
                <input defaultValue="asdf1234" type="password" placeholder="Password" {...register("password", { required: true })} />
            </div>
            {errors.password && <span className="text-warning">This field is required</span>}
            <input className="iBtn" type="submit" value="sign In"/>
            <p class="social-text">Or Sign in with social platforms</p>
            <SocialMedia handleResponse={handleResponse}/>
        </form>
    );
};

export default SignInForm;