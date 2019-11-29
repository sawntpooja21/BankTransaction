import Transaction, { findById, find } from "../models/transaction";
import { updateBalance } from "../account/controller";

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
    return findById(id).populate("account", {
        accountNumber: 1
    });
    // .populate("account")
    // .exec((a)=>{
    //     console.log(a)
    // });
};

const getTrans = () => {
    return find();
}

export const createNewTrans = createNewTrans;
export const getTransById = getTransById;
export const getTrans = getTrans;