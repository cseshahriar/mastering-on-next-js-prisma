
async function faceData(url){
    const response = await fetch(url);
    return await response.json();
}

async function getData(){
    try {
        let url1=process.env.BASE_URL + "api/BrandList";
        let url2=process.env.BASE_URL + "api/HeroList";
        let url3=process.env.BASE_URL + "api/StatList";
        const [data1, data2, data3] = await Promise.all([
            faceData(url1),
            faceData(url2),
            faceData(url3),
        ])
        return {demo1:data1, demo2:data2, demo3:data3};
    }catch (e) {
        console.log(e);
        return {demo1:[], demo2:[], demo3:[]};
    }
}

import React from 'react';
import Demo3 from "@/components/demo/demo3";
import Demo2 from "@/components/demo/demo2";
import Demo1 from "@/components/demo/demo1";


const Page = async () => {
    let data=await getData();
    return (
        <div>
            <Demo1 data={data['demo1']}/>
            <Demo2 data={data['demo2']}/>
            <Demo3 data={data['demo3']}/>
        </div>
    );
};

export default Page;