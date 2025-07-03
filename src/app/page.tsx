import Image from "next/image";
// import Navbar from "./component/Navbar";
export default function Home() {
  return (
    <main>
      {/* <Navbar/> */}
      <h1 className="">heeloo home</h1>
      <Image src="/logo.jpg" alt="logo" width={200} height={200} />
    </main>
  );
}
