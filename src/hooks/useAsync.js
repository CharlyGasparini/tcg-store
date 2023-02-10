import { useState, useEffect } from "react";


export const useAsync = (asyncFunc, dependencies = []) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    if(!Array.isArray(dependencies)){
        console.error("useAsync.js: 'dependencies' Is not an array");
        dependencies = [];
    }

    useEffect(() => {

        setLoading(true);
        
        asyncFunc()
        .then(data => {
            setData(data);
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })

    }, dependencies) //eslint-disable-line

    return {data,error,loading}
}
