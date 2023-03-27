import axios from "axios"
import { login } from "../reducers/authReducer"


export const startRegister = (newUser) => {
  return async(dispatch) => {
    try {
      const res = await axios.post(
        'http://localhost:3010/api/user',
        {...newUser}
      )
      const { data } = res
      const {email, firstname, surnames} = data
      dispatch(
        login({ email, firstname, surnames })
      )
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
}