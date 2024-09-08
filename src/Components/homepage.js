import "./homepage.css";
import {Image} from "@chakra-ui/react";
import { ArrowForwardIcon,AddIcon,EmailIcon ,PhoneIcon} from '@chakra-ui/icons';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function HomePage() {
        const profsectionRef = useRef(null);
        const projsectionRef = useRef(null);
        const contsectionRef = useRef(null);

        const navigate = useNavigate();
        
        const goToFusionX = () => {
                navigate('/fusionx');
            };
        const goToGetPass = () => {
            navigate('/getpass');
        };
        const goToTemplate = () => {
            navigate('/template');
        };
        const goToMealKit = () => {
            navigate('/mealkit');
        };
        const goToCiTi = () => {
            navigate('/citi');
        };

      
        const scrollToProfileSection = () => {
          profsectionRef.current.scrollIntoView({ behavior: 'smooth'});
        };
        const scrollToProjSection = () => {
            projsectionRef.current.scrollIntoView({ behavior: 'smooth'});
          };
        const scrollToContactSection = () => {
            contsectionRef.current.scrollIntoView({ behavior: 'smooth'});
          };


    return(
        
    <div className="screen">       
         <div className="rectangle">
            <div className="name">Dreama Paul</div>
            <div className="navbar ">
                <button onClick={scrollToProfileSection}>Profile Overview</button>
                <button onClick={scrollToProjSection}>Projects</button>
                <button  onClick={scrollToContactSection}>Contact</button>
            </div>
         </div>

        <div className="body">
            <div className="heading">
                <div className="line1">I'm <br/> Dreama Paul</div>
                <div className="line2">Full Stack Developer based in India.</div>
                <div className="des">Fond of designing dynamic Web Applications and transforming<br/>innovative designs into seamless, interactive<br/>user experiences.</div>
                <button className="btn" onClick={scrollToProfileSection} >Discover my work <ArrowForwardIcon/></button>
                <button className="btn1" onClick={scrollToProfileSection} >Explore <ArrowForwardIcon/></button>
            </div>
            <Image className="home" src={`${process.env.PUBLIC_URL}/homepage.svg`} />
        </div>

        <div className="body2">
            <div className="profile" ref={profsectionRef}>
                <div className="po">Profile Overview</div>
                <div className="as">and Skillset</div>
            </div>
            <div className="col">
                <div className="rows">
                    <div className="box">
                        <Image  className="Ellipse" src={`${process.env.PUBLIC_URL}/Ellipse 17.svg`}/>
                        <Image  className="logo" src="/web-design.svg"/>
                        <div className="text">Web<br/>Design</div>
                        <div className="text-flex">
                            <div>Proficient in creating user-</div>
                            <div className="text-flex-1">
                                <div>friendly designs with</div>
                                <div className="box-text">Figma.</div>
                            </div>
                        </div>
                    </div>

                    <div className="box1">
                        <Image  className="Ellipse" src="/Ellipse 17.svg"/>
                        <Image  className="logo" src="/front-end.svg"/>
                        <div className="text1">Front-End<br/>Development</div>
                        <div className="text-flex">
                                <div>Skilled in building<br/>responsive web pages with</div>
                                <div className="text-flex-1">
                                    <div className="box-text-2">HTML, CSS, JavaScript</div>
                                    <div>and</div>
                                </div>
                                <div>and interactive UIs using</div>
                                <div className="box-text-3">React.js.</div>
                        </div>
                    </div>

                    <div className="box1">
                        <Image  className="Ellipse" src="/Ellipse 17.svg"/>
                        <Image  className="logo" src="/back-end.svg"/>
                        <div className="text">Back-End<br/>Development</div>
                        <div className="text-flex">
                            <div>Experienced in developing<br/>server-side applications </div>
                            <div className="text-flex-1">
                                <div>with</div>
                                <div className="box-text-1">Node.js</div>
                                <div>and managing</div>
                            </div>
                            <div className="text-flex-1">
                                <div>databases with</div>
                                <div className="box-text-1">SQL</div>
                                <div>and</div>
                            </div>
                            <div className="box-text-3">MongoDB.</div>
                        </div>
                    </div>
                </div>

                <div className="rows">
                    <div className="box">
                        <Image  className="Ellipse" src="/Ellipse 17.svg"/>
                        <Image  className="logo" src="/other-language.svg"/>
                        <div className="text">Programing<br/>Languages</div>
                        <div className="text-flex">
                            <div className="text-flex-1">
                                <div>Skilled in</div>
                                <div className="box-text-1">C/C++</div>
                                <div> for system</div>
                            </div>
                            <div className="text-flex-1">
                                <div>programming,</div>
                                <div className="box-text-1">Java</div>
                                <div>for OOP,</div>
                            </div>
                            <div className="text-flex-1">
                                <div>and</div>
                                <div className="box-text-1">Python</div>
                                <div>for scripting and</div>
                            </div>
                            <div>development.</div>
                        </div>
                    </div>
                    <div className="box1">
                        <Image  className="Ellipse" src="/Ellipse 17.svg"/>
                        <Image  className="logo" src="/cooking-baking.svg"/>
                        <div className="text">Cooking and<br/>Baking</div>
                        <div className="text-flex">I love experimenting in the<br/>kitchen, creating delicious<br/>meals and baked treats that<br/>bring joy to others.</div>
                    </div>
                    <div className="box1">
                        <Image  className="Ellipse" src="/Ellipse 17.svg"/>
                        <Image  className="logo" src="/singing.svg"/>
                        <div className="text">Sing and<br/>Unwind</div>
                        <div className="text-flex">Singing is my way of<br/>expressing creativity,<br/>whether it's belting out<br/>tunes for fun or performing<br/>in front of an audience.</div>
                    </div>
                </div> 

                <div className="rows-1">
                    <div className="box">
                        <Image  className="Ellipse" src="/Ellipse 17.svg"/>
                        <Image  className="logo" src="/web-design.svg"/>
                        <div className="text">Web<br/>Design</div>
                        <div className="text-flex">
                            <div>Proficient in creating user-</div>
                            <div className="text-flex-1">
                                <div>friendly designs with</div>
                                <div className="box-text">Figma.</div>
                            </div>
                        </div>
                    </div>

                    <div className="box1">
                        <Image  className="Ellipse" src="/Ellipse 17.svg"/>
                        <Image  className="logo" src="/front-end.svg"/>
                        <div className="text1">Front-End<br/>Development</div>
                        <div className="text-flex">
                                <div>Skilled in building<br/>responsive web pages with</div>
                                <div className="text-flex-1">
                                    <div className="box-text-2">HTML, CSS, JavaScript</div>
                                    <div>and</div>
                                </div>
                                <div>and interactive UIs using</div>
                                <div className="box-text-3">React.js.</div>
                        </div>
                    </div>
                </div>

                <div className="rows-1">
                    <div className="box">
                        <Image  className="Ellipse" src="/Ellipse 17.svg"/>
                        <Image  className="logo" src="/back-end.svg"/>
                        <div className="text">Back-End<br/>Development</div>
                        <div className="text-flex">
                            <div>Experienced in developing<br/>server-side applications </div>
                            <div className="text-flex-1">
                                <div>with</div>
                                <div className="box-text-1">Node.js</div>
                                <div>and managing</div>
                            </div>
                            <div className="text-flex-1">
                                <div>databases with</div>
                                <div className="box-text-1">SQL</div>
                                <div>and</div>
                            </div>
                            <div className="box-text-3">MongoDB.</div>
                        </div>
                    </div>

                    <div className="box1">
                        <Image  className="Ellipse" src="/Ellipse 17.svg"/>
                        <Image  className="logo" src="/other-language.svg"/>
                        <div className="text">Programing<br/>Languages</div>
                        <div className="text-flex">
                            <div className="text-flex-1">
                                <div>Skilled in</div>
                                <div className="box-text-1">C/C++</div>
                                <div> for system</div>
                            </div>
                            <div className="text-flex-1">
                                <div>programming,</div>
                                <div className="box-text-1">Java</div>
                                <div>for OOP,</div>
                            </div>
                            <div className="text-flex-1">
                                <div>and</div>
                                <div className="box-text-1">Python</div>
                                <div>for scripting and</div>
                            </div>
                            <div>development.</div>
                        </div>
                    </div>
                </div>

                <div className="rows-1">    
                    <div className="box">
                        <Image  className="Ellipse" src="/Ellipse 17.svg"/>
                        <Image  className="logo" src="/cooking-baking.svg"/>
                        <div className="text">Cooking and<br/>Baking</div>
                        <div className="text-flex">I love experimenting in the<br/>kitchen, creating delicious<br/>meals and baked treats that<br/>bring joy to others.</div>
                    </div>
                    <div className="box1">
                        <Image  className="Ellipse" src="/Ellipse 17.svg"/>
                        <Image  className="logo" src="/singing.svg"/>
                        <div className="text">Sing and<br/>Unwind</div>
                        <div className="text-flex">Singing is my way of<br/>expressing creativity,<br/>whether it's belting out<br/>tunes for fun or performing<br/>in front of an audience.</div>
                    </div>
                </div> 

            </div>
        </div>
        

        <div className="body3" ref={projsectionRef}>
            <div className="profile">
                <div className="po">See My</div>
                <div className="as">Work</div>
            </div>
            <div className="sub-profile">
                <div className="po">Web Development</div>
                <div className="as">Projects</div>
            </div>
            <div className="outline-rows">
                <div className="outline">
                    <Image className="img" src="/Getpass.svg"/>
                    <div className="outline-text">
                        <div className="box-text-3">GetPass</div>
                        <div>- An Automated Bus Pass Purchasing System</div>
                    </div>
                    <button className="outline-btn" onClick={goToGetPass}>See More <AddIcon w={2}/></button>
                </div>
                <div className="outline">
                    <Image className="img" src="/fusionX.svg"/>
                    <div className="outline-text">
                        <div className="box-text-3">FusionX</div>
                        <div>- An E-commerce Website Builder</div>
                    </div>
                    <button className="outline-btn" onClick={goToFusionX}>See More <AddIcon w={2}/></button>
                </div>
            </div>
            <div className="outline">
                    <Image className="img" src="/fusionx-template.svg"/>
                    <div className="outline-text">
                        <div className="box-text-3">FusionX-Template</div>
                        <div>- Template for the website built</div>
                    </div>
                        <div className="outline-text2">using FusionX</div>
                    <button className="outline-btn" onClick={goToTemplate}>See More <AddIcon w={2}/></button>
            </div>

            <div className="sub-profile">
                <div className="po">UI/UX</div>
                <div className="as">Projects</div>
            </div>
            <div className="outline">
                    <Image className="img" src="/thatindianmealkit.svg"/>
                    <div className="outline-text">
                        <div className="box-text-3">ThatIndianMealKit</div>
                        <div>- An Online Meal Kit Delivery System</div>
                    </div>
                    <button className="outline-btn" onClick={goToMealKit}>See More <AddIcon w={2}/></button>
            </div>

            <div className="sub-profile">
                <div className="po">Front-End</div>
                <div className="as">Projects</div>
            </div>
            <div className="outline">
                    <Image className="img" src="/Citi.svg"/>
                    <div className="outline-text">
                        <div className="box-text-3">CiTi</div>
                        <div>-  An Online Film Ticket Purchasing System</div>
                    </div>
                    <button className="outline-btn" onClick={goToCiTi}>See More <AddIcon w={2}/></button>
            </div>
        </div>
        <div className="footer" ref={contsectionRef}>
            <div className="footertext">Connect With Me</div>
            <div className="footer1">
                <div className="icon"><EmailIcon w={5} h={5} color={'#F56565'} /></div>
                <div className="email1">dreamapaulv@gmail.com</div>
                <Image className="icon2" src="/Github.svg"/>
                <a href="https://github.com/dreamapaul" target="_blank" rel="noopener noreferrer" className="email1">Dreama Paul</a>
            </div>
            <div className="footer1">
                <div className="icon4"><PhoneIcon w={5} h={5} color={'#F56565'} /></div>
                <div className="email2">9048690760</div>
                <Image className="icon3" src="/linkedin.svg"/>
                <a href="https://linkedin.com/in/dreama-paul-a329a2229" target="_blank" rel="noopener noreferrer" className="email2">Dreama Paul</a>
            </div>
        </div>
    </div>
    );
}
export default HomePage;