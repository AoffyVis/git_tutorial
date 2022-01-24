import { useState, useEffect } from "react";
import * as axios from 'axios'

const useResources = (resourceName) => {
    const [ resources, setResources ] = useState([]);

    const fetchResource = async (resourceName) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
        setResources(res.data )
    }

    useEffect(() => {
        fetchResource(resourceName)
    }, [resourceName])

    return resources;
}

export default useResources;