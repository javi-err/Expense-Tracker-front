import React, { Component } from 'react'

export class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAmountPositive: true
        };
    }


    negative = () => {
        this.props.transaction.amount < 0 ? this.setState({isAmountPositive : false}) : this.setState({isAmountPositive : true})
    }

    componentDidMount() {
        this.negative();
    }
    render() {
        
        const sign = this.props.transaction.amount < 0 ? '-' : '+';
        let className = '';
            if(this.state.isAmountPositive) {
                className += 'positive-glow'
            }
            else {
                className += 'negative-glow'
            }
        return (
            <div className = {className}>
            <li className="negative"><div className="t-text">{this.props.transaction.text}</div>
            <span>{sign}${Math.abs(this.props.transaction.amount)}</span>
            <button className ="delete-btn">x</button></li> 
            </div>
        )
    }
}

export default Transaction
