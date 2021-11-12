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
            <div className={styles.row}>
                <div className={styles.seller}>{this.props.item.itemSeller.toString()}</div>
                <div className={styles.name}>{this.props.item.itemName.toString()}</div>
                <div className={styles.price}>
                    {runeList}
                </div>
                <div className={styles.comments}>{this.props.item.itemComments.toString()}</div>
            </div>
        )
    }
}

export default ItemRow