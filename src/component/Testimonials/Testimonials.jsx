import React, { useState } from "react";
import './Testimonials.css';
import {testimonialsData} from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = ()=>{

    const [selected, setSelected]= useState(0);
    const tLength = testimonialsData.length;

    return(
        <div className="testimonials">
            <div className="left-t">
                <span>Reviews</span>
                <span className="stroke-text">What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{color: "orange"}}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <img src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img 
                        onClick={() =>{
                            setSelected(selected === 0 ? tLength - 1 : selected - 1);
                        }}
                    src={leftArrow} alt="" />
                    <img 
                        onClick={() =>{
                            setSelected(selected === tLength - 1 ? 0 : selected + 1);
                        }}
                    src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;