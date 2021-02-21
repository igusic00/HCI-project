import React from 'react'
import styles from './style.module.css'
 
const ImageParagraph = () => (
    <section className={styles.imageParagraph}>
            <li className={styles.naslov1}>
                <a href="natjecaji"> Natječaji </a>
            </li>
            <a href="http://www.sinj.hr/wp-content/uploads/2020/01/Zaklju%C4%8Dak-o-raspisivanju-Javnog-natje%C4%8Daja_stipendije-srednjo%C5%A1kolcima-1.pdf">
                <li className={styles.natjecajiparagraph1}> 
                    <li className={styles.natjecajiparagraph1text}>Raspisan natječaj za dodjelu studentskih stipendija</li> 
                </li>
            </a>
            <a href="http://www.sinj.hr/wp-content/uploads/2019/08/JAVNI-POZIV-za-dodjelu-potpora-male-vrijednosti-za-subvencioniranje-zapo%C5%A1ljavanja-na-podru%C4%8Dju-Grada-Sinja-u-2019-i-2020-godini-1.pdf">
                <li className={styles.natjecajiparagraph2}>
                    <li className={styles.natjecajiparagraph2text}>Potpore investicijskim projektima</li>
                </li>
            </a>
        
            <li className={styles.naslov2}>
                <a href="oglasnik"> Oglasnik </a>
            </li>
            <a href="oglasnik">
                <li className={styles.oglasnikparagraph1}>
                    <li className={styles.oglasnikparagraph1text}>Prodajem građevno zemljište</li>
                </li>
            </a>
            <a href="oglasnik">
                <li className={styles.oglasnikparagraph2}>
                    <li className={styles.oglasnikparagraph2text}>Repeticije iz matematike</li>
                </li>
            </a>
    </section>
)

export default ImageParagraph
