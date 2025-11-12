import React, { useState, useEffect } from 'react';
import './Banner.css';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function Banner() {
    const images = ['/src/assets/omas-offer.png', '/src/assets/omas-offer2.jpg', '/src/assets/omas-offer3.jpg']; // add pics here
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextImage = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsAnimating(false);
        }, 500); 
    };
    const prevImage = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setIsAnimating(false);
        }, 500); 
    };
    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="carousel">
            <IoIosArrowDropleftCircle className="arrow left-arrow" onClick={prevImage} />
            <div
                className="carousel-track"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${images.length * 100}%`, 
                }}
            >
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} className="carousel-image" />
                ))}
            </div>
            <IoIosArrowDroprightCircle className="arrow right-arrow" onClick={nextImage} />
        </div>
    );
}

export default Banner;