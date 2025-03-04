import React, { useEffect, useState } from 'react';
import "./Optimization.css";
import optimization1 from '../../images/optimization1.jpg';
import optimization2 from '../../images/optimization2.jpg';
import optimization3 from '../../images/optimization3.jpg';
import optimization4 from '../../images/optimization4.jpg';
const Optimization = () => {
    const optimization = [
        "Email Marketing",
        "Social Media Optimization",
        "SEO Strategy",
        "Content Marketing",
        "Keyword Research",
    ];
    const imgBox = [
        { id: 1, src: optimization1, alt: "SEO Optimization 1" },
        { id: 2, src: optimization2, alt: "SEO Optimization 2" },
        { id: 3, src: optimization3, alt: "SEO Optimization 3" },
        { id: 4, src: optimization4, alt: "SEO Optimization 4" }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imgBox.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgBox.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imgBox.length - 1 : prevIndex - 1
        );
    };
    return (
        <section className='optimization-section'>
            <div className="optimization-wrapper">
             
                <div className="optimization-left">
                    <div className="optimization-content">
                        <h2>SEO Optimization</h2>
                        <p>
                            We understand your needs and deliver digital marketing through a unique selling proposition. 
                            Our team of experts is passionate about helping your SEO company. 
                            Choose us and experience the difference.
                        </p>
                    </div>
                   
                    <div className="optimization-data">
                        {optimization.map((opt, index) => (
                            <div className="optimization-card" key={index}>
                                <div className="optimization-title">
                                    {opt}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
               
                <div className="optimization-right">
                    <div className="img-container">
                        <img src={imgBox[currentIndex].src} alt={imgBox[currentIndex].alt} className='optimization-img' />
                        <div className="img-counter">{currentIndex + 1}/{imgBox.length}</div>
                        <button className="nav-btn opt-left" onClick={handlePrev}>❮</button>
                        <button className="nav-btn opt-right" onClick={handleNext}>❯</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Optimization;
