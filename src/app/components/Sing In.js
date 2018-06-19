import React from "react";
import { Forms } from "./Forms";

export class SingIn extends React.Component{

    render(){
        return(
            <div className="navbar navbar-inverse">
                <div className="navbar-header">
                    <Forms />
                </div>
            </div>
        );
    }
}