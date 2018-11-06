import React from "react";
import { Header } from "./Header";
import { Forms }  from "./Forms";

export class Root extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="navbar-fixed-top navbar navbar-inverse">
                        <div className="navbar-header">
                            <Header />
                        </div>
                    </div>
                    <div className="navbar">
                        <div className="navbar-header">
                            {this.props.children}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

