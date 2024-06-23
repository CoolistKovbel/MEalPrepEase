import mongoose, { Model, Document } from 'mongoose';

interface IWaitList extends Document {
  email: string;
}

const waitListSchema = new mongoose.Schema<IWaitList>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

let WaitListModel: Model<IWaitList>;

try {
  // Try to retrieve an existing model
  WaitListModel = mongoose.model<IWaitList>('WaitList');
} catch (e) {
  // If the model doesn't exist, define it
  WaitListModel = mongoose.model<IWaitList>('WaitList', waitListSchema);
}

export const WaitList = WaitListModel;
