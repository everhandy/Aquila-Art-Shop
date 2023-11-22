//slider component is a gallery carousel created to showcase products.

import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Slider.css";

export const Slider = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
        <div className="slider">
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
            {data.map((item, idx) => {
                return (
                    <div className={slide === idx ? "slide" : "slide slide-hidden"}>
                        <img src={item.src} alt={item.alt} key={idx} />
                        {slide === idx && (
                            <>
                                <p>{item.price}</p>
                                <p>{item.title}</p>
                            </>
                        )}
                    </div>
                );
            })}
            <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
            <span className="indicators">
        {data.map((_, idx) => {
            return (
                <button
                    key={idx}
                    className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                    onClick={() => setSlide(idx)}
                ></button>
            );
        })}
    </span>
        </div>

    );
};