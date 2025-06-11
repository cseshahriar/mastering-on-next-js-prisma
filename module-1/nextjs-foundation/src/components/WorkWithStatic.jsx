import React from 'react'
import Image from "next/image";


const WorkWithStatic = () => {
  return (
    <div>
        <img src={"assets/shahriar.jpeg"} alt="img" width="200px" />
      <Image src="/assets/shahriar.jpeg" alt="img" width={200}
        height={200} />
    </div>
  )
}

export default WorkWithStatic


