import React from 'react'
import ItemRow from './ItemRow';

class ItemTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let itemList = [];
        this.props.items.map((item, index) => {
            itemList.push(<ItemRow key={index} item={item} />);
        });

        return (
            <div className="itemTable">
                {itemList}
            </div>
        )
    }
}

export default ItemTable