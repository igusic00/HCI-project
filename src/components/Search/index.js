import React from 'react'
import { TextField } from '@material-ui/core'
import styles from './style.module.css'
 
const Search = () => <form className={styles.searching} noValidate autoComplete="off">
<TextField id="outlined-basic" label="Tražilica" variant="outlined" size="small"/>
</form>

export default Search