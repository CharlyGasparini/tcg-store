import { useEffect } from "react";

export const useTitle = (title, dependencies) => {

    if(!Array.isArray(dependencies)){
        console.error("useTitle.js: 'dependencies' Is not an array");
        dependencies = [];
    }
    
    useEffect(() => {
        document.title = title;
    }, dependencies) //eslint-disable-line
}