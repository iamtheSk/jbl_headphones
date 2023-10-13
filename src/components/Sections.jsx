import React from 'react'

//icons
import {RiInstagramFill} from 'react-icons/ri'
import {RiFacebookCircleFill} from 'react-icons/ri'
import {RiYoutubeFill} from 'react-icons/ri'
import {RiPlayCircleFill} from 'react-icons/ri'
import {RiInformationFill} from 'react-icons/ri';


// images
import MainHImage from './assets/img/home-img.png'
import MainPriceLine from './assets/img/tooltip-right.svg'
import Aboutimg from './assets/img/about-img.png'
import favorite1 from './assets/img/favorite-1.png'
import favorite2 from './assets/img/favorite-2.png'
import favorite3 from './assets/img/favorite-3.png'
import favorite4 from './assets/img/favorite-4.png'

//swiper for animations
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Sections = () => {
  return (
    <>
            {/* Part 2 <!--================ MAIN ==========================  --> */}
            <main className="main">
            {/* <!-- section 1====================== Home ==================== --> */}
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content">
                        <img src={MainHImage}  className="home__img" />

                        <h1 className="home__title title">
                            <span>J</span>
                            <span>B</span>
                            <span>L</span>
                        </h1>

                        <div className="home__tooltip">
                            <img src={MainPriceLine} alt="" className="home__tooltip-img" />
                            <span className="home__tooltip-text">$150</span>
                        </div>
                    </div>

                        <a href="#" className="home__button button">
                            Buy Now <RiPlayCircleFill className='i'/>
                        </a>

                        <div className="home__social">
                            <span className="home__social-text">Follow us</span>

                            <div className="home__social-links">
                                <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                                    <RiInstagramFill className='i' />
                                </a>

                                <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                                    <RiFacebookCircleFill className='i'/>
                                </a>

                                <a href="https://www.youtube.com/" target="_blank" className="home__social-link">
                                    <RiYoutubeFill className='i' />
                                </a>
                            </div>
                        </div>
                </div>
            </section>


            {/* <!-- Section 2 ====================== About ==================== --> */}
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__data">
                        <h2 className="section__title">
                            MORE ABOUT US
                        </h2>

                        <p className="about__description">
                            Enjoy award-winning JBL sound with
                            wireless listening freedom and a sleek,
                            streamlined design with comfortable
                            cushioned earcups that deliver premium
                            playback for the user.
                        </p>

                        <a href="#" className="button">
                            Know More <RiInformationFill className='i' />
                        </a>
                    </div>
                    <img src={Aboutimg} alt="about image" className="about__img" />
                </div>
            </section>

            
            {/* <!- Section 3- ====================== Favorite ==================== --> */}
            <section className="favorite section" id="favorite">
                <h2 className="section__title">
                    CHOOSE YOUR FAVORITE
                </h2>

                <div className="favorite__container">
                    <Swiper className="favorite__swiper swiper"
                    loop={true}
                    slidesPerView={3}
                    centeredSlides={true}
                    // grabCursor= {true}
                    // breakpoints = {{768 : {slidesPerView : 3,}}}
                    >
                        {/* <div class="swiper-wrapper"> */}
                            <SwiperSlide className="favorite__article swiper-slide">
                                <img src={favorite1} alt="image" className="favorite__img" />
                                <span className="favorite__model">
                                    Black Model
                                </span>
                            </SwiperSlide>



                            <SwiperSlide class="favorite__article swiper-slide">
                                <img src={favorite2} alt="image" className="favorite__img" />
                                <span className="favorite__model">
                                    White Model
                                </span>
                            </SwiperSlide>

                            <SwiperSlide className="favorite__article swiper-slide">
                                <img src={favorite3} alt="image" className="favorite__img" />
                                <span className="favorite__model">
                                    Red Model
                                </span>
                            </SwiperSlide>

                            <SwiperSlide className="favorite__article swiper-slide">
                                <img src={favorite4} alt="image" className="favorite__img" />
                                <span className="favorite__model">
                                    Teal Model
                                </span>
                            </SwiperSlide>
                        {/* </div> */}
                    </Swiper>
                </div>
            </section>
        </main>

    </>
  )
}

export default Sections