import React from 'react'

class RunePrice extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="runePrice">
                <div className="runeCount">{this.props.amount.toString()}x</div>
                <div className="runeType">{this.props.runeType.toString()}</div>
            </div>
        )
    }
}

export default RunePrice