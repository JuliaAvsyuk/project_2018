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