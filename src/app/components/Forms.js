import React from "react";
import { render } from "react-dom";



export class Forms extends React.Component {

    render(){
        return(
            <div>
                <p>{this.props.homeLink}</p>
                <h2 className="text-center" id="log">Вход в личный кабинет</h2>
                        <input type="text" name="input0" placeholder="Enter username" required />
                        <input type="text" name="input0.1" placeholder="Enter password" required />
                        <button  onClick={this.props.greet} className="btn btn-primary" name="btn0" type="submit"><i className="fa fa-paper-plane"></i> Sign In</button>
                        <p><em><a className="links" href="#" target="_blank">Forgot your username or password?</a></em></p>
            </div>
        );
    }
}
