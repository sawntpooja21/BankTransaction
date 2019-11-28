const Customer = require("../models/customer");

const createNewCustomer = cust => {
    const newCustomer = new Customer(cust);
    return newCustomer.save();
};

const getCustomerById = id => {
    return Customer.findById(id);
};

const getCustomers = () => {
    return Customer.find();
}

module.exports = {
    createNewCustomer: createNewCustomer,
    getCustomerById: getCustomerById,
    getCustomers: getCustomers
};