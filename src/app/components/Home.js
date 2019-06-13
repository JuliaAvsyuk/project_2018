import React from "react";



export class Home extends React.Component{
    render(){
        return(
            <div>
                <div class="header">
                    <div class="navbar-header">
                        <div class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                            <a class="navbar-brand" href="#">ITProgressive</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav1" aria-controls="nav1" aria-expanded="false" aria-label="Navigation"><span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="nav1">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item"><a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Galery</a></li>
                                <li class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" id="navdropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About us</a>
                                    <div class="dropdown-menu" aria-labelledby="navdropdown1">
                                        <a href="#" class="dropdown-item">Contacts</a>
                                        <a href="#" class="dropdown-item">Feedback</a>
                                        <a href="#" class="dropdown-item">Our partners</a>

                                    </div>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="Sign In.js">Log In</a>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <div class="body">
            <div class="jumbotron">
                <div class="container">
                    <h1>Hello world</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis minus ratione iure id nisi laborum architecto sit quibusdam commodi, quidem itaque ea ad in, doloremque voluptatem nesciunt labore ipsa cumque dignissimos minima. Modi illo nobis ducimus reiciendis ipsum itaque voluptatum error hic ex, fuga, dolore ad fugiat laboriosam. Optio, ipsum?</p>
                    <hr class="my-4" />
                        <p>Использются служебные классы для типографики и расстояния содержимого в контейнере большего размера.</p>
                        <p class="lead">
                            <a class="btn btn-primary btn-md" href="#" role="button">Узнать больше &raquo;</a>
                        </p>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h2>Paragraph 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis minus ratione iure id nisi laborum architecto sit quibusdam commodi, quidem itaque ea ad in, doloremque voluptatem nesciunt labore ipsa cumque dignissimos minima. Modi illo nobis ducimus reiciendis ipsum itaque voluptatum error hic ex, fuga, dolore ad fugiat laboriosam. Optio, ipsum?</p>
                        <a class="btn btn-secondary btn-md" href="#" role="button">Узнать больше &raquo;</a>
                    </div>
                    <div class="col-md-4">
                        <h2>Paragraph 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis minus ratione iure id nisi laborum architecto sit quibusdam commodi, quidem itaque ea ad in, doloremque voluptatem nesciunt labore ipsa cumque dignissimos minima. Modi illo nobis ducimus reiciendis ipsum itaque voluptatum error hic ex, fuga, dolore ad fugiat laboriosam. Optio, ipsum?</p>
                        <a class="btn btn-secondary btn-md" href="#" role="button">Узнать больше &raquo;</a>
                    </div>
                    <div class="col-md-4">
                        <h2>Paragraph 3</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis minus ratione iure id nisi laborum architecto sit quibusdam commodi, quidem itaque ea ad in, doloremque voluptatem nesciunt labore ipsa cumque dignissimos minima. Modi illo nobis ducimus reiciendis ipsum itaque voluptatum error hic ex, fuga, dolore ad fugiat laboriosam. Optio, ipsum?</p>
                        <a class="btn btn-secondary btn-md" href="#" role="button">Узнать больше &raquo;</a>
                    </div>
                </div>
            </div>
            <br/>
            <div class="jumbotron">
                <div class="container">
                    <div class="row">
                         <div class="col-md-12">
                             <p className="text">
                                 <li>Разработчик программного обеспечения, программист (Software Developer, Computer Programmer) — разрабатывает приложения для выполнения различных задач на компьютерах и других устройствах.</li>
                                 <li>Исследователь в области вычислительной техники и информатики (Computer and Information Research Scientist) — придумывает новые технологии для решения сложных проблем в различных областях, таких как медицина, образование или бизнес.</li>
                                 <li>Системный аналитик (Computer System Analyst) — анализирует бизнес-требования к создаваемому программному продукту и предлагает наилучшие пути их воплощения.</li>
                                 <li>Сетевой архитектор (Computer Network Architect) — специализируется на создании корпоративных сетей для предприятий и организаций.</li>
                                 <li>Веб-разработчик (Web Developer) — разрабатывает веб-сайты для предприятий и организаций.</li>
                                 <li>Администратор баз данных (Database Administrator) — занимается организацией и хранением данных, а также их защитой от несанкционированного доступа.</li>
                                 <li>Системный администратор (Network and Computer System Administrator) — занимается установкой и поддержкой компьютерных систем для различных организаций и учреждений (школы, больницы, банки).</li>
                                 <li>Графический дизайнер (Graphic Designer) — создает компьютерную графику.</li>
                                 <li>Тестировщик ПО (Software Tester, Quality Assurance Person или QA) — тестирует программное обеспечение.</li>
                                 <li>Технический писатель (Technical Writer) — создает документацию к программному продукту.</li>
                                 <li>Специалист техподдержки (Computer Support Specialist) — помогает пользователям решать проблемы с компьютером.</li>
                             </p>
                     </div>
                </div>
            </div>
                </div>
            <hr />
                <div class="footer">
                    <p>&copy; All rights protected 2019</p>
                </div>
        </div>
            </div>
        );
    }
}

