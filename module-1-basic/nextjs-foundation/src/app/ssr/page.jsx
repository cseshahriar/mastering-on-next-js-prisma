import React from 'react';

async function getData() {
    let data = await fetch("https://dummyjson.com/products")
    let json = await data.json()
    return json['products']
}

const page = async() => {
    const data = await getData();

    return (
        <div>
            {
                data.map((item, index) => {
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