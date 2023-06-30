import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>

            <div>
                <Swiper className="skills__container container"
                grabCursor={true}
                spaceBetween={25}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                breakpoints={{
                    276: {
                        slidesPerView: 3,
                    },
                    376: {
                        slidesPerView: 4,
                    },
                    676: {
                        slidesPerView: 6,
                        spaceBetween: 38,
                    },
                }}
                modules={[Autoplay, Pagination]}
            >
                {Data.map(({ id, image }) => {
                    return (
                        <SwiperSlide className="skill__card" key={id}>
                            <img src={image} alt="" className="skill__img" />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </div>
        </section>
    )
}

export default Skills