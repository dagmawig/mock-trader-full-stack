import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { auth } from './FirebaseConfig';
import { useStateValue } from './StateWrap';


function Login() {

    const [{ userID }, dispatch] = useStateValue();
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');

    // method used to sign in existing user. it also checks if email is verified. if not it sends verification email.
    const signIn = (e) => {

        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                let user = auth.currentUser;
                if (user.emailVerified) {

                    localStorage.setItem("userID", user.uid);

                    dispatch({
                        type: 'SET_USER',
                        userID: user.uid
                    })

                    window.location.reload();
                }
                else {
                    user.sendEmailVerification();
                    alert(`Email not verified.\nVerification link sent to ${email}.\nPlease verify your email.`);
                    auth.signOut();
                }
            }).catch((error) => alert(error.message));

    };

    return (
        <div className="login row">
            <div className="login_image col-sm-6 d-none d-sm-block">
                <img alt="login image" src={process.env.PUBLIC_URL + '/image/login.jpg'} />
            </div>
            <div className="login_form col-sm-6">

                <form>
                    <h3>Welcome to Mock Trader</h3>
                    <br/>
                    Email<br />
                    <input type="email" size="22" value={email} onChange={(e) => getEmail(e.target.value)} /><br /><br />
                    Password<br />
                    <input type="password" size="22" value={password} onChange={(e) => getPassword(e.target.value)} /><br /><br />
                    <button type="submit" onClick={signIn} className="login_signIn btn btn-success">
                        Sign In <i className="fa fa-sign-in"></i>
                    </button>
                    <br/><br/>
                    <div>
                        <Link to="/signup">
                            <a>New user? Create account here.</a>
                        </Link>
                    </div>
                    <div>
                        <Link to="/reset">
                            <a>Forgot password? Reset password here.</a>
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;