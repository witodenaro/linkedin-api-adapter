import axios from 'axios'
import cookies from './cookies'

const csrfToken = cookies.getCsrfToken()

const linkedinApi = axios.create({
  headers: {
    'csrf-token': csrfToken,
  },
})

export default linkedinApi
