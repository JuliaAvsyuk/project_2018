import React from "react";
export class Header extends React.Component{
    
    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
