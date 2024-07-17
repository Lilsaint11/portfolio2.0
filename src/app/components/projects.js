"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";


// import required modules
import {  Navigation, Pagination,EffectCoverflow } from 'swiper/modules';
import ProjectCard from './projectCard';

const Projects = () => {
    const projectList = [
        {
          "title": "Geegpay dashboard",
          "image": "./images/geedash.png",
          "stacks": ["Reactjs","tailwindcss","context api"],
          "webLink": "https://geepay-dashboard.vercel.app/",
          "githubLink": "https://github.com/lilsaint11/geegpay"
        },
        {
          "title": "ClearLink landing page",
          "image": "./images/clearlink.png",
          "stacks": ["Nextjs","tailwindcss",],
          "webLink": "https://clearlink-lilsaint11.vercel.app/",
          "githubLink": "https://github.com/lilsaint11/clearlink"
        },
        {
          "title": "Sushi",
          "image": "./images/sushi.png",
          "stacks": ["Nextjs","tailwindcss","typescript(TS)",],
          "webLink": "https://sushi-lilsaint11.vercel.app/",
          "githubLink": "https://github.com/lilsaint11/sushi"
        },
        {
          "title": "Retro",
          "image": "./images/retro.png",
          "stacks": ["Nextjs","tailwind","TS", "context","supabase"],
          "webLink": "https://retro-typescript.vercel.app/",
          "githubLink": "https://github.com/lilsaint11/retro-typescript"
        },
        {
          "title": "bayrite clone",
          "image": "./images/bayrite.png",
          "stacks": ["Nextjs","tailwindcss","supabase","Sanity"],
          "webLink": "https://bayrite.vercel.app/",
          "githubLink": "https://github.com/lilsaint11/bayrite"
        },
        {
          "title": "Getlinked landing page",
          "image": "./images/getlinked-banner.png",
          "stacks": ["Nextjs","tailwindcss","framer"],
          "webLink": "https://getlinked-lilsaint11.vercel.app/",
          "githubLink": "https://github.com/lilsaint11/getlinked"
        },
        {
          "title": "Glovo app clone",
          "image": "./images/glovo-banner.png",
          "stacks": ["Nextjs","tailwindcss","supabase","zustand"],
          "webLink": "https://glovo-lilsaint11.vercel.app/",
          "githubLink": "https://github.com/lilsaint11/glovo"
        },
        {
          "title": "CoinBit crypto investment",
          "image": "./images/coinbit.png",
          "stacks": ["Nextjs","tailwindcss","Firebase"],
          "webLink": "https://coinbit.vercel.app/",
          "githubLink": "https://github.com/lilsaint11/coinbit"
        },
        {
          "title": "Connectify social media webapp",
          "image": "./images/connectify.png",
          "stacks": ["Nextjs","tailwindcss","Firebase"],
          "webLink": "https://connectify-iota.vercel.app/",
          "githubLink": "https://github.com/lilsaint11/connectify"
        },
        {
          "title": "omnigpt landing-page ",
          "image": "./images/omnigpt-bg.png",
          "stacks": ["Reactjs","tailwindcss"],
          "webLink": "https://omnigpt-landing-page.vercel.app/",
          "githubLink": "https://github.com/lilsaint11/omnigpt-landing-page"
        },
        {
          "title": "Oppy photography",
          "image": "./images/oppy-bg.png",
          "stacks": ["Reactjs","tailwindcss","sanity"],
          "webLink": "https://oppy-photography.vercel.app/",
          "githubLink": "https://github.com/lilsaint11/oppy-photography"
        },
        {
          "title": "Blog website",
          "image": "./images/blogg-1.png",
          "stacks": ["Reactjs","firebase"],
          "webLink": "https://blog-site-lilsaint11.vercel.app/",
          "githubLink": "https://github.com/lilsaint11/blog-site"
        },
        {
          "title": "Signup/Signin Form",
          "image": "./images/signup-form.png",
          "stacks": ["html","css","PHP","mySQL"],
          "webLink": "",
          "githubLink": "https://github.com/lilsaint11/signup-page"
        },
        {
          "title": "Ecommerce site",
          "image":"./images/ecomm.png",
          "stacks": ["html","css","javascript"],
          "webLink": "https://luxurycollections.netlify.app",
          "githubLink": "https://github.com/lilsaint11/ecommerce-app"
        },
        {
          "title": "Landing Page",
          "image": "./images/landingpage.png",
          "stacks": ["html","css","javascript"],
          "webLink": "https://Gadgets-hub.netlify.app",
          "githubLink": "https://github.com/lilsaint11/Landing-page"
        },
        {
          "title": "Tiktaktoe Game",
          "image": "./images/tiktaktoe1.png",
          "stacks": ["html","css","javascript"],
          "webLink": "https://stevetiktaktoev2.netlify.app",
          "githubLink": "https://github.com/lilsaint11/Tik-Tak-Toe"
        },
        
      ]
  
    return ( 
        <div className="py-[600px] max-md:py-[200px] flex justify-center items-center relative projects-section px-48" >
            <div className=" flex flex-col gap-8 items-center justify-center" id="work">
                <h1 className="text-center text-[28px] font-bold logo capitalize">My recent works</h1>
                <Swiper
                    effect={'coverflow'}
                    slidesPerView={3}
                    centeredSlides={true}
                    grabCursor={true}
                    loop={true}
                    coverflowEffect={
                        {
                            rotate:0,
                            stretch:0,
                            depth:100,
                            modifier:2.5,
                        }
                    }
                    keyboard={{
                    enabled: true,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                    }}
                    modules={[ Navigation, Pagination, EffectCoverflow]}
                    className="swiper_container px-5 flex justify-center transform max-[470px]:-translate-x-14  max-[470px]:w-[600px]"
                >
                    {projectList.map(pj => (
                        <SwiperSlide>
                            <ProjectCard name={pj.title} image={pj.image} stacks={pj.stacks} webLink={pj.webLink} githubLink={pj.githubLink} />
                        </SwiperSlide>
                    ))}
                    
                    <div className="slider-controler bg-red-800 max-sm:hidden">
                        <div className="swiper-button-prev slider-arrow">
                            <FaArrowLeft  className='text-white'/>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <FaArrowRight className='text-white'/>          
                        </div>
                      
                    </div>
                </Swiper>
            </div>
        </div>
     );
}
 
export default Projects;