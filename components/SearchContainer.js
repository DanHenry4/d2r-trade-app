import React from 'react'
import SearchBar from '../components/SearchBar'
import ItemTable from './ItemTable';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        }
    }

    searchCallback = (searchData) => {
        this.setState({searchResults: searchData});
    }

    render() {
        return (
            <div>
                <SearchBar searchData={this.searchCallback} />
                <ItemTable items={this.state.searchResults} />
            </div>
        )
    }
}

export default SearchContainer