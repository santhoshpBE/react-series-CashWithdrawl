// Write your code here
import './index.css'

const DenominationItem = props => {
  const {onWithdraw, eachItem, key} = props
  const {value, id} = eachItem
  const onWithdrawCallBack = () => {
    onWithdraw(value)
  }
  return (
    <li key={id} className="denomination-item">
      <button
        onClick={onWithdrawCallBack}
        type="button"
        className="denomination-button"
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
