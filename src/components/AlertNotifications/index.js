// Write your code here

import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

const AlertNotification = () => (
  <div className="notification-container">
    <h1 className="alert-heading">Alert Notifications</h1>
    <Notification>
      <div className="success-card-container">
        <div className="card-container">
          <AiFillCheckCircle className="check-icon" />
          <div className="space-between-container">
            <div className="heading-description-container">
              <h1 className="success-heading">Success</h1>
              <p className="description">
                You can access all the files in the folder
              </p>
            </div>
          </div>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="Error-card-container">
        <div className="card-container">
          <RiErrorWarningFill className="error-icon" />
          <div className="space-between-container">
            <div className="heading-description-container">
              <h1 className="error-heading">Error</h1>
              <p className="description">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </div>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="warning-card-container">
        <div className="card-container">
          <MdWarning className="warning-icon" />
          <div className="space-between-container">
            <div className="heading-description-container">
              <h1 className="warning-heading">Warning</h1>
              <p className="description">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="info-card-container">
        <div className="card-container">
          <MdInfo className="info-icon" />
          <div className="space-between-container">
            <div className="heading-description-container">
              <h1 className="info-heading">Info</h1>
              <p className="description">
                Anyone on the internet can view these files
              </p>
            </div>
          </div>
        </div>
      </div>
    </Notification>
  </div>
)

export default AlertNotification
