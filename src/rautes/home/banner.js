import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const MainBanner = () => {
    const bannerImage = [
        {
            id: 'b1',
            image: "/images/home/MaskGroup1.png"
        },
        {
            id: 'b1',
            image: "/images/home/MaskGroup2.png"
        },
        {
            id: 'b1',
            image: "/images/home/MaskGroup3.png"
        },
        {
            id: 'b1',
            image: "/images/home/MaskGroup4.png"
        }
    ]
    return (
        <section className="guilt-banner">
            <Container>
                <div className="guilt-banner--content-wrapper">
                    <div className="guilt-banner--content">
                        <h1>Guilt-free <br></br><span>meat</span> for those who care</h1>
                        <button className="guilt-free-button guilt-free--green">ABOUT US</button>
                    </div>
                    <div className="guilt-banner--slider">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                type: 'fraction',
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="guilt-banner--mySwiper"
                        >
                            {bannerImage.map((data =>
                                <SwiperSlide>
                                    <div className="guilt-banner--banner-img">
                                        <Image
                                            id={data.id}
                                            src={data.image}
                                            width={680}
                                            height={680}
                                            alt=""
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="guilt-banner--badge">
                                <Image
                                    src="/images/home/Group907.png"
                                    width={680}
                                    height={680}
                                    alt=""
                                />
                            </div>
                        </Swiper>
                    </div>
                </div>
                <div id="guilt-banner-animated-button">
                    <a
                    >
                        <span className="video-button down-button">
                            <img
                                className="play-btn down-button-icon"
                                src="/images/home/Group648.png"
                                alt="play"
                            />
                        </span>
                    </a>
                </div>
            </Container>

        </section>
    );
};

export default MainBanner;