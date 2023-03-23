import axios from "axios";
const API_URL = "http://10.0.2.2:4000/";


const deposit = (linked_id, money, phone_number_des, note, token) => {
    console.log(linked_id)
    return axios
        .post(API_URL + "payments/deposit", {
            linked_id: linked_id,
            money: money,
            phone_number_des: phone_number_des,
            note: note
        }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then((response) => {
            console.log(response)
            return response.data;
        })
        .catch((err) => {
            console.log(err)
        });
};

const transfer = (phone_number_source, money, bank_id, bank_account_des, note, token) => {
    return axios
        .post(API_URL + "payments/transfer", {
            phone_number_source: phone_number_source,
            money: money,
            bank_id: bank_id,
            bank_account_des: bank_account_des,
            note: note
        }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then((response) => {
            console.log(response)
            return response.data;
        })
        .catch((err) => {
            console.log(err)
        });
};

const transferToEwallet = (phone_number_source, phone_number_des, money, note, token) => {
    return axios
        .post(API_URL + "payments/transfer-to-ewallet", {
            phone_number_source: phone_number_source,
            phone_number_des: phone_number_des,
            money: money,
            note: note
        }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err)
        });
};

const transactionService = {
    deposit,
    transfer,
    transferToEwallet
};

export default transactionService;