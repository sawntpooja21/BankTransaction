const { Router } = require('express');
const router = Router();
//const Customer = require("../models/customer");

const { createNewCustomer, getCustomerById, getCustomers } = require("./controller")

router.post('/', (req, res) => {
    createNewCustomer(req.body)

        .then(resp => {
            console.log(resp)
            return res.send("customer created")
        })
        .catch(err => {
            console.log(err);
        })


})

router.get("/", (req, res) => {
    getCustomers()
        .then((cust) => {
            console.log(cust)
            res.send(cust)
        })
        .catch(err => {
            console.log(err)
        })
})

// app.get("/customer1", (req, res) => {
//     Customer
//         .find({}, { name: 1, _id: 0 })
//         .then((cust) => {
//             console.log(cust)
//             res.send(cust)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// })

router.get("/:id", (req, res) => {
    getCustomerById(req.params.id)
        .then((cust) => {
            console.log(cust)
            res.send(cust)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
})

module.exports = router