import axios from "axios";

const API_URL = "http://10.0.2.2:4000/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (phone_number, password) => {
  return axios
    .post(API_URL + "login", {
      phone_number: '0987123123',
      password: 'ThanhNghi123`',
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      console.log(err)
    });
};

const logout = () => {

};

const authService = {
  register,
  login,
  logout,
};

export default authService;