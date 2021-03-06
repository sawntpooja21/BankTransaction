const Account = require("../models/account");

const createNewAccount = acc => {
    const newAccount = new Account(acc);
    return newAccount.save();
};

const getAccountById = id => {
    return Account.findById(id);
};

const getAccount = () => {
    return Account.find();
}

module.exports = {
    createNewAccount: createNewAccount,
    getAccountById: getAccountById,
    getAccount: getAccount
};