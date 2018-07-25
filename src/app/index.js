import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Portfolio } from './components/Portfolio';
import { Home } from './components/Home';
import { SingIn } from './components/Sing In';
import { Contacts } from './components/Contacts';
import { Root } from './components/Root';
import { Forms } from './components/Forms';

class App extends React.Component {
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Root>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/portfolio" component={Portfolio} />
                                <Route path="/signIn" component={SingIn} />
                                <Route path="/contacts" component={Contacts} />
                                <Route path="/home" component={Home} />
                            </Switch>
                        </Root>
                    </div>
                </Router>
            </div>
        );
    }
}
render(<App />,
    document.getElementById("app"));

