import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import article1 from "../../public/images/articles/Wipro-Javaa.webp";
import article2 from "../../public/images/articles/IBMM.jpg";
import article3 from "../../public/images/articles/eduskills.png";
import article4 from "../../public/images/articles/ssc.jpg";
import article5 from "../../public/images/articles/ebox.png";
import article6 from "../../public/images/articles/code.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";


const FramerImage = motion(Image);


const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className= "relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
rounded-br-3xl 
' />
            <Link href={link} target="_blank"
                className='w-full inline-block  cursor-pointer overflow-hidden rounded-lg '
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"              
                />
            </Link>

            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline xs:text-lg'>{title}</h2></Link>
            <p className='text-sm mb-2'>{summary}</p>

            <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
        
    )
}

const articles = () => {
    return (
        <>

            <Head>
                <title> Naveen Kumar | Feats Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className="pt-16">
                    <AnimatedText text="Transforming ideas into digital realities!" className='mb-16 
                    lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                        <FeaturedArticle
                            title="Competitive Programming Essentials: My E-box Journey!"
                            summary="Completed extensive training in coding with a focus on algorithms and data structures, solving 450+ problems in competitive programming. Equipped to tackle complex challenges with innovative solutions."
                            time="JAN 2023 - PRESENT"
                            link="https://drive.google.com/file/d/1Fb_gv7MtZeC7OXDhlWpSmzWNybIYbPbX/view"
                            img={article6}
                        />

                        <FeaturedArticle
                            title="Essentials of C Programming & Java at Amphisoft!"
                            summary="Completed a comprehensive course in C programming & Java, developing strong foundational skills in coding and problem-solving. Prepared to tackle programming challenges with confidence and clarity."
                            time="FEB 2024"
                            link="https://drive.google.com/file/d/1DpOnRjGUPcqw9MKTwM4lvpEea1U93YNS/view"
                            img={article5}
                        />

                        <FeaturedArticle

                            title="Wipro-certified in Java Full Stack Development!"
                            summary="Completed an intensive program in Java Full Stack Development, mastering end-to-end application skills. Equipped with industry-ready expertise, I’m prepared to build scalable and efficient full-stack solutions."
                            time="OCT-2024"
                            link="https://cert.diceid.com/cid/789fapPuok"
                            img={article1}

                        />

                        <FeaturedArticle

                            title="IBM CEP-certified in Data Visualization!"
                            summary="Completed an in-depth course with the IBM Career Education Program, gaining skills in visualizing complex data effectively. This certification, powered by IBM's Developer Skills Network, reflects my expertise in turning data into actionable insights."
                            time="OCT-2024"
                            link="https://courses.ibmcep.cognitiveclass.ai/certificates/6e2c8ad37f1d4834b430812d1a761f5b"
                            img={article2}

                        />

                        <FeaturedArticle
                            title="Cyber Security Virtual Internship at Eduskills!"
                            summary="Completed an intensive program in cybersecurity, mastering skills to identify and mitigate threats. Equipped with practical expertise, I’m ready to implement robust security measures and protect digital environments."
                            time="NOV-2023"
                            link="https://drive.google.com/file/d/1Av0Eq4WOU_oRmeTmS6Dbl0ceksWQc5aj/view"
                            img={article3}
                        />


                        <FeaturedArticle
                            title="Intelligent Automation Virtual Internship at Eduskills!"
                            summary="Completed a 10-week program in intelligent automation, mastering end-to-end automation skills. Equipped with practical expertise, I’m ready to design innovative automated solutions and enhance operational efficiency."
                            time="MAR-2024"
                            link="https://drive.google.com/file/d/1_ybTDrqimy2rZUZ8e-U8Ro1KFROnzWmw/view"
                            img={article4}
                        />




                    </ul>
                </Layout>
            </main>

        </>
    )
}

export default articles
