import Transaction, { findById, find } from "../models/transaction";
import { updateBalance } from "../account/controller";


export const createNewTrans = async trans => {
    const newTrans = new Transaction(trans)
    let createTransaction = await newTrans.save();
    if (trans.type == "debit") {
        await updateBalance(trans.account, trans.amt * -1);
    } else {
        await updateBalance(trans.account, trans.amt);
    }
    return createTransaction.populate("account").execPopulate();

};

export const getTransById = id => {
    return Transaction.findById(id).populate("account", {
        accountNumber: 1
    });
    // .populate("account")
    // .exec((a)=>{
    //     console.log(a)
    // });
};

export const getTrans = () => {
    return Transaction.find();
}

