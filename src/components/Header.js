import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
    let [btnName,setBtnName]=useState("login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li>cart</li>
                    <button className="login"onClick={ ()=> { 
                            btnName==="login"
                            ?setBtnName("logout")
                            :setBtnName("login"); 
                        }
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;