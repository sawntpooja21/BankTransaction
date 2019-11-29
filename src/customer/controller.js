import Customer, { findById, find } from "../models/customer";

const createNewCustomer = cust => {
    const newCustomer = new Customer(cust);
    return newCustomer.save();
};

const getCustomerById = id => {
    return findById(id);
};

const getCustomers = () => {
    return find();
}

export const createNewCustomer = createNewCustomer;
export const getCustomerById = getCustomerById;
export const getCustomers = getCustomers;