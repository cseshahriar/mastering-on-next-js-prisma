import React from 'react'
import Image from "next/image";


const WorkWithStatic = () => {
  return (
    <div>
        <img src={"assets/shahriar.jpeg"} alt="img" width="200px" />
        <Image
          src="/assets/shahriar.jpeg"
          alt="img"
          width={200}
          height={200}
          layout='responsive' // fixed
          priority
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORW0kGgo'
         />
    </div>
  )
}

export default WorkWithStatic


