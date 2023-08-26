import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './LoginModal.css';
import "firebase/auth";
import log from '../../resources/img/roket.svg';
import desk from '../../resources/img/desk.svg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import toast from 'react-hot-toast';
import { UserContext } from '../../App';
import img from '../../resources/img/user.svg'


const Form = () => {
  const [isSignUp, setSignUp] = useState(false);
  const {setUser, setAdmin} = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" }};

const handleResponse = (res) => {
    setAdmin(false)
    const {displayName, email, photoURL} = res.user;
    setUser({
      name: displayName,
      email: email,
      photoURL: photoURL ? photoURL : img,
    })

    if(!res.error){
      toast.success('Successfully Logged In!');
      history.replace(from);
      
      let offer = 0;
      
      for (let i = 0; i < Infinity; i++) {
        let offerNumber = Math.floor(Math.random() * 1000);
        if(offerNumber > 100 && offerNumber < 300){
          offer = offerNumber;
          localStorage.setItem('offer', offer);
          break
        }
      }
    }
  }


  return (
    <div className={`${ isSignUp ? "fContainer sign-up-mode" : "fContainer"}`}>
        <Link to="/">
          <span className="pageCloseBtn"><FontAwesomeIcon icon={faTimes} /></span>
        </Link>
       <div className="forms-container">
         <div className="signIn-singUp">
            <SignInForm handleResponse={handleResponse}/>
            <SignUpForm handleResponse={handleResponse}/>
         </div>
       </div>

       <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae quas magnam!</p>
              <button className="iBtn transparent" onClick={() => setSignUp(true)}>Sign Up</button>
            </div>
            <img src={log} alt="" className="pImg"/>
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae quas magnam!</p>
              <button className="iBtn transparent" onClick={() => setSignUp(false)}>Sign In</button>
            </div>
            <img src={desk} alt="" className="pImg"/>
          </div>
       </div>
    </div>
  );
};

export default Form;