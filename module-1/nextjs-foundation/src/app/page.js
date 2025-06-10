import Image from "next/image";

export default function Home() {
  return (
    <>
      Home page
      {/** serving static file from public dir */}
      <img src={"assets/shahriar.jpeg"} alt="img" />
      <Image src="/assets/shahriar.jpeg" alt="img" width={500}
        height={300} />

    </>
  );
}
