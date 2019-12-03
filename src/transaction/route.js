import { Router } from 'express';
import { createNewTrans, getTransById, getTrans } from "./controller";

const router = Router();

router.post('/', (req, res) => {
    console.log(req.body)
    createNewTrans(req.body)

        .then(resp => {
            return res.send(resp)

            // Account.findOne({ _id: resp.account })
            //     .then((acc) => {
            //         if (resp.type == "credit") {

            //             acc.balance = acc.balance + resp.amt;
            //             acc.save().then(account => {
            //                 res.send(account)
            //             })
            //         }
            //         else {
            //             acc.balance = acc.balance - resp.amt;
            //             acc.save().then(account => {
            //                 res.send(account)
            //             })
            //         }



            //     })
            //     .catch(err => {
            //         console.log(err)
            //     })

        })


        .catch(err => {
            console.log(err);
        })



})


router.get("/", (req, res) => {
    getTrans()
        .then((trans) => {
            console.log(trans)
            res.send(trans)
        })
        .catch(err => {
            console.log(err)
        })
})


router.get("/:id", (req, res) => {
    getTransById(req.params.id)
        .then((trans) => {
            console.log(trans)
            res.send(trans)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
})

export default router