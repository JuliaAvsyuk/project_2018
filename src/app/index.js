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

//rating
let rating = document.querySelector('.rating'),
    ratingItem = document.querySelectorAll('.rating-item');

rating.onclick = function(e){
    let target = e.target;
    if(target.classList.contains('rating-item')){
        removeClass(ratingItem,'current-active');
        target.classList.add('active','current-active');
    }
};

rating.onmouseover = function(e) {
    let target = e.target;
    if(target.classList.contains('rating-item')){
        removeClass(ratingItem,'active');
        target.classList.add('active');
        mouseOverActiveClass(ratingItem)
    }
};
rating.onmouseout = function(){
    addClass(ratingItem,'active');
    mouseOutActiveClass(ratingItem);
};

function removeClass(arr) {
    for(let i = 0, iLen = arr.length; i <iLen; i ++) {
        for(let j = 1; j < arguments.length; j ++) {
            ratingItem[i].classList.remove(arguments[j]);
        }
    }
}
function addClass(arr) {
    for(let i = 0, iLen = arr.length; i <iLen; i ++) {
        for(let j = 1; j < arguments.length; j ++) {
            ratingItem[i].classList.add(arguments[j]);
        }
    }
}

function mouseOverActiveClass(arr){
    for(let i = 0, iLen = arr.length; i < iLen; i++) {
        if(arr[i].classList.contains('active')){
            break;
        }else {
            arr[i].classList.add('active');
        }
    }
}

function mouseOutActiveClass(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].classList.contains('current-active')) {
            break;
        } else {
            arr[i].classList.remove('active');
        }
    }
}