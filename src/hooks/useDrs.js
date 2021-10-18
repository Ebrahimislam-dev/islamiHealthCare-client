import { useEffect, useState } from 'react';

const useDrs = () => {
    // declare state
    const [doctors, setDoctors] = useState([]);
    // loading fake data 
    useEffect(() => {
        fetch('./drdata.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    // return parameter value
    return [doctors];
};

export default useDrs;