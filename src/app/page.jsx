"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image 
            src="/Me/bio.jpg" 
            alt="Ibrahim Abu Eita Image" 
            width={320} height={320} 
            className="object-contain rounded-lg mb-px-40 overflow-hidden" 
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center lg:mt-0 mt-10">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold text-highlight">
            Building Dreams, One Line of Code at a Time!
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-highlight">
            I am Ibrahim Abu Eita, a dedicated software engineer, Welcome to my software world, 
            where possibilities unfold with every click. 
            Join me on a journey of discovery and creation as we delve into the realm of technology, 
            shaping tomorrow one line of code at a time.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-highlight bg-background text-highlight">
              <Link href="/portfolio">View My Work</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-highlight text-highlight">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
