import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer container">
            <div className="footer_row row">
                <div className="footer_home col-4">
                    <Link to="/">
                        <button className="footer_button"><i className="fa fa-home fa-2x"></i></button>
                    </Link>
                </div>
                <div className="footer_search col-4">
                    <Link to="/search">
                        <button className="footer_button"><i className="fa fa-search fa-2x"></i></button>
                    </Link>

                </div>
                <div className="footer_history col-4">
                    <Link to="/history">
                        <button className="footer_button"><i className="fa fa-history fa-2x"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;