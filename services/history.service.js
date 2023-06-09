import axios from "axios";
const API_URL = "http://192.168.0.4:4000/";

const allPayments = (phone_number, token) => {
    return axios
        .get(API_URL + "all-payments/" + phone_number, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            console.log(err)
        });
}

const historyService = {
    allPayments
}

export default historyService