import React from 'react'
import styles from './style.module.css'
import ScrollUpButton from "react-scroll-up-button";
/* import { Link } from 'react-router-dom'; */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons"

  const Footer = () => (
    <footer className={styles.footer}>
          <li className={styles.return}>
            <div>
                <ScrollUpButton ToggledStyle={{bottom: 170}}/>
            </div>
          </li>
          <li className={styles.title}>
                Sinjski portal
          </li>
          <ul className={styles.address}>
            <li className={styles.contact}>
                email: sinj_u_sridu@gmail.com
            </li>
            <li>tel: 021/822-775</li>
            <li>Sinj, 2021</li>
            </ul>
            <div className={styles.social}>
              <a 
                href="https://hr-hr.facebook.com/pages/category/Website/Ferata-sinjski-portal-103342336408026/"
                className="facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a 
                href="https://twitter.com/portalferata"
                className="twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCnHiiaCuvg1pgSIWBHuUPFg"
                className="youtube"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a 
                href="https://www.instagram.com/sinjcroatia/"
                className="instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            <div className={styles.radio}>
              <a
                href="https://www.hitradio.hr/"
                className="radio" icon="radio" textDecoration="none"
              >
                HIT RADIO
              </a>
            </div>
    </footer>
  )
 
  export default Footer