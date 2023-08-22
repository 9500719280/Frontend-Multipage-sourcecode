import resume from '../images/PRAVEENRAJ M_Jun-18.pdf';
import {  Button} from 'antd';

function Portfoliopage() {
    return(
        <>
        <div className="last1">

            <h3 className="s4">PORTFOLIO</h3><br/> 
            <div className="row1">
                PRAVEENRAJ
            </div>
            <div className="row2">
                <div>
                    <img src="A56902.jpg" width="100%" alt="1"/>
                </div>
                <div className="row3" >
                    <div className="hi">Hi Guys!</div>
                    <p> 
                        Motivation is something that cannot be understood with
                        words but with practice. It means to be moved by something so
                        strongly that it becomes an inspiration for you. Furthermore, 
                        it is a discipline that helps you to achieve your
                        life goals and also helps to be successful in life.
                        Motivation is something that cannot be understood with
                        words but with practice. It means to be moved by something so
                        strongly that it becomes an inspiration for you. Furthermore, 
                        it is a discipline that helps you to achieve your
                        life goals and also helps to be successful in life.
                    </p>
                    <div className="name">
                        <div className="na">
                            <div>Name</div><br/>
                            <div>Experience</div><br/>
                            <div>Country</div><br/>
                            <div>Location </div><br/>
                            <div>E-mail</div><br/>
                            <div>Phone </div><br/>
                        </div>
                        <div className="praveen">
                            <div>Praveenraj</div><br/>
                            <div>02 Years</div><br/>
                            <div> India</div><br/>
                            <div>Salem </div><br/>
                            <div>Praveenraj9055@gmail.com</div><br/>
                            <div>9500719280</div><br/>
                        </div>
                    </div>
                    <div className="row4">
                        <Button href={resume} download='praveenCV' className="do" shape="round">DOWNLOAD RESUME</Button>
                        <div className='co1'>
                            <Button href='mailto:praveenraj9055@gmail.com' className="co" shape="round">CONTACT ME</Button>                       
                        </div>
                    </div>              
                </div>
            </div>
            <div className="row5">What I do</div><br/><br/>
            <div className="row6">
                <div width="25%" className="b1">
                    <div className="web">WEB DEVELOPMENT</div>
                    <p className="webd">Furthermore, 
                        it is a discipline that helps you to achieve your
                        life goals and also helps to be successful in life.
                    </p>
                </div>
                <div width="25%" className="b1">
                    <div className="tech">TECHNICAL</div>
                    <p>Furthermore,it is a discipline that helps you to achieve your
                    life goals and also helps to be successful in life.
                    </p>
                </div>          
                <div width="25%" className="b1"> 
                    <div className="arc">CRICKET</div>
                    <p>Furthermore, 
                        it is a discipline that helps you to achieve your
                        life goals and also helps to be successful in life.
                    </p>
                </div>
                <div width="25%" className="b1">
                    <div className="fit">ARTICLE</div>
                    <p>Furthermore, 
                        it is a discipline that helps you to achieve your
                        life goals and also helps to be successful in life.
                    </p>
                </div>
            </div>
            <div className="row7">
                <div className="edu">EDUCATION</div>
                <div className="exp">EXPERIENCE</div>
            </div>
            <nav className="nav">
                <div width="100%"  className="it">
                    <div className="msc">
                        <div><strong>B.E(Mech)</strong></div>
                        <div>2020 - 2023</div>
                        <div>Government College Of Engineering </div>
                    </div><br/>
                    <div className="bca">
                        <div><strong>Diploma</strong></div>
                        <div>2015 - 2018</div>
                        <div>Thiagarajar Polytechnic College</div>
                    </div><br/>
                    <div className="ten">
                        <div><strong>10th</strong></div>
                        <div>2014 - 2015 </div>
                        <div>Government boys school</div>
                    </div><br/>
                </div>
                <div className="pro" width="100%">
                    <div className="project">
                        <div><strong>Frontend Project</strong></div>
                        <div>2023</div>
                        <div>Crampete Learning Centre</div>
                    </div><br/>
                    <div className="year">
                        <div><strong> Investigate Explosive Clading</strong></div>
                        <div>2023</div>
                        <div>Final Year Project</div>
                    </div><br/>
                    <div className="des">
                        <div><strong>Waste Separater</strong></div>
                        <div>2017</div>
                        <div>AICTE National Level Project </div>
                    </div>    
                </div>
            </nav><br/><br/>
            <div className="work">Works</div><br/>
            <div className="nav2">
                <div> <img src="01.jpg" alt="1"/></div>
                <div><img src="02.jpg" alt="1"/></div>
                <div> <img src="03.jpg" alt="1"/></div> 
                <div><img src="04.jpg" alt="1"/></div>
                <div><img src="05.jpg" alt="1"/></div>
                <div><img src="06.jpg"alt="1"/></div>
            </div>
            <div className="last">           
                <img src="07.jpg" alt="1"/>
                
            </div>
        </div>    
        </>
    )
}

export default Portfoliopage;