
import React, { useRef, useEffect } from 'react';
import {Image} from "@chakra-ui/react";
import { ArrowForwardIcon,ArrowBackIcon} from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function Template(){
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
        <div className="screen-3">
            <button className="back-btn" onClick={goToHome}>Back</button>
            <div className="line"></div>
            <div className="heading-2">
                <div className="po">Template For FusionX -</div>
                <div className="as">a E-commerce Website</div>
            </div>
            <div className="pictures">
                <button onClick={scrollLeft} className="scroll-button-l"><ArrowBackIcon/></button>
                <div className="image-row" ref={carouselRef}>
                    <Image src="/Template/home.svg" className="carousel-image" />
                    <Image src="/Template/signup.svg" className="carousel-image" />
                    <Image src="/Template/login.svg" className="carousel-image" />
                    <Image src="/Template/product.svg" className="carousel-image" />
                    <Image src="/Template/cart.svg" className="carousel-image" />
                    <Image src="/Template/contact.svg" className="carousel-image" />
                    <Image src="/Template/productsummary.svg" className="carousel-image" />
                </div>
                <button onClick={scrollRight} className="scroll-button-r"><ArrowForwardIcon/></button>
            </div>
            <div className="project-box-1">
                <div className="project-text">FusionX is an E-commerce website builder designed for small businesses, startups, and individuals with no technical background. The platform enables users to effortlessly create professional websites and provides a personalized, shareable link for hosting the final product</div>
                <div className="tech">Technologies Used</div> 
                <div className="project-text-1">
                    <div className="text-flex-1">
                        <div>Template uses </div>
                        <div className="box-text-1">React.js</div>
                        <div>for dynamic user interfaces and</div>
                        <div className="box-text-1">CSS</div>
                        <div>for styling.</div>
                        <div className="box-text-1">Node.js</div>
                        <div>powers the back-end for server-</div>
                    </div>
                    <div className="text-flex-1">
                        <div>side operations and API management.</div>
                        <div className="box-text-1">MongoDB</div>
                        <div>provides scalable data storage.</div>
                    </div>
                </div>
                
                <div className="tech-1">GitHub Page</div> 
                <div className="project-text-1">
                    <div className="text-flex-1">
                        <div className="box-text-2">Front End :</div>
                        <a href="https://github.com/gouri-ramesh/template-fusionx.git" target="_blank" rel="noopener noreferrer">https://github.com/gouri-ramesh/template-fusionx.git</a>
                    </div>
                    <div className="text-flex-1">
                        <div className="box-text-2">Back End :</div>
                        <a href="https://github.com/dreamapaul/FusionX-API.git" target="_blank" rel="noopener noreferrer">https://github.com/dreamapaul/FusionX-API.git</a>
                    </div>
                </div>           
            </div>

            <div className="project-box-1m">
                <div className="project-text-m">FusionX is an E-commerce website builder designed for small businesses, startups, and individuals with no technical background. The platform enables users to effortlessly create professional websites and provides a personalized, shareable link for hosting the final product</div>
                <div className="tech-s">Technologies Used</div> 
                <div className="project-text-1m">
                    <div className="text-flex-1">
                        <div>Template uses</div>
                        <div className="box-text-1">React.js</div>
                        <div>for dynamic user interfaces and</div>
                        <div className="box-text-1">CSS</div>
                        <div>for</div>
                    </div>
                    <div className="text-flex-1">
                        <div>styling.</div>
                        <div className="box-text-1">Node.js</div>
                        <div>powers the back-end for server-side operations</div>
                    </div>
                    <div className="text-flex-1">
                        <div>and API management.</div>
                        <div className="box-text-1">MongoDB</div>
                        <div>provides scalable data storage.</div>
                    </div>
                </div>
                
                <div className="tech-s">GitHub Page</div> 
                <div className="project-text-1m">
                    <div className="text-flex-1">
                        <div className="box-text-2">Front End :</div>
                        <a href="https://github.com/gouri-ramesh/template-fusionx.git" target="_blank" rel="noopener noreferrer">https://github.com/gouri-ramesh/template-fusionx.git</a>
                    </div>
                    <div className="text-flex-1">
                        <div className="box-text-2">Back End :</div>
                        <a href="https://github.com/dreamapaul/FusionX-API.git" target="_blank" rel="noopener noreferrer">https://github.com/dreamapaul/FusionX-API.git</a>
                    </div>
                </div>           
            </div>

            <div className="project-box-s">
                <div className="project-text-s">FusionX is an E-commerce website builder designed for small businesses, startups, and individuals with no technical background. The platform enables users to effortlessly create professional websites and provides a personalized, shareable link for hosting the final product</div>
                <div className="tech-s">Technologies Used</div> 
                <div className="project-text-1s">
                    <div className="text-flex-1">
                        <div>Template uses </div>
                        <div className="box-text-1">React.js</div>
                        <div>for dynamic user interfaces and</div>
                    </div>
                    <div className="text-flex-1">
                        <div className="box-text-2">CSS</div>
                        <div>for styling.</div>
                        <div className="box-text-1">Node.js</div>
                        <div>powers the back-end for server</div>
                    </div>
                    
                    <div className="text-flex-1">
                        <div>side operations and API management.</div>
                        <div className="box-text-2">MongoDB</div>
                        <div>provides</div>
                    </div>
                    <div>scalable data storage.</div>
                </div>
                
                <div className="tech-s">GitHub Page</div> 
                <div className="project-text-1s-git">
                    <div className="text-flex-1">
                        <div className="box-text-2">Front End :</div>
                        <a href="https://github.com/gouri-ramesh/template-fusionx.git" target="_blank" rel="noopener noreferrer">https://github.com/gouri-ramesh/template-fusionx.git</a>
                    </div>
                    <div className="text-flex-1">
                        <div className="box-text-2">Back End :</div>
                        <a href="https://github.com/dreamapaul/FusionX-API.git" target="_blank" rel="noopener noreferrer">https://github.com/dreamapaul/FusionX-API.git</a>
                    </div>
                </div>           
            </div>
        </div>
    )
}

export default Template;

