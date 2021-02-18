import React from 'react'
import styles from './style.module.css'
 
const SocietyContent = () => <section className={styles.SocietyContent}>
    <li className={styles.header}>Popis udruga:</li>
    <li className={styles.name}>Ime:</li>
    <li className={styles.contact}>Kontakt:</li>
    <div className={styles.udruge}>
        <li>Društvo prijatelja HNK Hajduk Sinj</li>
        <li>Udruga navijača Hajduka Torcida Sinj</li>
        <li>Udruga tjelesnih invalida Sinj</li>
        <li>Lovačka udruga cetinska krajina Sinj</li>
        <li>Glazbena udruga Sinj</li>
        <li>Udruga umirovljenika Sinj</li>
        <li>Umjetnička udruga Sinjske mažoretkinje</li>
        <li>Udruga za mali nogomet Sinj</li>
        <li>Foto video udruga</li>
        <li>Biciklistička udruga Vlaji</li>
        <li>Likovna udruga Signum Artum</li>
    </div>
    <div className={styles.kontakti}>
        <a href="https://hr-hr.facebook.com/dphsinj">
            <li>https://hr-hr.facebook.com/dphsinj</li>
        </a>
        <li>Peškarija ul. Istarska</li>
        <li>021/660-070</li>
        <li>021/565-835</li>
        <li>Čemer ul.20</li>
        <li>021/821-262</li>
        <li>Vrlička ul.50</li>
        <li>021/822-522</li>
        <li>Alkarsko trkalište bb</li>
        <li>Ul. Ćosin potok 18</li>
        <li>Ul kneza Branimira 9</li>
    </div>
</section> 
 
export default SocietyContent