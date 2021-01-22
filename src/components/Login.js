import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login row">
            <div className="login_image col-sm-6 d-none d-sm-block">
                <img alt="login image" src="/image/login.jpg" />
            </div>
            <div className="login_form col-sm-6">
               
                <form>
                <h3>Welcome to Mock Trader</h3>
                    Username<br/>
                    <input type="text" /><br/><br/>
                    Password<br/>
                    <input type="text" /><br/><br/>
                    <button type="submit" className="login_signIn btn btn-success">
                        Sign In <i className="fa fa-sign-in"></i>
                  </button>
                  <div className="divider"/>
                  <button type="submit" className="login_signUp btn btn-success">
                        Sign Up <i className="fa fa-user-plus"></i>
                  </button>
                </form>

            </div>
        </div>
    );
}

export default Login;