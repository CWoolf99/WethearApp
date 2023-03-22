import React from "react";

export default function WeatherMain ( { temp , cityName , country , lon , lat , img , letterColor} ) {
    return (
        <>
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                justifyItems:"center",
                width:"60%"}}>
                <img className="animate__animated animate__flipInX" style={{
                    height:"100px",
                    width:"100px",
                    display:"block",
                    marginLeft: "auto",
                    marginRight:"auto",
                    }} src={img} alt="Temp Icon" />
                <h2 style={{textAlign:"center", color:letterColor}}>{Math.round(temp)}°C</h2>
                <h2 style={{textAlign:"center", color:letterColor}}>{cityName},{country}</h2>
                <h3 style={{textAlign:"center", color:letterColor}}>Coordinates</h3>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-around",
                    width:"100%"
                }}>
                    <h4 style={{textAlign:"center", color:letterColor}}>Lon:{lon}</h4>
                    <h4 style={{textAlign:"center", color:letterColor}}>Lat:{lat}</h4>
                </div>
            </div>
        </>
    );
}