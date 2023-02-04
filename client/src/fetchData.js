import axios from 'axios'
import React from 'react'
const URL="https://api.openweathermap.org/data/2.5/weather"
const API_KEY="e5f06f182e580fa11611dd107cac8137"
export const fetchData = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}
