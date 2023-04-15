import { useState,useEffect } from "react"

const getGeolocation = () => {
    const [locate, setLocate] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            pos => setLocate({ 
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            }),
            err => console.log(err)
        );
    }, []);
    console.log(locate)
    return locate
}

export default getGeolocation