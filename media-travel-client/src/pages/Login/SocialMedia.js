import React from 'react';
import firebase from "firebase/app"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-hot-toast';

const SocialMedia = ({handleResponse}) => {
    const google = new firebase.auth.GoogleAuthProvider();
    const github = new firebase.auth.GithubAuthProvider();

    const onSubmit = (provider) => {
        const loading = toast.loading('Please wait...');
        firebase.auth()
        .signInWithPopup(provider)
        .then( res => {
            handleResponse(res)
            toast.dismiss(loading);
        }).catch( error  => {
            toast.dismiss(loading);
            toast.error(error.message)
        });
    }

    return (
        <div class="social-media">
            <div onClick={() => onSubmit(google)} className="social-icon">
                <FontAwesomeIcon icon={faGoogle}/>
            </div>
            <div onClick={() => onSubmit(github)} className="social-icon">
                <FontAwesomeIcon icon={faGithub}/>
            </div>
        </div>
    );
};

export default SocialMedia;