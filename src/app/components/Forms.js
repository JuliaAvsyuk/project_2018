import React from "react";
import { render } from "react-dom";



export class Forms extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: ""
        };
        this.onChange = this.onChange.bind(this);
        this.preSubmit = this.preSubmit.bind(this);
    }

    onChange(e){
        let val = e.target.value;
        this.setState({
            name: val
        });
    }

    preSubmit(e){
        e.preventDefault();
        alert("Login: " + this.state.name);
    }

    render(){
        return(
            <form onSubmit={this.preSubmit}>
                <h2 className="text-center" id="log">Вход в личный кабинет</h2>
                <input type="text" value={this.state.name} onChange={this.onChange} placeholder="Enter username" required />
                <input type="text" placeholder="Enter password" required />
                <button className="btn btn-primary" type="submit"><i className="fa fa-paper-plane"></i> Sign In</button>
                <p><em><a className="links" href="#" target="_blank">Forgot your username or password?</a></em></p>
            </form>
        );
    }
}
