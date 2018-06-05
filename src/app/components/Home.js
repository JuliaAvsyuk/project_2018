import React from "react";
// import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(){
        super();
        this.state={
            homeLink: "Home"
        };
    }
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">{this.state.homeLink}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

// Home.propTypes = {
//     initialAge: PropTypes.number,
//     name: PropTypes.string,
//     greet: PropTypes.func,
//     initialLinkName: PropTypes.string
// };
