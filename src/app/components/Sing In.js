import React from "react";
import { Forms } from "./Forms";

export class SingIn extends React.Component{
    constructor(props){
        super();
        this.state={
            homeLink: "Hellooooo"
        };
    }


    onSendForm0(){
        if(this.homeLink.length<6){
            alert ("Недопустимая длина строки");
            document.form0.reset();
            event.preventDefault();
        } else
            alert ("Отправка разрешена");
    }
    render(){
        return(
            <div className="navbar navbar-inverse">
                <div className="navbar-header">
                    <Forms
                        homeLink={this.state.homeLink}
                         />
                </div>
            </div>
        );
    }
}