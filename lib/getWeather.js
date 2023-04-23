// const apiKey = process.env.OPEN_WEATHER_API_KEY

const getWeather = async (latitude, longitude, setWeater) => {
    const weatherPromise = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => data.weather[0].main)
        .catch(error => console.error(error));
    return weatherPromise.then(result => {
        setWeater(result);
    });
}

export default getWeather