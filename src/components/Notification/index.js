// Write your code here
import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-card-container">
      <div className="each-notification-card">
        {children}
        <GrFormClose className="close-icon" />
      </div>
    </div>
  )
}

export default Notification
