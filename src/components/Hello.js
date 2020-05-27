import React, { useEffect } from 'react';

export const Hello = () => {
    useEffect( () => {
        console.log("render");

        return () => {
            console.log("cleanup");
        };
    }, []);

    return <div> Helllo </div>
}