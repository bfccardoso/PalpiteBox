import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
    return(
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className={styles._container}>
                    <Link href='/'>
                        <a><img className={styles.logo} src='/logo_palpitebox.png' alt='PalpiteBox'></img></a>
                    </Link>
                </div>
            </div>
            <div className={styles.menu}>
                <Link href='/sobre'>
                    <a className={styles.links}>Sobre</a>
                </Link>
                <Link href='/contato'>
                    <a className={styles.links}>Contato</a>
                </Link>
                <Link href='/pesquisa'>
                    <a className={styles.links}>Pesquisa</a>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Header
