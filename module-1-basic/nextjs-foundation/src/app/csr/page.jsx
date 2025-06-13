'use client';
import React, {useState, useEffect} from 'react';

const page = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => { // iif
            let response = await fetch("https://dummyjson.com/products")
            let json = await response.json()
            setData(json['products'])
        })()
    }, [])

    return (
        <div>
            {
                data?.map((item, index) => {
                    return (
                        <div key={index} className='py-4 px-4'>
                            <h1>{item['title']}</h1>
                            <p>{item['price']}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default page;