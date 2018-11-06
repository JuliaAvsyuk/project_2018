import React from "react";


export class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="home">
                        <div className="main_page">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1 className="text-center"><em>Web Design Studio</em></h1>
                                </div>
                                <blockquote>
                                    <p><em>«Build your own dreams, or someone else will hire you to build theirs».</em></p>
                                    <footer><cite>Farrah Gray</cite></footer>
                                </blockquote>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="well">
                                            <button className="btn btn-block btn-info"><i class="fa fa-vk fa-2x"></i> VK</button>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="well">
                                            <button className="btn btn-block btn-info" ><i class="fa fa-twitter fa-2x"></i> TW</button>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="well">
                                            <button className="btn btn-block btn-info" ><i class="fa fa-youtube fa-2x"></i> YouTube</button>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="well">
                                            <button className="btn btn-block btn-info" ><i class="fa fa-facebook fa-2x"></i> FB</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="about">
                    <div className="container-fluid">
                        <h2 className="text-center"><em>About us</em></h2>
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <div className="well">
                                    <img className="foto" src="assets/images/we/we.jpg" />
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <ul className="well">
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
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="examples">
                    <div className="container-fluid">
                        <h2 className="text-center"><em>Examples</em></h2>
                        <div className="row">
                            <div className="col-xs-4">
                                <div className="well">
                                    <img className="foto" src="../assets/images/projects/1_proj.png" />
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div className="well">
                                    <img className="foto" src="../assets/images/projects/2_proj.jpg" />
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div className="well">
                                    <img className="foto" src="../assets/images/projects/3_proj.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts">
                    <div className="container-fluid">
                        <h2 className="text-center"><em>Contacts: </em></h2>
                        <p>+375 17 600 60 60</p>
                        <p>+375 17 550 50 50</p>
                        <p>Address: Minsk, 60 years of Victory, 60-60</p>
                    </div>
                </div>
                <footer className="footer" align="right">
                    <div>
                    <hr />
                        <p><em>Written and coded by <a class="footer" href="https://www.freecodecamp.com" target="_blank">Julia Avsyuk</a></em></p>
                    </div>
                </footer>
            </div>
        );
    }
}

