import { FaSearch } from 'react-icons/fa'
import styles from './style.module.css'
import React, { useState } from "react";

const nekiNiz = [
    { title: "", for: [""] },
    { title: "", for: [""] },
    { title: "", for: [""] },
    { title: "", for: [""] }
  ];

  export default function App() {
    const puniNiz = nekiNiz;
    const [arrayToShow, setArray] = useState(nekiNiz);
    const filters = [""];

    return(
            <div className={styles.searching}>
                <li className={styles.form} action="/search" method="get">
                    <input type="text" name="q" className={styles.input} placeholder="Upišite traženi pojam..."></input>
                    <button className={styles.search}><FaSearch style={{ marginBottom: '-3px' }}/></button>
                </li>
            </div>
        );
  }




/* const Search = () => {
    return(

        <div className={styles.searching}>
            <li className={styles.form} action="/search" method="get">
                <input type="text" name="q" className={styles.input} placeholder="Upišite traženi pojam..."></input>
                <button className={styles.search}><FaSearch style={{ marginBottom: '-3px' }}/></button>
            </li>
        </div>
    )
}

export default Search */