import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { signin } from '../actions/userActions';


const SigninScreen = (props) =>{
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
        return () => {
            //
        }
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email,password));
    }
     return (
      <div class="banner-area">
      <div class="banner-text">
      
     <div className="form">
          
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <img className="avatar" src="/images/user.png"></img>
        </li>
        <li className="center">
          <h2>Sign-In</h2>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="buttonnohover">SIGN IN</button>
        </li>
        <li>
          New to account?
        </li>
        <li>
        <button type="button" className="buttonblack">
          <Link to={redirect === "/" ? "register": "register?redirect=" + redirect}className="buttonblack">SIGN UP</Link>
        </button>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
      </ul>
    </form>
  </div>
  </div>
  </div>);
    
}
export default SigninScreen;