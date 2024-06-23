import mongoose, { Model, Document } from "mongoose";

interface IReview extends Document {
  username: string;
  profileImage: string;
  title: string;
  review: string;
}

const reviewSchema = new mongoose.Schema<IReview>(
  {
    username: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    title: {
        type: String
    },
    review: {
      type: String,
    },
  },
  { timestamps: true }
);

let ReviewModel: Model<IReview>;

try {
  // Try to retrieve an existing model
  ReviewModel = mongoose.model<IReview>("Review");
} catch (e) {
  // If the model doesn't exist, define it
  ReviewModel = mongoose.model<IReview>("Review", reviewSchema);
}

export const Review = ReviewModel;
