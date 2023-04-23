import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import LinkSlide from "@/components/projectSection/LinkSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Slide = ({path, slides_num, links, demo}) => {
    const slides = Array.from({ length: slides_num }, (_, i) => `${path}${i + 1}.png`);

    return (
        <>
            <Swiper
                loop={true}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="h-full w-full text-center flex flex-col justify-center items-center"
            >
                {slides.length > 1 && slides.map((slide, index) => (
                    <SwiperSlide key={index} className="text-center flex justify-center items-center dark:bg-black bg-white">
                        <div className="lg:m-auto lg:w-4/5 h-full dark:bg-black bg-white text-center flex justify-center items-center">
                            <Image
                                src={slide}
                                className="transition-all rounded-md p-auto"
                                alt="project image"
                                width={16000}
                                height={9000}
                            />
                        </div>
                    </SwiperSlide>
                ))}
                {demo && (<SwiperSlide>demo</SwiperSlide>)}
                {links && (<SwiperSlide><LinkSlide src_path={`${path}bg.png`} links={links}/></SwiperSlide>)}
                <div className="swiper-scrollbar"></div>
            </Swiper>
        </>
    );
}

export default Slide