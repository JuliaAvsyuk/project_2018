import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { Contacts } from './components/Contacts';

class App extends React.Component {
    constructor(){
        super();
        this.state={
            homeLink: "Home",
            homeMounted: true
        };
    }

    onGreet(){
        alert("Hello everybody!!");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted(){
        this.setState({
           homeMounted: !this.state.homeMounted
        });
    }
    render(){
        let homeCmp = "";
        if (this.state.homeMounted){
            homeCmp =  (
                <Home  name={"Max"}
                       initialAge={27}
                       greet={this.onGreet}
                       changeLink={this.onChangeLinkName.bind(this)}
                       initialLinkName={this.state.homeLink}
                />
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink} />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(un)mount home component</button>
                    </div>
                </div>
            </div>
        );
    }
}
render(<App />,
    document.getElementById("app"));


//form0 login
function sendForm0(e){
    let keyBox = document.form0.input0;
    let val = keyBox.value;
    if(val.length<10){
        alert ("Недопустимая длина строки");
        document.form0.reset();
        e.preventDefault();
    } else
        alert ("Отправка разрешена");
}
let sendButton0 = document.form0.btn0;
sendButton0.addEventListener("click", sendForm0);

//form1 comments
function sendForm(e){
    let keyBox = document.form1.input1;
    let val = keyBox.value;
    if(val.length<6){
        alert ("Недопустимая длина строки");
        document.form1.reset();
        e.preventDefault();
    } else 
        alert ("Отправка разрешена");
}
let sendButton = document.form1.btn1;
sendButton.addEventListener("click", sendForm);


//borderColor input1
let keyBox = document.form1.input1;
//обработка потери фокуса
function onblur(e) {
    //получаем его значение и образаем все пробелы
    let text = keyBox.value.trim();
    if(text ==="")
        keyBox.style.borderColor = "red";
    else
        keyBox.style.borderColor = "green";
}

//получение фокуса
function onfocus() {
    //установка цвета границ поля
    keyBox.style.borderColor = "blue";
}
keyBox.addEventListener("blur", onblur);
keyBox.addEventListener("focus", onfocus);

//borderColor input2
let keyBox1 = document.form2.input2;
//получение фокуса
function onfocus1() {
    //установка цвета границ поля
    keyBox1.style.borderColor = "blue";
}
keyBox1.addEventListener("focus", onfocus1);

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