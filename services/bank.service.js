import axios from "axios";
const API_URL = "http://192.168.0.4:4000/";


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
        .post(API_URL + "add-bank", {
            phone_number: phone_number,
            bank_id: bank_id,
            bank_account_number: bank_account_number
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err)
        });
}

const delLinkedBank = (id, token) => {
    console.log(token)
    return axios
        .post(API_URL + "del-bank/" + id, {
            
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((response) => {
            return response.data;
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
    addLinkedBank,
    delLinkedBank
};

export default bankService;