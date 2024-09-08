import "./getpass.css";
import React, { useRef, useEffect } from 'react';
import {Image} from "@chakra-ui/react";
import { ArrowForwardIcon,ArrowBackIcon} from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function CiTi(){
    const carouselRef = useRef(null);
    const navigate = useNavigate();

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
        
        const goToHome = () => {
                navigate('/');
            };
      

    return(
        <div className="screen-4">
            <button className="back-btn" onClick={goToHome}>Back</button>
            <div className="line"></div>
            <div className="heading-2">
                <div className="po">CiTi-</div>
                <div className="as">an Automated Film Ticket Purchasing System</div>
            </div>
            <div className="pictures">
                <button onClick={scrollLeft} className="scroll-button-l"><ArrowBackIcon/></button>
                <div className="image-row" ref={carouselRef}>
                    <Image src={`${process.env.PUBLIC_URL}/CiTi/home.png`} className="carousel-image" />
                    <Image src={`${process.env.PUBLIC_URL}/CiTi/login.png`} className="carousel-image" />
                    <Image src={`${process.env.PUBLIC_URL}/CiTi/purchase.png`} className="carousel-image" />
                    <Image src={`${process.env.PUBLIC_URL}/CiTi/tickets.png`} className="carousel-image" />
                </div>
                <button onClick={scrollRight} className="scroll-button-r"><ArrowForwardIcon/></button>
            </div>
            <div className="project-box-2">
                <div className="project-text">CiTi allows customers to easily buy tickets online, streamlining the entire purchasing process. It offers a quick and convenient way to secure tickets without the need for in-person transactions. With CiTi, customers can manage their ticket purchases from anywhere, at any time.</div>
                <div className="tech">Technologies Used</div> 
                <div className="project-text-1">
                    <div className="text-flex-1">
                        <div>CiTi uses </div>
                        <div className="box-text-1">React.js</div>
                        <div>for dynamic user interfaces and</div>
                        <div className="box-text-1">CSS</div>
                        <div>for styling.</div>
                    </div>
                </div>
                
                <div className="tech-3">GitHub Page</div> 
                <div className="project-text-1">
                    <div className="text-flex-1">
                        <div className="box-text-2">Front End :</div>
                        <a href="https://github.com/dreamapaul/GetPass-UI.git" target="_blank" rel="noopener noreferrer">https://github.com/dreamapaul/GetPass-UI.git</a>
                    </div>
                </div>           
            </div>
            <div className="project-box-2m">
                <div className="project-text-m">CiTi allows customers to easily buy tickets online, streamlining the entire purchasing process. It offers a quick and convenient way to secure tickets without the need for in-person transactions. With CiTi, customers can manage their ticket purchases from anywhere, at any time.</div>
                <div className="tech-s">Technologies Used</div> 
                <div className="project-text-1m">
                    <div className="text-flex-1">
                        <div>CiTi uses </div>
                        <div className="box-text-1">React.js</div>
                        <div>for dynamic user interfaces and</div>
                        <div className="box-text-1">CSS</div>
                        <div>for styling.</div>
                    </div>
                </div>                
                <div className="tech-3">GitHub Page</div> 
                <div className="project-text-1m">
                    <div className="text-flex-1">
                        <div className="box-text-2">Front End :</div>
                        <a href="https://github.com/dreamapaul/GetPass-UI.git" target="_blank" rel="noopener noreferrer">https://github.com/dreamapaul/GetPass-UI.git</a>
                    </div>
                </div>           
            </div>

            <div className="project-box-2s">
                <div className="project-text-s">CiTi allows customers to easily buy tickets online, streamlining the entire purchasing process. It offers a quick and convenient way to secure tickets without the need for in-person transactions. With CiTi, customers can manage their ticket purchases from anywhere, at any time.</div>
                <div className="tech-s">Technologies Used</div> 
                <div className="project-text-1s">
                    <div className="text-flex-1">  
                    <div>CiTi uses </div>
                        <div className="box-text-1">React.js</div>
                        <div>for dynamic user interfaces and</div>
                        <div className="box-text-1">CSS</div>
                    </div>
                    <div>for styling.</div>
                </div>                
                <div className="tech-3">GitHub Page</div> 
                <div className="project-text-1s-git">
                    <div className="text-flex-1">
                        <div className="box-text-2">Front End :</div>
                        <a href="https://github.com/dreamapaul/GetPass-UI.git" target="_blank" rel="noopener noreferrer">https://github.com/dreamapaul/GetPass-UI.git</a>
                    </div>
                </div>           
            </div>
        </div>
    )
}

export default CiTi;