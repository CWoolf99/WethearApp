import React from "react";

export default function WeatherDetail ( { min , max , windSpeed , sunrise , sunset , weatherFeel , backColor , letterColor } ) {
    return(
        <>
            <div className="animate__animated animate__fadeInDown" style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                width:"75%",
                border:"2px solid",
                borderRadius:"25px",
                backgroundColor:backColor
            }}>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-around",
                    width:"100%"
                }}>
                    <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"100%",
                    borderRight:"2px solid"
                    }}>
                        <img src="./assets/baja-temperatura.png" alt="caliente iconos" height="30px"></img>
                        <h5 style={{color:letterColor}}>Min Temp:{Math.round(min)}°C</h5>
                    </div>
                    <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"100%"
                    }}>
                        <img src="./assets/caliente.png" alt="caliente iconos" height="30px"></img>
                        <h5 style={{color:letterColor}}>Max Temp:{Math.round(max)}°C</h5>
                    </div>
                </div>
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    borderTop:"2px solid",
                    width:"100%",
                    alignItems:"center",
                    flexDirection:"row"
                    }}>
                    <img src="./assets/ventoso.png" alt="caliente iconos" height="30px"></img>
                    <h5 style={{textAlign:"center",color:letterColor}}>Wind Speed:{windSpeed}</h5>
                </div>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-around",
                    width:"100%",
                    borderTop:"2px solid"
                }}>
                    <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"100%",
                    borderRight:"2px solid"
                    }}>
                        <img src="./assets/sunrise.png" alt="caliente iconos" height="30px"></img>
                        <h5 style={{color:letterColor}}>Sunrise:{sunrise} UTC</h5>
                    </div>
                    <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"100%"
                    }}>
                        <img src="./assets/sunset.png" alt="caliente iconos" height="30px"></img>
                        <h5 style={{color:letterColor}}>Sunset:{sunset} UTC</h5>
                    </div>
                </div>
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    borderTop:"2px solid",
                    width:"100%",
                    alignItems:"center"}}>
                    <img src="./assets/thermal.png" alt="caliente iconos" height="30px"></img>
                    <h5 style={{textAlign:"center",color:letterColor}}>Weather sensation:{Math.round(weatherFeel)}°C</h5>
                </div>
            </div>
        </>
    );
}