import React from "react";
// import PropTypes from 'prop-types';
export class Home extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
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
