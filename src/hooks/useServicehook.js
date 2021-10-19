import { useState } from "react";
import { useEffect } from "react";
// creating custom hooks and custom parameter
const useServicehook = () => {
    // declare state
    const [services, setServices] = useState([]);
    // loading fake data 
    useEffect(() => {
        fetch('./islamihealth.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    // return parameter value conditionally
    return [services];
}
export default useServicehook;