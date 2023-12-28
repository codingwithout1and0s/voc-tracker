import { useEffect, useState } from 'react'
import { request } from '../axios_helper'

export default class AuthContent {
    const [data, setData];
    useEffect(() => {
        request("GET", /messages, {})
            .then((response) => {
                setData(response.data)
            })
        );

    }, []);

    return (
        <div>
            {data && data.map((line) => {
                <p>{line}</p>
            })}
        </div>
    );

}