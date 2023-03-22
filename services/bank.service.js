import axios from "axios";
const API_URL = "http://10.0.2.2:4000/";


const allLinkedBank = (phone_number, token) => {
    return axios
        .get(API_URL + "all-linked-bank/" + phone_number, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then((response) => {
            return response.data.data;
        })
        .catch((err) => {
            console.log(err)
        });
};

const getBanks = (token) => {
    return axios
        .get(API_URL + "get-banks", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((response) => {
            return response.data.data;
        })
        .catch((err) => {
            console.log(err)
        });
};

const bankService = {
    allLinkedBank,
    getBanks
};

export default bankService;