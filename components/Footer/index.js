import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles._container}>
                Projeto desenvolvido por: {' '}
                <a className={styles.links}>Bruno Cardoso</a> / {' '}
                <a className={styles.links} href='https://linkedin.com/in/bruno-cardoso-58961b39'>Linkedin</a> / {' '}
                <a className={styles.links} href='https://github.com/bfccardoso'>Github</a>
                <div className='mt-2'>
                    <img className={styles.logo} src='/logo_semana_fsm.png' />
                    <img className={styles.logo} src='/logo_devpleno.png' />
                </div>
            </div>
        </div>
    )
}

export default Footer