import React from 'react'
import RunePrice from '../components/RunePrice'

import styles from '../styles/itemRow.module.css'

class ItemRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const runeList = [];
        for (const key in this.props.item.itemPrice) {
            runeList.push(<RunePrice runeType={key} amount={this.props.item.itemPrice[key]} />)
        }

        return (
            <div className={styles.itemRow}>
                <div className={styles.itemSeller}>{this.props.item.itemSeller.toString()}</div>
                <div className={styles.itemName}>{this.props.item.itemName.toString()}</div>
                <div className={styles.itemPrice}>
                    {runeList}
                </div>
                <div className={styles.itemComments}>{this.props.item.itemComments.toString()}</div>
            </div>
        )
    }
}

export default ItemRow