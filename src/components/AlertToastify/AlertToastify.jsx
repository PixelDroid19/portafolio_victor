import { toast } from 'react-toastify'

function AlertToastify (message = '', type = 'success') {
  toast[type](message, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })
}

export default AlertToastify
