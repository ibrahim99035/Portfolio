"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/Me/bio.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl text-highlight">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg text-highlight">
              Enthusiastic backend virtuoso with a passion for crafting seamless digital experiences. 
              Eager to bring my dynamic skills in Django and Node.js to a collaborative team, 
              leveraging proficiency in Jira, Git, and GitHub. Seeking a role where innovation meets elegant solutions, 
              allowing me to code beyond boundaries and contribute to the next wave of transformative technology. 
              Armed with the arcane knowledge of a B.A. in Computer Science with a specialization in Information Technology.
            </p>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-highlight"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Python
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Django
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Flask
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Nginx
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Java
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                C++
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Agile
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Jira
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                UML
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-background text-highlight hover:bg-highlight hover:text-background">
                Problem Solving
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-highlight"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-background p-3 font-semibold rounded-b-lg rounded-s-lg text-highlight">
                    Git & GitHub Instructor
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-highlight">
                    I had designed simple crach course for git and github in GDSC.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-highlight">
                    2020 - 2021
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-background text-sm font-semibold w-fit text-highlight">
                    GDSC Tanta
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-background rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-background bg-black -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-background rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-background bg-black -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-background p-3 font-semibold rounded-b-lg rounded-s-lg text-highlight">
                    Frontend Trainee
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-highlight">
                    I Gained the Professional Frontend Web Development Nanodegree from Udacity with FWD program in 2 months.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text- text-sm font-semibold text-highlight">
                    2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-background text-sm font-semibold w-fit text-highlight">
                    FWD - Udacity
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-background p-3 font-semibold rounded-b-lg rounded-s-lg text-highlight">
                    React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-highlight">
                   I had built a landing page for a real estate company in sudia aribia.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-highlight">
                    2023 - 2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-background text-sm font-semibold w-fit text-highlight">
                    Freelancer - Diyarah
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-background rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-background bg-black -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/4 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
