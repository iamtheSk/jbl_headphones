import React from 'react'

//icons
import {RiInstagramFill} from 'react-icons/ri'
import {RiFacebookCircleFill} from 'react-icons/ri'
import {RiYoutubeFill} from 'react-icons/ri'
import {RiSendPlaneFill} from 'react-icons/ri'



// Scroll up component
import ScrollUp from './ScrollUp'


const Footer = () => {

    const date = new Date()

  return (
    <>
                {/* <!-- =============== FOOTER ======================= --> */}

                <footer className="footer">
            <div className="footer__container container grid">
                <div>
                    <a href="" className="footer__logo">JBL</a>
                </div>

                <div className="footer__data grid">
                    <div>
                        <h3 className="footer__title">Products</h3>

                        <ul className="footer__links">
                            <li>
                                <a href="" className="footer__link">Headphones</a>
                            </li>

                            <li>
                                <a href="" className="footer__link">Earphones</a>
                            </li>

                            <li>
                                <a href="" className="footer__link">Earbuds</a>
                            </li>

                            <li>
                                <a href="" className="footer__link">Accesories</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">Support</h3>

                        <ul className="footer__links">
                            <li>
                                <a href="" className="footer__link">Product Help</a>
                            </li>

                            <li>
                                <a href="" className="footer__link">Register</a>
                            </li>

                            <li>
                                <a href="" className="footer__link">Updates</a>
                            </li>

                            <li>
                                <a href="" className="footer__link">Provides</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__group">
                        <form action="" className="footer__form">
                            <input type="email" placeholder="Email" className="footer__input" />
                            <button className="footer__button button">
                                Subscribe <RiSendPlaneFill className="i" />
                            </button>
                        </form>

                        <div className="footer__social">
                                <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                                    <RiInstagramFill />
                                </a>

                                <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                                    <RiFacebookCircleFill />
                                </a>

                                <a href="https://www.youtube.com/" target="_blank" className="footer__social-link">
                                    <RiYoutubeFill />
                                </a>

                        </div>
                    </div>

                </div>
            </div>

            <span className="footer__copy">
                &#169; {date.getFullYear()} Salman
            </span>
        </footer>

        <ScrollUp />

    </>
)
}

export default Footer