import React, { useState, useContext, createContext} from 'react'

export const CsatContext = createContext();

export function useCsatContext(){
    return useContext(CsatContext);
}

export function CsatProvider(props) {
    const [avgCsat, setAvgCsat] = useState(0);
    const [csatDataPoints, setCsatDataPoints] = useState({});

    const value = {
        avgCsat,
        setAvgCsat,
        csatDataPoints,
        setCsatDataPoints
    }

    return(
        <CsatContext.Provider value={value}>
            {props.children}
        </CsatContext.Provider>
    )

}