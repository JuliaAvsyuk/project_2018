import React from "react";
import { Header } from "./Header";

export class Root extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                        <div className="navbar-header">
                            <Header />
                        </div>
                </nav>
                <nav className="navbar">
                        <div className="navbar-header">
                            {this.props.children}
                        </div>
                </nav>
            </div>
        );
    }
}

