import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { auth } from './FirebaseConfig';


function SignUp() {
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');
    const [valid, isValid] = useState(null);

    // method to sign up user using firebase authentication method and send email verification link
    const signUp = (e) => {

        e.preventDefault();

        if(valid) return;

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                let user = auth.currentUser;
                user.sendEmailVerification()
                    .then(function () {
                        auth.signOut();
                        alert(`Verification link sent to ${email}. \n Please click on the link to verify your email and log into your acount.`);
                        isValid(true);
                        document.getElementById("signup").click();
                    }).catch(function (e) {
                        alert(e);
                    });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="signup row">
            <div className="login_image col-sm-6 d-none d-sm-block">
                <img alt="login image" src={process.env.PUBLIC_URL + '/image/login.jpg'} />
            </div>
            <div className="login_form col-sm-6">
                <form>
                    <h4>Create Account on Mock Trader</h4>
                    <br />
                Email<br />
                    <input type="email" size="22" value={email} onChange={(e) => getEmail(e.target.value)} /><br /><br />
                Password<br />
                    <input type="password" size="22" value={password} onChange={(e) => getPassword(e.target.value)} /><br /><br />
                    <button onClick={signUp} className="login_signUp btn btn-success">
                        <Link to={(valid) ? "/" : "/signup"} className="signUp_link" id="signup">
                            Sign Up <i className="fa fa-user-plus"></i>
                        </Link>
                    </button>
                    <br /><br />
                    <div>
                        <Link to="/">
                            <a>Existing user? Sign in here.</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;