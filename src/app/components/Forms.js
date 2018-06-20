import React from "react";
import { render } from "react-dom";



export class Forms extends React.Component {
    constructor(props){
        super(props);
        let login = props.login;
        let loginIsValid = this.validateLogin(login);
        let password = props.password;
        let passwordIsValid = this.validatePassword(password);
        this.state = {
            login: login,
            password: password,
            loginValid: loginIsValid,
            passwordValid: passwordIsValid
        };
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validateLogin(login){
        return login.length>6;
    }

    validatePassword(password){
        return password.length>4;
    }

    onLoginChange(e){
        let val = e.target.value;
        let valid = this.validateLogin(val);
        this.setState({
            login: val,
            loginValid: valid
        });
    }


    onPasswordChange(e){
        let val = e.target.value;
        let valid = this.validatePassword(val);
        this.setState({
            password: val,
            passwordValid: valid
        });
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.passwordValid === true && this.state.loginValid === true){
        alert("Login: " + this.state.login + " Password " + this.state.password);
        } else{
            this.setState({
                login: "",
                password: ""
            });
            alert("DON'T WORK. Try again");
        }
    }



    render(){
        let loginColor = this.state.loginValid ===true?"green":"red";
        let passwordColor = this.state.passwordValid ===true?"green":"red";
        return(
            <form onSubmit={this.onSubmit}>
                <h2 className="text-center" id="log">Вход в личный кабинет</h2>
                <input type="text" id="in1" value={this.state.login} onChange={this.onLoginChange} style={{borderColor: loginColor}} placeholder="Enter username" required />
                <input type="text" id="in2" value={this.state.password} onChange={this.onPasswordChange} style={{borderColor: passwordColor}} placeholder="Enter password" required />
                <button className="btn btn-primary" type="submit"><i className="fa fa-paper-plane"></i> Sign In</button>
                <p><em><a className="links" href="#" target="_blank">Forgot your username or password?</a></em></p>
            </form>
        );
    }
}
