import React from 'react'
import styles from './style.module.css'
 
const ImageParagraph = () => (
    <section className={styles.imageParagraph}>
        <li className={styles.natjecaji}>
            <li className={styles.naslov1}>Natječaji</li>
            <li className={styles.natjecajiparagraph1}>
                <li className={styles.natjecajiparagraph1text}>Raspisan natječaj za dodjelu studentskih stipendija</li>
            </li>
            <li className={styles.natjecajiparagraph2}>
                <li className={styles.natjecajiparagraph2text}>Potpore investicijskim projektima</li>
            </li>
        </li>
        <li className={styles.oglasnik}>
            <li className={styles.naslov2}>Oglasnik</li>
            <li className={styles.oglasnikparagraph1}>
                <li className={styles.oglasnikparagraph1text}>Prodajem građevno zemljište</li>
            </li>
            <li className={styles.oglasnikparagraph2}>
                <li className={styles.oglasnikparagraph2text}>Repeticije iz matematike</li>
            </li>
        </li>
    </section>
    
)

export default ImageParagraph
