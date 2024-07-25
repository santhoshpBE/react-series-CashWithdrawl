import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {cash: 2000}
  onWithdraw = value => {
    this.setState(prevCash => {
      if (prevCash.cash >= value) {
        return({cash:prevCash.cash-value})
        }
    })
  }

  render() {
    const {denominationsList} = this.props
    const {cash} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-card">
            <span className="dot">S</span>
            <p className="profile-card-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <div>
              <p className="rupees">{cash}</p>
              <span>In Rupees</span>
            </div>
          </div>
          <div className="WithdrawCard">
            <p>Withdraw</p>
            <p>Choose Sum (In Rupees)</p>
            <ul className="buttonContainer">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  onWithdraw={this.onWithdraw}
                  eachItem={eachDenomination}
                  key={eachDenomination.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
