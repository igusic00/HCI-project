import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from './style.module.css'

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
        <a href="vijesti">
          <div className={styles.eachslide}>  
            <div className={styles.slideOne}>
              <span>U cetinskoj krajini 13 novooboljelih</span>
            </div>
          </div>
        </a>
        <a href="vijesti">
          <div className={styles.eachslide}>
            <div className={styles.slideTwo}>
              <span>Junaku novi poraz</span>
            </div>
          </div>
        </a>
        <a href="vijesti">
          <div className={styles.eachslide}>
            <div className={styles.slideThree}>
              <span>Blagoslov obitelji u Lučanima</span>
            </div>
          </div>
        </a>
        <a href="vijesti">
          <div className={styles.eachslide}>
            <div className={styles.slideFour}>
              <span>Upaljena 2. adventska svijeća</span>
            </div>
          </div>
        </a>
        <a href="vijesti">
          <div className={styles.eachslide}>
            <div className={styles.slideFive}>
              <span>Raspisan natječaj za dodjelu stipendija</span>
            </div>
          </div>
        </a>
        </Slide>
      </div>
    )
};

export default Slideshow;