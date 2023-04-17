import { useState, useEffect } from 'react';
import getWeather from "@/lib/getWeather";

const  nowWeather = () => {
    const [locate, setLocate] = useState(null);
    const [weater, setWeater] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            pos => setLocate({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            }),
            err => console.log(err)
        );
    }, []);

    useEffect(() => {
        if (locate) {
            getWeather(locate.latitude, locate.longitude, setWeater)
        }
    }, [locate])

    useEffect(() => {
        if (locate) {
        console.log("とれた",weater)
        }
    }, [weater])

    return weater
}

export default nowWeather