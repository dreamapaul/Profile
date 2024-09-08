import "./mealkit.css";
import React, { useRef, useEffect } from 'react';
import {Image} from "@chakra-ui/react";
import { ArrowForwardIcon,ArrowBackIcon} from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function MealKit(){
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
                <div className="po">ThatIndianMealKit -</div>
                <div className="as">Meal Kit Purchasing System</div>
            </div>
            <div className="pictures">
                <button onClick={scrollLeft} className="scroll-button-l"><ArrowBackIcon/></button>
                <div className="image-row" ref={carouselRef}>
                    <Image src="/ThatIndianMealKit/home.png" className="carousel-image" />
                    <Image src="/ThatIndianMealKit/signup.png" className="carousel-image" />
                    <Image src="/ThatIndianMealKit/login.png" className="carousel-image" />
                    <Image src="/ThatIndianMealKit/userhome.png" className="carousel-image" />
                </div>
                <button onClick={scrollRight} className="scroll-button-r"><ArrowForwardIcon/></button>
            </div>
            <div className="project-box-2">
                <div className="project-text">ThatIndianMealKit features a sleek, user-friendly interface that allows customers to effortlessly browse and purchase meal kits online. The design emphasizes vibrant visuals of Indian cuisine and a streamlined checkout process to enhance the user experience.</div>
                <div className="tech">Technologies Used</div> 
                <div className="project-text-1">
                    <div className="text-flex-1">
                        <div>ThatIndianMealKit was designed using</div>
                        <div className="box-text-1">Figma</div>
                        <div>for a streamlined and user-friendly interface.</div>
                    </div>
                </div>
                
                <div className="tech-3">GitHub Page</div> 
                <div className="project-text-1">
                    <div className="text-flex-1">
                        <div className="box-text-2">Figma Design :</div>
                        <a href="https://www.figma.com/community/file/1413070192198569718/thatindianmealkit" target="_blank" rel="noopener noreferrer">https://www.figma.com/community/file/1413070192198569718/thatindianmealkit</a>
                    </div>
                </div>          
            </div>

            <div className="project-box-2m">
                <div className="project-text-m">ThatIndianMealKit features a sleek, user-friendly interface that allows customers to effortlessly browse and purchase meal kits online. The design emphasizes vibrant visuals of Indian cuisine and a streamlined checkout process to enhance the user experience.</div>
                <div className="tech-s">Technologies Used</div> 
                <div className="project-text-1m">
                    <div className="text-flex-1">
                        <div>ThatIndianMealKit was designed using</div>
                        <div className="box-text-1">Figma</div>
                        <div>for a streamlined</div>
                    </div>
                    <div>and user-friendly interface.</div>
                </div>                
                <div className="tech-3">GitHub Page</div> 
                <div className="project-text-1m">
                    <div className="text-flex-1">
                        <div className="box-text-2">Figma Design :</div>
                        <a href="https://www.figma.com/community/file/1413070192198569718/thatindianmealkit" target="_blank" rel="noopener noreferrer">https://www.figma.com/community/file/</a>
                    </div>
                    <a className="link" href="https://www.figma.com/community/file/1413070192198569718/thatindianmealkit" target="_blank" rel="noopener noreferrer">1413070192198569718/thatindianmealkit</a>
                </div>           
            </div>

            <div className="project-box-2s">
                <div className="project-text-s">ThatIndianMealKit features a sleek, user-friendly interface that allows customers to effortlessly browse and purchase meal kits online. The design emphasizes vibrant visuals of Indian cuisine and a streamlined checkout process to enhance the user experience.</div>
                <div className="tech-s">Technologies Used</div> 
                <div className="project-text-1s">
                    <div className="text-flex-1">  
                        <div>ThatIndianMealKit was designed using</div>
                        <div className="box-text-1">Figma</div>
                        <div>for a</div>
                    </div>
                    <div>streamlined and user-friendly interface.</div>
                </div>                
                <div className="tech-3">GitHub Page</div> 
                <div className="project-text-1s-git">
                    <div className="text-flex-1">
                        <div className="box-text-2">Figma Design :</div>
                        <a href="https://www.figma.com/community/file/1413070192198569718/thatindianmealkit" target="_blank" rel="noopener noreferrer">https://www.figma.com/community/file/</a>
                    </div>
                    <a className="link" href="https://www.figma.com/community/file/1413070192198569718/thatindianmealkit" target="_blank" rel="noopener noreferrer">1413070192198569718/thatindianmealkit</a>
                </div>           
            </div>
        </div>
    )
}

export default MealKit;