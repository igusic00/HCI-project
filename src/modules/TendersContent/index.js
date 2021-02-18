import React from 'react'
import styles from './style.module.css'
 
const TendersContent = () => <section className={styles.TendersContent}>
    <li className={styles.header}>Natječaji i službene objave</li>
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
    <a href="http://www.sinj.hr/wp-content/uploads/2019/12/Javni-poziv_civilno-dru%C5%A1tvo-2020..pdf">
        <li className={styles.natjecajiparagraph3}>
            <li className={styles.natjecajiparagraph3text}>SAVJETOVANJE s javnošću oko Prijedloga proračuna</li>
        </li>
    </a>
    <a href="http://www.sinj.hr/wp-content/uploads/2019/06/Javni-poziv_Kulturno-vije%C4%87e-Grada-Sinja.pdf">
        <li className={styles.natjecajiparagraph4}>
            <li className={styles.natjecajiparagraph4text}>Javni poziv za isticanje kandidature za izbor članova</li>
        </li>
    </a>
    <a href="http://www.sinj.hr/wp-content/uploads/2020/01/Javni-poziv_Program-potpora-poljoprivredi-2020.pdf">
        <li className={styles.natjecajiparagraph5}>
            <li className={styles.natjecajiparagraph5text}>STRATEŠKA PROCJENA utjecaja na okoliš</li>
        </li>
    </a>
    <a href="http://www.sinj.hr/wp-content/uploads/2018/02/Natje%C4%8Daj-ra%C4%8Dunovodstvo.pdf">
        <li className={styles.natjecajiparagraph6}>
            <li className={styles.natjecajiparagraph6text}>Natječaj za prodaju zemljišta u GZK</li>
        </li>
    </a>
    <a href="http://www.sinj.hr/wp-content/uploads/2019/12/Javni-poziv_kultura-2020..pdf">
        <li className={styles.natjecajiparagraph7}>
            <li className={styles.natjecajiparagraph7text}>Jednostavna nabava Uređenje aktivnih bunara</li>    
        </li>
    </a>
    <a href="http://www.sinj.hr/wp-content/uploads/2018/02/Natje%C4%8Daj-prostor.pdf">
        <li className={styles.natjecajiparagraph8}>   
            <li className={styles.natjecajiparagraph8text}>JAVNI POZIV za zakup poslovnog prostora</li>    
        </li>
    </a>
</section> 
 
export default TendersContent