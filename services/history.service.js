import axios from "axios";
const API_URL = "http://10.0.2.2:4000/";

const allPayments = (phone_number, token) => {
    axios
        .get(API_URL + "all-linked-bank/" + phone_number, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then((response) => {
            return res.json(response.data.data);
        })
        .catch((error) => {
            return res.json(error);
        });
}

const historyService = {
    allPayments
}

export default historyService