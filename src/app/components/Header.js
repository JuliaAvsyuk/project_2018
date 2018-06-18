import React from "react";
import { NavLink } from "react-router-dom";

export class Header extends React.Component{
    render(){
        return(
            <div>
                <ul className="nav nav-bar-nav">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/signIn">Sign In</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                </ul>
            </div>
        );
    }
}