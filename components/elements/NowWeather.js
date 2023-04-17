import { useState, useEffect } from 'react';
import getWeather from "@/lib/getWeather";
import getGeolocation from "@/lib/getGeolocation";

const NowWeather = () => {
    const [locate, setLocate] = useState(null);
    const [weather, setWeathere] = useState(null);

    useEffect(() => {
        getGeolocation(setLocate)
        console.log("緯度:",locate.latitude, "経度:",locate.longitude);

    }, []);

    useEffect(() => {
        if (locate) {
            getWeather(locate.latitude, locate.longitude, setWeathere)
            console.log("天気:",weather);
        }
    }, [locate])

    return (
        <div className="p-3 h-12 w-20 order-5">
            {weather}
        </div>
    )
}

export default NowWeather