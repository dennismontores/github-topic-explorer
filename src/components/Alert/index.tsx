import CSS from './Alert.module.css'

interface AlertProps {
  type: 'error' | 'success' | 'warning' | 'info'
  message: string
}

const Alert = ({ type, message }: AlertProps) => {
  return <div className={CSS[type]}>{message}</div>
}

export default Alert
