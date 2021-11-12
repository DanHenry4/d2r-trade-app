import Head from 'next/head'
import NavBar from '../components/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/layout.module.css'

export default function Layout({children}) {
    return (
        <>
        <Head>
            <title>D2R Trade</title>
            <meta name="description" content="The webapp I wish I had for trading in Diablo 2." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <main>{children}</main>
        <footer className={styles.footer}>
            <div>for the &hearts; of the game.</div>
            <a href="https://github.com/DanHenry4/d2r-trade-app"><FontAwesomeIcon icon={faGithub} /></a>
        </footer>
        </>
    )
}