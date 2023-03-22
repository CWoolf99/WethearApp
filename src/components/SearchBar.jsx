import React, { useState , useEffect } from "react";
import WeatherMain from "./WeatherMain";
import WeatherDetail from "./WeatherDetail";
import AnimatedBackground from "./AnimatedBackgound";

export default function SearchBar () {
    const [cityId,setCityId] = useState("");
    const [response,setResponse]= useState({});
    const [img,setImg] = useState("https://openweathermap.org/img/wn/01d@2x.png");
    const [style,setStyle] = useState({main:"lightblue",detail:"#3C84AB",letter:"black",letterDetail:"white",animation:"birds"})

    function getTime(timeUnix) {
        return new Date(timeUnix * 1000).toLocaleTimeString('default',{timeZone:"UTC", hour: '2-digit', minute:'2-digit'});
    }
    
    useEffect(() => {
        fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=1c2d557bef96332f7bc63894250aee01&units=metric`)
        .then((res)=> res.json())
        .then((data)=> setResponse(data))
    },[cityId])

    useEffect(() => {
        if (response?.weather){
            setImg(`https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`)
            if (response.weather[0].icon.includes("d")){
                if (response.clouds?.all>50){
                    //Si está nublado
                    setStyle({main:"#73777B",detail:"#D8D8D8",letter:"white",letterDetail:"black",animation:"clouds"})
                } else {
                    //Si está despejado
                    setStyle({main:"lightblue",detail:"#3C84AB",letter:"black",letterDetail:"white",animation:"birds"})
                }
            } else {
                //Si es de noche
                setStyle({main:"#182747",detail:"#2D4263",letter:"white",letterDetail:"white",animation:"stars"})
            }
        }
    }, [response])

    return(
    <>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:`${style.main}`,width:"100%",minHeight:"100vh"}}>
            <form style={{marginTop:"20px"}}>
                <input style={{backgroundColor:"transparent",
                border:"2px solid",
                color:"white",
                borderRadius:"25px",
                height:"30px",
                width:"150px",
                textAlign:"center"}} type="text" id="search_field" className="form-control" placeholder="Enter City Name" onChange={(e) => setCityId(e.target.value)}/>
            </form>
            <AnimatedBackground
            animation={style.animation}/>
            <WeatherMain 
            temp={response.main?.temp || response?.cod}
            cityName={response?.name || response?.message}
            country={response.sys?.country || "Write an existing City name"}
            lon={response.coord?.lon || 0}
            lat={response.coord?.lat || 0}
            img={img}
            letterColor={style.letter}/>
            <WeatherDetail
            min={response.main?.temp_min || 0}
            max={response.main?.temp_max || 0}
            windSpeed={response.wind?.speed || 0}
            sunrise={getTime(response.sys?.sunrise || 0)}
            sunset={getTime(response.sys?.sunset || 0)}
            weatherFeel={response.main?.feels_like || 0}
            backColor={style.detail}
            letterColor={style.letterDetail}/>
        </div>
    </>
    );
}