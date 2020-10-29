import React from "react";
import { Link } from "react-router-dom";
import GoogleOAuth from "../GoogleOAuth/GoogleOAuth";
const Header = (props) => {
    return (
        <header className="ui secondary pointing menu">
            <Link to="/" className="item">
                StreamsTV
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    AllStreams
                </Link>
            </div>
            <GoogleOAuth />
        </header>
    );
};

export default Header;
