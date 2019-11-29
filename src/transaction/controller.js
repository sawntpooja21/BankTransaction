const Transaction = require("../models/transaction");
const { updateBalance } = require("../account/controller");

const createNewTrans = async trans => {
    const newTrans = new Transaction(trans)
    let createTransaction = await newTrans.save();
    if (trans.type == "debit") {
        await updateBalance(trans.account, trans.amt * -1);
    } else {
        await updateBalance(trans.account, trans.amt);
    }
    return createTransaction.populate("account").execPopulate();

};

const getTransById = id => {
    return Transaction.findById(id).populate("account", {
        accountNumber: 1
    });
    // .populate("account")
    // .exec((a)=>{
    //     console.log(a)
    // });
};

const getTrans = () => {
    return Transaction.find();
}

module.exports = {
    createNewTrans: createNewTrans,
    getTransById: getTransById,
    getTrans: getTrans
};