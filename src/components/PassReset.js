import React, { useState } from 'react';
import './PassReset.css';
import { Link } from 'react-router-dom';
import { auth } from './FirebaseConfig';


function Reset() {

    const [email, getEmail] = useState('');

    // function that handles password reset action.
    const resetPass = (e) => {

        e.preventDefault();

        auth.sendPasswordResetEmail(email).then(() => {
            alert(`Password reset link sent to ${email}.`);
            getEmail("");
            document.getElementById("login_link").click();
        }).catch(function (error) {
            alert(error.message);
        })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div className="reset row">
            <div className="reset_image col-sm-6 d-none d-sm-block">
                <img alt="reset image" src={process.env.PUBLIC_URL + '/image/login.jpg'} />
            </div>
            <div className="reset_form col-sm-6">

                <form>
                    <h4>Mock Trader Password Reset</h4>
                    <br />
                    Email<br />
                    <input type="email" size="22" value={email} onChange={(e) => getEmail(e.target.value)} /><br /><br />
                    <button type="submit" onClick={resetPass} className="reset_pass btn btn-success">
                        Reset Password <i className="fa fa-key"></i>
                    </button>
                    <br /><br />
                    <div>
                        <Link to="/signup">
                            <a>New user? Create account here.</a>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <a id="login_link">Remember Password? Sign in here.</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Reset;