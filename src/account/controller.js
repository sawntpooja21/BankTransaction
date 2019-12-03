import Account, { findById, find, findByIdAndUpdate } from "../models/account";

export const createNewAccount = acc => {
    const newAccount = new Account(acc);
    return newAccount.save();
};

export const getAccountById = id => {
    return Account.findById(id);
};

export const getAccount = () => {
    return Account.find();
}

export const updateBalance = (id, amount) => {
    return Account.findByIdAndUpdate(id, {
        $inc: {
            balance: amount
        }
    });
};

