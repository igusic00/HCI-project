import React from 'react'
import styles from './style.module.css'
 
const NewsContent = () => <section className={styles.NewsContent}>
    <div className={styles.news1}>
        <li className={styles.picture1}></li>
        <div className={styles.text1}>
            <article>
                <h1>U cetinskoj krajini 13 novooboljelih</h1>
                <p> Prema izvješću Nastavnog zavoda za javno zdravstvo Splitsko-dalmatinske županije, 
                    od ukupno 1.289 obrađenih testova danas je 336 novooboljelih osoba pozitivno na 
                    COVID infekciju, od kojih je 13 iz Cetinske krajine...
                </p>
            </article>
        </div>
    </div>
    <div className={styles.news2}>
        <li className={styles.picture2}></li>
        <div className={styles.text2}>
            <article>
                <h1>Blagoslov obitelji u Lučanima</h1>
                <p> Sutra, 7. prosinca počinje blagoslov obitelji u Lučanima.

                    Raspored blagoslova:...
                </p>
            </article>
        </div>
    </div>
    <div className={styles.news3}>
        <li className={styles.picture3}></li>
        <div className={styles.text3}>
            <article>
                <h1>Junaku novi poraz, Rudeš slavio unatoč igraču manje od 34. minute</h1>
                <p> Junak je upisao novi poraz, osmi ukupno, čime je i dalje ostao bez 
                    pobjede na svom terenu u dosadašnjem dijelu sezone. Gosti su 
                    iskoristili svoje situacije u prvom dijelu,...
                </p>
            </article>
        </div>
    </div>
    <div className={styles.news4}>
        <li className={styles.picture4}></li>
        <div className={styles.text4}>
            <article>
                <h1>Sinj: Upaljena 2. adventska svijeća</h1>
                <p> Drugu adventsku svijeću na adventskom vijencu – svijeću mira upalila 
                    je gradonačelnica Kristina Križanac s gvardijanom Franjevačkog samostana 
                    i svetišta Čudotvorne Gospe Sinjske fra Antom Čovom...
                </p>
            </article>
        </div>
    </div>
</section> 
 
export default NewsContent