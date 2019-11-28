const Transaction = require("../models/transaction");

const createNewTrans = trans => {
    const newTrans = new Transaction(trans)
    return newTrans.save();
};

const getTransById = id => {
    return Transaction.findById(id);
};

const getTrans = () => {
    return Transaction.find();
}

module.exports = {
    createNewTrans: createNewTrans,
    getTransById: getTransById,
    getTrans: getTrans
};