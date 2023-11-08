import React from "react";
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import Promise from "./promise";
import BetterEarth from "./betterEarth";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import BetterEarthContent from "./betterEarthContent";
const PromiseBetter = () => {
    return (
        <>
            <section className="guilt-promise-better">
                <div className="guilt-promise-better--header-background">
                    <div className="left">Promise</div>
                    <div className="right">The</div>

                </div>
                <Container>
                    <div className="guilt-promise-better--wrapper">
                        <div className="guilt-promise-better--header">
                            <Image
                                src="/images/home/Image22.png"
                                width={242}
                                height={136}
                                alt=""
                            />
                            <h2>The Promise</h2>
                        </div>
                        < Promise />
                        <BetterEarth />
                    </div>
                </Container>
            </section>
        </>
    );
};

export default PromiseBetter;