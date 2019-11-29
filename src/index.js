import express from 'express';
import { json, urlencoded } from 'body-parser'; //Middleware

//const Customer = require("./models/customer");
//const Account = require("./models/account");
import { connect } from "mongoose";
const app = express()

app.use(json());
app.use(
    urlencoded({
        extended: false
    })
);

import customerRouter from "./customer/route";
app.use("/customer", customerRouter)

import accountRouter from "./account/route";
app.use("/account", accountRouter)

import transRouter from "./transaction/route";
app.use("/transaction", transRouter)

// app.use('/', (request, response) => {
//     if (request.method == 'GET') {
//         return response.send('hello bitches')
//     }
//     else {
//         return response.sendStatus(405)
//     }
// })

// app.get('/', (req, res) => {
//     // return res.send('hello world')
//     let name = req.query.name;
//     return res.send(`hello ${name}`)
// })

// app.post('/', (req, res) => {
//     let name = req.body.name;
//     return res.send(`hello ${name}`)
// })



connect("mongodb+srv://root:root@cluster0-3f3sk.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)
    .then(res => {
        console.log("Database Connected")
        app.listen(3000, () => {
            console.log("Server started")
        })
    })
    .catch(err => {
        console.log(err)
    })
