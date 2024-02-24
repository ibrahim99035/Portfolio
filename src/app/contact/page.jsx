"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactPage = () => {
  const text = "Contact Me";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                className="text-highlight"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <div
          className="h-1/2 lg:h-full lg:w-1/2 bg-background rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <Image src="/brand.png" alt="" width={500} height={128} />
          <a 
            href="https://api.whatsapp.com/send?phone=201061468175" 
            target="_blank" 
            className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Chat With Me on Whatsapp
          </a>
          <a 
            href="https://www.linkedin.com/in/ibrahim-abu-eita-0b2490206/" 
            target="_blank" 
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Connect Me on LinkedIn
          </a>
          <a 
            href="mailto:ebrahimaboeita990@gmail.com" 
            target="_blank" 
            className="inline-block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Send Me an Email on Gmail
          </a>
          <Image src="/signature.png" alt="" width={1050} height={1050}/>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
