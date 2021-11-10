import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ' '
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    // this is probably where we send off the search term and perform a query for trades
    handleSubmit(event) {
        event.preventDefault();

        // for now, let's fill some dummy data into the state
        this.props.searchData([
            {id: 1, itemSeller: "thisguy1", itemName: "Harlequin Crest Shako", itemPrice: { um: 1 }, itemComments: "Ethereal"},
            {id: 3, itemSeller: "thatguy", itemName: "Tyrael's Might Ancient Armor", itemPrice: { hr: 10 }, itemComments: ""},
            {id: 55, itemSeller: "mephisto", itemName: "", itemPrice: { um: 1 }, itemComments: "Ethereal"},
            {id: 7, itemSeller: "ball", itemName: "Harlequin Crest Shako", itemPrice: { um: 1, pul: 1 }, itemComments: "141 def"}
        ]);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Search:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default SearchBar