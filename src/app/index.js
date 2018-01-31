import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio';
import { Contacts } from './components/Contacts';


class App extends React.Component{

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-3">
                        <Home />
                    </div>
                    <div className="col-xs-3">
                        <Header />
                    </div>
                    <div className="col-xs-3">
                        <Portfolio />
                    </div>
                    <div className="col-xs-3">
                        <Contacts />
                    </div>
                </div>
            </div>
        );
    }
}

render(
   <App/>,
    document.getElementById("app")
);
