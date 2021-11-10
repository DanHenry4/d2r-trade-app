import React from 'react'

class RunePrice extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="runePrice">
                <span className="runeCount">{this.props.amount.toString()}x </span>
                <span className="runeType">{this.props.runeType.toString()}</span>
            </div>
        )
    }
}

export default RunePrice