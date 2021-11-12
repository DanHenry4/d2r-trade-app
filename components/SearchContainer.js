import React from 'react'
import SearchBar from './SearchBar'
import ItemInfo from './ItemInfo';
import ItemTable from './ItemTable';

import styles from '../styles/search.module.css'

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: {
                itemName: "",
                data: []
            }
        }
    }

    searchCallback = (data) => {
        this.setState({response: data});
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.bar}>
                    <SearchBar response={this.searchCallback} />
                </div>
                <div className={styles.content}>
                    <ItemInfo className={styles.box} item={this.state.response.itemName} />
                    <ItemTable className={styles.box} items={this.state.response.data} />
                </div>
            </div>
        )
    }
}

export default SearchContainer