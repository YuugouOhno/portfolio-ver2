import React, { useRef, useState } from "react";
import Image from "next/legacy/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Slide = () => {
    const slides = ["/projects/1.png", "/projects/2.png", "/projects/3.png", "/projects/4.png", "/projects/5.png", "/projects/6.png", "/projects/7.png", "/projects/8.png"]
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="h-full w-full text-center flex flex-col justify-center items-center"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="text-center flex justify-center items-center">
                        <div className="w-full h-full dark:bg-black bg-white text-center flex justify-center items-center">
                            <Image
                                src={slide} 
                                className="transition-all rounded-md p-auto"
                                alt="project image"
                                width="736"
                                height="414"
                                layout="fixed"
                            />
                        </div>
                    </SwiperSlide>
                ))}
                <div class="swiper-scrollbar"></div>
            </Swiper>
        </>
    );
}

export default Slide