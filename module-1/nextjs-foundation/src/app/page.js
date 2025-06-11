import Image from "next/image";

export default function Home() {
  return (
    <>
      {/** serving static file from public dir */}
      <img src={"assets/shahriar.jpeg"} alt="img" width="200px" />
      <Image src="/assets/shahriar.jpeg" alt="img" width={200}
        height={200} />

    </>
  );
}
