import { useState,useEffect } from "react"

const getGeolocation = () => {
    const [locate, setLocate] = useState()
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            pos => setLocate({ 
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            }),
            err => console.log(err)
        );
    }, []);
    return locate
}

export default getGeolocation