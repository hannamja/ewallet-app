import axios from "axios";

const API_URL = "http://192.168.0.4:4000/";

const login = (phone_number, password) => {
  return axios
    .post(API_URL + "login", {
      phone_number: phone_number,
      password: password,
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      console.log(err)
    });
};
//ok
const getOtp = (phone_number) => {
  return axios
    .post(API_URL + "getOtp", {
      phone_number: phone_number
    })
    .then((response) => {
      return response.data.data.fakeOTPCode;
    })
    .catch((err) => {
      console.log(err)
    });
};
const register = (username, phone_number, password, address, dob) => {
  return axios
    .post(API_URL + "signup", {
      name: username,
      phone_number: phone_number,
      password: password,
      password_confirmation: password,
      address: address,
      dob: dob
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err)
    });
}
const logout = () => {
  return null
};

const authService = {
  register,
  login,
  logout,
  getOtp
};

export default authService;