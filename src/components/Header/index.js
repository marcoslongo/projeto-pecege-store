import React from "react";
import "./Header.scss"
import { Link } from "react-router-dom";
 
function Header (){
    return(
        <header>
            <div className="container">
                <div className="row">
                    <Link to="/">
                        <img src="https://pecege.com/wp-content/themes/pecege/assets/images/logo.svg"/>
                    </Link>
                    <Link className="favorites" to="/favoritos">Favoritos</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;