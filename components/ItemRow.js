import React from 'react'
import RunePrice from '../components/RunePrice'

class ItemRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.item.itemPrice);
        const runeList = [];
        for (const key in this.props.item.itemPrice) {
            runeList.push(<RunePrice runeType={key} amount={this.props.item.itemPrice[key]} />)
        }

        return (
            <div className="itemRow">
                <div className="itemSeller">{this.props.item.itemSeller.toString()}</div>
                <div className="itemName">{this.props.item.itemName.toString()}</div>
                <div className="itemPrice">
                    {runeList}
                </div>
                <div className="itemComments">{this.props.item.itemComments.toString()}</div>
            </div>
        )
    }
}

export default ItemRow