import nowWeather from "@/lib/nowWeather";

const Weather = () => {
    const weather = nowWeather()
    console.log("どう？？？？？",weather)
    return (
        <div className="p-3 mr-5 h-12 w-12 order-5">
            <p>{weather}</p>
        </div>
    )
}

export default Weather