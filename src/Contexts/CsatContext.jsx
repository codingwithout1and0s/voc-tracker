import React, { useState, useContext, createContext} from 'react'

export const CsatContext = createContext();

export function useCsatContext(){
    return useContext(CsatContext);
}

export function CsatProvider(props) {
    const [currCsat, setCurrCsat] = useState(0);
    const [mtdCsat, setMtdCsat] = useState(0);
    const [ytdCsat, setYtdCsat] = useState(0);
    const [csatDataPoints, setCsatDataPoints] = useState([]);
    const [csatObject, setCsatObject] = useState([]);

    const value = {
        currCsat,
        setCurrCsat,
        mtdCsat,
        setMtdCsat,
        ytdCsat,
        setYtdCsat,
        csatDataPoints,
        setCsatDataPoints,
        csatObject,
        setCsatObject
    }

    return(
        <CsatContext.Provider value={value}>
            {props.children}
        </CsatContext.Provider>
    )

}