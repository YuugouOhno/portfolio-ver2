import { useState } from "react"

const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY

const getWeather = async (latitude, longitude, setNowWeater) => {
    const weatherPromise = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => data.weather[0].main)
        .catch(error => console.error(error));
    return weatherPromise.then(result => {
        console.log("これこれ",result)
        setNowWeater(result);
    });
}


export default getWeather