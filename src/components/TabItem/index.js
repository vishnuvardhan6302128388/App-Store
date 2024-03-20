// Write your code here
import './index.css'

const TabItem = props => {
  const {itemDetails, updating} = props
  const {tabId, displayText} = itemDetails
  const updates = () => {
    updating(tabId)
  }
  return (
    <li className="lists">
      <button onClick={updates} className="btn" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
