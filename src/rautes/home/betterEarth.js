import React from "react";
import BetterEarthContent from "./betterEarthContent";
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from "next/image";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const BetterEarth = () => {

    const BetterEarth = [
        {
            subTitle: 'We Promise',
            title: 'Better',
            changetitle: 'Earth',
            paragraph: `Thanks to The Green Meat, you have a healthier and guilt-free alternative that also creates an impactful difference to the environment by reducing a significant amount of Green House Gas Emissions.`
        },
        {
            subTitle: 'We Promise',
            title: 'Better',
            changetitle: 'World',
            paragraph: `Thanks to The Green Meat, you have a healthier and guilt-free alternative that also creates an impactful difference to the environment by reducing a significant amount of Green House Gas Emissions.`
        },
        {
            subTitle: 'We Promise',
            title: 'Better',
            changetitle: 'Earth',
            paragraph: `Thanks to The Green Meat, you have a healthier and guilt-free alternative that also creates an impactful difference to the environment by reducing a significant amount of Green House Gas Emissions.`
        }
    ]
    return (
        <>
            <div className="guilt-better-earth">
                <div className="guilt-better-earth--wrapper">
                    <div className="guilt-better-earth--slider">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            // modules={[Pagination]}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {BetterEarth.map((data =>
                                <SwiperSlide>
                                    <BetterEarthContent
                                        subTitle={data.subTitle}
                                        title={data.title}
                                        changetitle={data.changetitle}
                                        paragraph={data.paragraph}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="guilt-better-earth--image">
                        <Image
                            src="/images/home/Group82.png"
                            width={815}
                            height={1028}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BetterEarth;