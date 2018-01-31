import React from "react";
export class Contacts extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}