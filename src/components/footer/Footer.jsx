/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Methmika</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/methmika.perera" className="footer__social-link" target='_blank'><i class="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/methmika_2004" className="footer__social-link" target='_blank'><i class="bx bxl-instagram"></i></a>
                    <a href="https://twitter.com/MethmikaPerera" className="footer__social-link" target='_blank'><i class="bx bxl-twitter"></i></a>
                </div>

                <span className="footer__copy">&#169; Methmika Perera. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer