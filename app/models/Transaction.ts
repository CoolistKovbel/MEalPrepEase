import mongoose, { Model, Document } from "mongoose";
import { User } from "./User";

interface ITransaction extends Document {
  transactionsignature: string;
  transactionHash: string;
  blockHash: string;
  homeAddress: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  address: string;
  userId: any;
  price: string;
  amount: string;
  tokenAmount: string;
}

const transactionSchema = new mongoose.Schema<ITransaction>(
  {
    price: {
      type: String,
    },
    amount: {
      type: String,
    },
    tokenAmount: {
      type: String,
    },
    blockHash: {
      type: String,
    },
    transactionHash: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    transactionsignature: {
      type: String,
    },
    address: {
      type: String,
    },
    homeAddress: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

let TransactionModel: Model<ITransaction>;

try {
  // Try to retrieve an existing model
  TransactionModel = mongoose.model<ITransaction>("Transaction");
} catch (e) {
  // If the model doesn't exist, define it
  TransactionModel = mongoose.model<ITransaction>(
    "Transaction",
    transactionSchema
  );
}

export const Transaction = TransactionModel;
