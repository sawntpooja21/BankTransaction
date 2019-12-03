import { model, Schema } from 'mongoose';
import { composeWithMongoose } from "graphql-compose-mongoose";

const transactionSchema = Schema({
    type: {
        type: String,
        enum: ["debit", "credit"],
        required: true

    },
    amt: {
        type: Number,
        required: true
    },
    // timestamp: {
    //     type: Date,
    //     default: Date.now,
    //     required: true
    // },
    account: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "account"
    }
},
    { timestamps: true })



const transactionModel = model("transaction", transactionSchema);
export default transactionModel;
export const TransactionTC = composeWithMongoose(transactionModel);