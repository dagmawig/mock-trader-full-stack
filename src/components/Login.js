import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './FirebaseConfig';


function Login() {
    //adding history of router components
    const history = useHistory();
    // declaring username and password states
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            let user = auth.currentUser;
            if(user.emailVerified){
                alert("email verified");
                console.log(user);
            }
            else {
                user.sendEmailVerification();
                alert(`Email not verified.\nVerification link sent to ${email}.\nPlease verify your email.`);
                console.log(user);
                auth.signOut();
            }
        }).catch((error) => alert(error.message));
       
        // auth.signInWithEmailAndPassword(email, password)
        //     .then(() => {
                
        //         console.log(user);
        //     })

        // .then(auth => {
        //     if (auth) {
        //         history.push('/');
        //     }
        // })
        // .catch((error) => alert(error.message));
    };

    const signUp = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                let user = auth.currentUser;
                console.log(user);
                user.sendEmailVerification()
                .then(function() {
                    auth.signOut();
                    alert(`Verification link sent to ${email}. \n Please click on the link to verify your email.`);
                 }).catch(function(e) {
                     alert(e);
                 });
            })
            // .then(auth=> {
            //     if (auth) {
            //         history.push('/');
            //     }
            // })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login row">
            <div className="login_image col-sm-6 d-none d-sm-block">
                <img alt="login image" src="/image/login.jpg" />
            </div>
            <div className="login_form col-sm-6">

                <form>
                    <h3>Welcome to Mock Trader</h3>
                    Email<br />
                    <input type="text" size="22" value={email} onChange={(e) => getEmail(e.target.value)} /><br /><br />
                    Password<br />
                    <input type="password" size="22" value={password} onChange={(e) => getPassword(e.target.value)} /><br /><br />
                    <button type="submit" onClick={signIn} className="login_signIn btn btn-success">
                        Sign In <i className="fa fa-sign-in"></i>
                    </button>
                    <div className="divider" />
                    <button onClick={signUp} className="login_signUp btn btn-success">
                        Sign Up <i className="fa fa-user-plus"></i>
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Login;