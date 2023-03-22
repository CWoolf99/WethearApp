import React from "react";

export default function AnimatedBackground ( { animation } ) {
    return (
        <>
            <img src={`./assets/${animation}.png`} alt="animation_icon" className={`${animation}1`} />
            <img src={`./assets/${animation}.png`} alt="animation_icon" className={`${animation}2`} />
            <img src={`./assets/${animation}.png`} alt="animation_icon" className={`${animation}3`} />
        </>
    )
}