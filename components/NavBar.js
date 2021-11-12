import React from 'react'
import Link from 'next/link'
import styles from '../styles/navBar.module.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.navBar}>
                <div className={styles.leftLinks}>
                    <div className={styles.link}><Link href="/">Home</Link></div>
                </div>
                <div>
                    <div className={styles.link}><Link href="/trades">My Trades</Link></div>
                </div>
            </div>
        )
    }
}

export default NavBar