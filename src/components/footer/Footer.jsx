import React from 'react';
import instagram from "../../img/icons/instagram.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

import './style.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item"><a target="_blank" rel='noopener' href="https://www.instagram.com/_taras1k_/"><img src={instagram} alt="Link"/></a></li>
                            <li className="social__item"><a target="_blank" rel='noopener' href="https://github.com/Taras322"><img src={gitHub} alt="Link"/></a></li>
                            <li className="social__item"><a target="_blank" rel='noopener' href="https://www.linkedin.com/in/taras-lashchiv-b5069a249/"><img src={linkedIn} alt="Link"/></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;