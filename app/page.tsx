"use client"
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [text] = useTypewriter({
    words: [
      "UI/UX Designer",
      "Web Developer",
      "Mobile Developer",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 2000,

  });
  return (

    
    <main className="w-screen h-screen relative">
      <div
        className=" flex items-center w-full h-full bg-cover bg-gradient-to-r from-black to-cyan-900"
      
      >
        <div className="flex flex-col justify-between items-center text-center md:pl-32 xl:pl-60">
          <h1 className= "text-2xl xl:text-4xl text-white font-semibold ">
            Make anything possible with
            <span className="text-3xl xl:text-5xl text-transparent bg-clip- text-yellow-500">
              {" "}
              Web Development
            </span>
          </h1> 
          <p className="text-white text-4xl xl:text-6xl font-semibold pt-10 ">
            Hi I&apos;m Noman Anwar 
          </p>
          <p className="text-yellow-500 text-3xl xl:text-5xl md:text-4xl font-semibold  md:pb-16 pt-10 ">
            {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
          </p>
          <div className="flex flex-col md:flex-row md:flex gap-2 md:gap-8 pt-20 md:pb-20">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-yellow-500 hover:bg-yellow-300  px-5 py-3 text-lg text-black max-w-[200px]  "
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border hover:scale-110 scale-100 border-yellow-500 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border hover:scale-110 scale-100 border-yellow-500 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={1800}
        width={1800}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
