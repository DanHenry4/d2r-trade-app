import React from 'react'

import styles from '../styles/itemInfo.module.css'

class ItemInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.container}>
                {/* picture */}
                <div>{this.props.item}</div>
                {/* item information */}
            </div>
        )
    }
}

export default ItemInfo