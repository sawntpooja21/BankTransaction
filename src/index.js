const express = require('express')
const parser = require('body-parser') //Middleware

//const Customer = require("./models/customer");
//const Account = require("./models/account");
const mongoose = require("mongoose")
const app = express()

app.use(parser.json());
app.use(
    parser.urlencoded({
        extended: false
    })
);

const customerRouter = require("./customer/route")
app.use("/customer", customerRouter)

const accountRouter = require("./account/route")
app.use("/account", accountRouter)

const transRouter = require("./transaction/route")
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



mongoose.connect("mongodb+srv://root:root@cluster0-3f3sk.mongodb.net/test?retryWrites=true&w=majority",
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
