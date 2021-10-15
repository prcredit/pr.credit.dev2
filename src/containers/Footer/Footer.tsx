import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

import { LINK_ROUTES, ROUTES } from "../../config/constants";
import {MultiLangContext} from '../../context/MultiLang/MultiLang';

import './Footer.scss';


const Footer = () => {
  const {
    selectedLang,
  } = useContext(MultiLangContext);


  return (
    <footer id='footer' className="footer">
      <div className="container">
        <div className="footer__top">
          <NavLink className='footer__logotype'
                   to={{
                     pathname: ROUTES.main,
                     hash: "#statistic",
                   }}>
            <img src="/media/images/svg/logotype-light.svg" alt='' />
          </NavLink>

          <nav className="footer__nav">
            <a href={''}
               target='_blank' rel="noopener noreferrer">
              S-Token
            </a>

          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">Copyright © {new Date().getFullYear()}, PR CREDIT</p>

          <div className="footer__social">
            <p>Подписывайтесь</p>

            {/*<div className="social">*/}
            {/*  <a href={selectedLang === 'ru' ? LINK_ROUTES.social.telegramRu : LINK_ROUTES.social.telegramEn}*/}
            {/*     target='_blank' rel="noopener noreferrer" >*/}
            {/*    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path*/}
            {/*        d="M12.2501 1.45703L10.3907 10.1523C10.2448 10.7721 9.90761 10.9362 9.37896 10.6445L6.56255 8.56641L5.19537 9.87891C5.01308 10.0612 4.82167 10.1523 4.62115 10.1523L4.8399 7.28125L10.0626 2.57812C10.1902 2.45052 10.1902 2.3776 10.0626 2.35938C9.95318 2.32292 9.83469 2.35026 9.70709 2.44141L3.25396 6.51562L0.464898 5.64062C0.155002 5.54948 0.00916884 5.41276 0.027398 5.23047C0.0456272 5.04818 0.237033 4.89323 0.601617 4.76562L11.4571 0.554688C11.7305 0.463542 11.9493 0.5 12.1133 0.664062C12.2774 0.809896 12.323 1.07422 12.2501 1.45703Z"*/}
            {/*        fill="white"/>*/}
            {/*    </svg>*/}
            {/*  </a>*/}

            {/*  <a href={selectedLang === 'ru' ? LINK_ROUTES.social.instagramRu : LINK_ROUTES.social.instagramEn}*/}
            {/*     target='_blank' rel="noopener noreferrer" >*/}
            {/*    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path*/}
            {/*        d="M4.12054 4.14955C4.77827 3.49182 5.57143 3.16295 6.5 3.16295C7.42857 3.16295 8.21205 3.49182 8.85045 4.14955C9.50818 4.78795 9.83705 5.57143 9.83705 6.5C9.83705 7.42857 9.50818 8.22173 8.85045 8.87946C8.21205 9.51786 7.42857 9.83705 6.5 9.83705C5.57143 9.83705 4.77827 9.51786 4.12054 8.87946C3.48214 8.22173 3.16295 7.42857 3.16295 6.5C3.16295 5.57143 3.48214 4.78795 4.12054 4.14955ZM4.96205 8.03795C5.38765 8.46354 5.9003 8.67634 6.5 8.67634C7.0997 8.67634 7.61235 8.46354 8.03795 8.03795C8.46354 7.61235 8.67634 7.0997 8.67634 6.5C8.67634 5.9003 8.46354 5.38765 8.03795 4.96205C7.61235 4.53646 7.0997 4.32366 6.5 4.32366C5.9003 4.32366 5.38765 4.53646 4.96205 4.96205C4.53646 5.38765 4.32366 5.9003 4.32366 6.5C4.32366 7.0997 4.53646 7.61235 4.96205 8.03795ZM10.5045 2.49554C10.6592 2.63095 10.7366 2.80506 10.7366 3.01786C10.7366 3.23065 10.6592 3.41443 10.5045 3.5692C10.369 3.72396 10.1949 3.80134 9.98214 3.80134C9.76934 3.80134 9.58557 3.72396 9.4308 3.5692C9.27604 3.41443 9.19866 3.23065 9.19866 3.01786C9.19866 2.80506 9.27604 2.63095 9.4308 2.49554C9.58557 2.34077 9.76934 2.26339 9.98214 2.26339C10.1949 2.26339 10.369 2.34077 10.5045 2.49554ZM12.971 3.83036C12.9903 4.35268 13 5.24256 13 6.5C13 7.75744 12.9903 8.64732 12.971 9.16964C12.9129 10.3497 12.5551 11.2686 11.8973 11.9263C11.2589 12.5647 10.3497 12.9033 9.16964 12.942C8.64732 12.9807 7.75744 13 6.5 13C5.24256 13 4.35268 12.9807 3.83036 12.942C2.6503 12.8839 1.74107 12.5357 1.10268 11.8973C0.85119 11.6652 0.648065 11.3943 0.493304 11.0848C0.338542 10.7753 0.22247 10.4754 0.145089 10.1853C0.0870536 9.89509 0.0580357 9.55655 0.0580357 9.16964C0.0193452 8.64732 0 7.75744 0 6.5C0 5.24256 0.0193452 4.34301 0.0580357 3.80134C0.116071 2.64062 0.464286 1.74107 1.10268 1.10268C1.74107 0.444941 2.6503 0.0870536 3.83036 0.0290179C4.35268 0.00967262 5.24256 0 6.5 0C7.75744 0 8.64732 0.00967262 9.16964 0.0290179C10.3497 0.0870536 11.2589 0.444941 11.8973 1.10268C12.5551 1.74107 12.9129 2.6503 12.971 3.83036ZM11.5781 10.3304C11.6362 10.1756 11.6845 9.98214 11.7232 9.75C11.7619 9.49851 11.7909 9.20833 11.8103 8.87946C11.8296 8.53125 11.8393 8.25074 11.8393 8.03795C11.8393 7.82515 11.8393 7.5253 11.8393 7.13839C11.8393 6.75149 11.8393 6.53869 11.8393 6.5C11.8393 6.44196 11.8393 6.22917 11.8393 5.86161C11.8393 5.4747 11.8393 5.17485 11.8393 4.96205C11.8393 4.74926 11.8296 4.47842 11.8103 4.14955C11.7909 3.80134 11.7619 3.51116 11.7232 3.27902C11.6845 3.02753 11.6362 2.8244 11.5781 2.66964C11.346 2.06994 10.9301 1.65402 10.3304 1.42188C10.1756 1.36384 9.97247 1.31548 9.72098 1.27679C9.48884 1.2381 9.19866 1.20908 8.85045 1.18973C8.52158 1.17039 8.25074 1.16071 8.03795 1.16071C7.84449 1.16071 7.54464 1.16071 7.13839 1.16071C6.75149 1.16071 6.53869 1.16071 6.5 1.16071C6.46131 1.16071 6.24851 1.16071 5.86161 1.16071C5.4747 1.16071 5.17485 1.16071 4.96205 1.16071C4.74926 1.16071 4.46875 1.17039 4.12054 1.18973C3.79167 1.20908 3.50149 1.2381 3.25 1.27679C3.01786 1.31548 2.8244 1.36384 2.66964 1.42188C2.06994 1.65402 1.65402 2.06994 1.42188 2.66964C1.36384 2.8244 1.31548 3.02753 1.27679 3.27902C1.2381 3.51116 1.20908 3.80134 1.18973 4.14955C1.17039 4.47842 1.16071 4.74926 1.16071 4.96205C1.16071 5.15551 1.16071 5.45536 1.16071 5.86161C1.16071 6.24851 1.16071 6.46131 1.16071 6.5C1.16071 6.57738 1.16071 6.76116 1.16071 7.05134C1.16071 7.32217 1.16071 7.55432 1.16071 7.74777C1.16071 7.92187 1.16071 8.15402 1.16071 8.4442C1.18006 8.73437 1.1994 8.98586 1.21875 9.19866C1.2381 9.39211 1.26711 9.59524 1.3058 9.80804C1.34449 10.0208 1.38318 10.1949 1.42188 10.3304C1.67336 10.9301 2.08929 11.346 2.66964 11.5781C2.8244 11.6362 3.01786 11.6845 3.25 11.7232C3.50149 11.7619 3.79167 11.7909 4.12054 11.8103C4.46875 11.8296 4.73958 11.8393 4.93304 11.8393C5.14583 11.8393 5.44568 11.8393 5.83259 11.8393C6.23884 11.8393 6.46131 11.8393 6.5 11.8393C6.55804 11.8393 6.77083 11.8393 7.13839 11.8393C7.5253 11.8393 7.82515 11.8393 8.03795 11.8393C8.25074 11.8393 8.52158 11.8296 8.85045 11.8103C9.19866 11.7909 9.48884 11.7619 9.72098 11.7232C9.97247 11.6845 10.1756 11.6362 10.3304 11.5781C10.9301 11.3266 11.346 10.9107 11.5781 10.3304Z"*/}
            {/*        fill="white"/>*/}
            {/*    </svg>*/}
            {/*  </a>*/}

            {/*  <a href={selectedLang === 'ru' ? LINK_ROUTES.social.facebookRu : LINK_ROUTES.social.facebookEn}*/}
            {/*     target='_blank' rel="noopener noreferrer"  >*/}
            {/*    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path*/}
            {/*        d="M6 6.75H4.24219V12H1.89844V6.75H0V4.57031H1.89844V2.92969C1.89844 2.30469 2.01562 1.77344 2.25 1.33594C2.48438 0.898438 2.8125 0.570312 3.23438 0.351562C3.67188 0.117188 4.17188 0 4.73438 0C4.98438 0 5.25 0.015625 5.53125 0.046875C5.8125 0.0625 6.03125 0.0859375 6.1875 0.117188L6.42188 0.140625V1.99219H5.48438C5.04688 1.99219 4.72656 2.10938 4.52344 2.34375C4.33594 2.5625 4.24219 2.83594 4.24219 3.16406V4.57031H6.32812L6 6.75Z"*/}
            {/*        fill="white"/>*/}
            {/*    </svg>*/}
            {/*  </a>*/}

            {/*  <a href={selectedLang === 'ru' ? LINK_ROUTES.social.youtubeRu : LINK_ROUTES.social.youtubeEn}*/}
            {/*     target='_blank' rel="noopener noreferrer"  >*/}
            {/*    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path*/}
            {/*        d="M12.7381 1.5625C12.7857 1.77083 12.8254 2.03125 12.8571 2.34375C12.9048 2.65625 12.9365 2.96875 12.9524 3.28125C12.9683 3.57639 12.9762 3.85417 12.9762 4.11458C12.9921 4.375 13 4.59201 13 4.76562V5C13 6.5625 12.9127 7.71701 12.7381 8.46354C12.6587 8.75868 12.5159 9.0191 12.3095 9.24479C12.1032 9.47049 11.8571 9.62674 11.5714 9.71354C11.2698 9.80035 10.6984 9.86979 9.85714 9.92188C9.01587 9.9566 8.24603 9.98264 7.54762 10H6.5C3.78571 10 2.09524 9.90451 1.42857 9.71354C0.809524 9.52257 0.420635 9.1059 0.261905 8.46354C0.18254 8.13368 0.119048 7.68229 0.0714286 7.10938C0.0396825 6.5191 0.015873 6.02431 0 5.625V5C0 3.45486 0.0873016 2.30903 0.261905 1.5625C0.34127 1.25 0.484127 0.980903 0.690476 0.755208C0.896825 0.529514 1.14286 0.373264 1.42857 0.286458C1.73016 0.199653 2.30159 0.138889 3.14286 0.104167C3.98413 0.0520833 4.75397 0.0173611 5.45238 0H6.5C9.21429 0 10.9048 0.0954861 11.5714 0.286458C11.8571 0.373264 12.1032 0.529514 12.3095 0.755208C12.5159 0.980903 12.6587 1.25 12.7381 1.5625ZM5.16667 7.13542L8.57143 5L5.16667 2.89062V7.13542Z"*/}
            {/*        fill="white"/>*/}
            {/*    </svg>*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;