import axios from "axios"


export const startRegister = (newUser) => {
  return async(dispatch) => {
    const res = await axios.post(
      'http://localhost:3010/api/user',
      {...newUser}
    );

    const { data } = res;
    console.log(res);
    console.log(data);
    console.log(data.message);
    if (data.message) {
      const { message } = data.message;
      console.error(`error encontrado ${message}`)
    }
  }
}