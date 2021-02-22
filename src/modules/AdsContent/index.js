import React from 'react'
import styles from './style.module.css'
import { TextField } from '@material-ui/core'

/* import Login from '../../components/Login'
import {myLocalStorage} from '../../components/helper'
const loggedIn = () => !!myLocalStorage.getItem('loggedIn') */

const AdsContent = () => <section className={styles.AdsContent}>
    <li className={styles.oglasnik}>
        <a href="/login">
            <li className={styles.naslov}>Dodaj oglas</li>
        </a>
        <a href="/login">
            <li className={styles.naslov2}>Moji oglasi</li>
        </a>
            <li className={styles.oglasnikparagraph1}></li>
            <div className={styles.text1}>
                <article>
                    <h1>Prodajem građevno zemljište</h1>
                    <p> Prodaje se građevinsko zemljište površine 1330m2 na samom ulazu na Suhač, 
                        50m od glavne ceste D1. U neposrednoj blizini zemljišta nalaze se priključci 
                        za vodu, struju i telefon.
                        Cijena je po dogovoru.
                    </p>
                    <li className={styles.price}>Cijena: 75 000 e</li>
                    <li className={styles.contact}>Kontakt: 099 492 2819</li>
                </article>
            </div>
            <li className={styles.oglasnikparagraph2}></li>
            <div className={styles.text2}>
                <article>
                    <h1>Repeticije iz matematike</h1>
                    <p> Magistrica matematike s iskustvom predavanja u srednjim i 
                        osnovnim školama drži instrukcije iz matematike i informatike za 
                        učenike Osnovnih i Srednjih škola te instrukcije iz matematike za studente.
                    </p>
                    <li className={styles.price}>Cijena: 50 kn</li>
                    <li className={styles.contact}>Kontakt: 097 167 2325</li>
                </article>
            </div>
            <li className={styles.oglasnikparagraph3}></li>
            <div className={styles.text3}>
                <article>
                    <h1>Prodajem drva</h1>
                    <p> Prodajem metrice drva sa besplatnom dostavom po cijeni vec od 
                        250kn po metru.     
                    </p>
                    <li className={styles.price}>Cijena: 250 kn</li>
                    <li className={styles.contact}>Kontakt: 091 265 2433</li>
                </article>
            </div>
            <li className={styles.oglasnikparagraph4}></li>
            <div className={styles.text4}>
                <article>
                    <h1>Prodajem Opel Corsu 1.4</h1>
                    <p> Opel Corsa 1.4 2001. g.,
                        Reg. do 02.2021, u odličnom stanju prvi vlasnik     
                    </p>
                    <li className={styles.price}>Cijena: 7000 kn</li>
                    <li className={styles.contact}>Kontakt: 095 764 9813</li>
                </article>
            </div>
    </li>
    <form className={styles.search} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Pretraži oglase" variant="outlined" size="small" />
    </form>
</section>

export default AdsContent 