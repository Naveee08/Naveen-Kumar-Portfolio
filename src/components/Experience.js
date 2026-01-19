import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";



const Details = ({position, company, companyLink, time, address, work}) => {
const ref = useRef(null);

    return (
         <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark capitalize'
            
            >@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {address}
            </span>

            <p className="font-medium w-full md:text-sm">
                {work}
            </p>
        </motion.div>
    </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress} = useScroll(
        {
            target: ref,
            offset:["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className=' font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
                
                </h2>

                <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>

                    <motion.div 
                    style={{scaleY: scrollYProgress}}
                    
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    " />

                    <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ' >

                        <Details
    position="ServiceNow Analyst"
    company="CubeSimple"
    companyLink="https://cubesimple.com/"
    time="Oct-2025 - Jan-2026"
    address="Chennai, TN"
    work="Worked as a ServiceNow Analyst handling Incident, and Change Management to ensure SLA compliance and service continuity. Performed root cause analysis for production issues and collaborated with backend and frontend developers to track and validate bug fixes. Utilized Postman to test REST APIs and monitored event-driven systems using Apache Kafka. Used enterprise monitoring tools including Alianza, Neustar, BOSS AX, BOSS OM, SMX, and AMS for incident tracking, service monitoring, and operational support."
/>


                       <Details
        position="Full-Stack Developer" company="Procyon Technostructure"
        companyLink="https://procyonts.com/"
        time="Apr-2024 - Oct-2025" address="Chennai, TN"
        work="Developed and optimized RESTful APIs using Java Spring Boot, Postman, and IntelliJ for backend services. Integrated Firebase for authentication and data management. On the frontend, built responsive web applications with React.js and Next.js, implementing API integrations and enhancing overall functionality and user experience."
/>

                        
                        <Details
        position="Technical Mentor - (DSA)" company="FACE Prep"
        companyLink="https://faceprep.edmingle.com/"
        time="Jan-2025 - Mar-2025" address="Coimbatore, TN"
        work="Guided students in mastering data structures and algorithms, focusing on problem-solving strategies and competitive programming. Designed and delivered hands-on coding sessions, implemented optimized solutions, and fostered analytical thinking, enabling learners to excel in technical interviews and coding challenges."
 />

                    </ul>
                </div>
        </div>
    )
}

export default Experience


