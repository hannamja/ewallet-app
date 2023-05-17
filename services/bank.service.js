import axios from "axios";
const API_URL = "http://192.168.0.2:4000/";


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

const addLinkedBank = (phone_number, bank_account_number, bank_id, token) => {
    return axios
        .post(API_URL + "search-account-bank", {
            phone_number: phone_number,
            bank_id: bank_id,
            bank_account_number: bank_account_number
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((response) => {
            return response.data[0].data;
        })
        .catch((err) => {
            console.log(err)
        });
}

const searchBankAccount = (bank_id, bank_account_number, token) => {
    return axios
        .post(API_URL + "search-account-bank", {
            bank_id: bank_id,
            bank_account_number: bank_account_number
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((response) => {
            return response.data[0].data;
        })
        .catch((err) => {
            console.log(err)
        });
};

const bankService = {
    allLinkedBank,
    getBanks,
    searchBankAccount,
    addLinkedBank
};

export default bankService;