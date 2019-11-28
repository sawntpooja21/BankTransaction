const { Router } = require('express');
const router = Router();


const { createNewAccount, getAccountById, getAccount } = require("./controller")

router.post('/', (req, res) => {
    createNewAccount(req.body)

        .then(resp => {
            console.log(resp)
            return res.send("Account created")
        })
        .catch(err => {
            console.log(err);
        })


})

router.get("/", (req, res) => {
    getAccount()
        .then((acc) => {
            console.log(acc)
            res.send(acc)
        })
        .catch(err => {
            console.log(err)
        })
})


router.get("/:id", (req, res) => {
    getAccountById(req.params.id)
        .then((acc) => {
            console.log(acc)
            res.send(acc)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
})

module.exports = router