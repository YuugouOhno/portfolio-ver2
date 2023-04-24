import { useState, useEffect } from 'react';
import getWeather from "@/lib/getWeather";
import getGeolocation from "@/lib/getGeolocation";

const NowWeather = () => {
    const [locate, setLocate] = useState(null);
    const [weather, setWeathere] = useState(null);

    useEffect(() => {
        getGeolocation(setLocate)
    }, []);

    useEffect(() => {
        if (locate) {
            getWeather(locate.latitude, locate.longitude, setWeathere)
        }
    }, [locate])

    return (
        <div className="p-3 h-12 w-20 order-5">
            {weather}
        </div>
    )
}

export default NowWeather