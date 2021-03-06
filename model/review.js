import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  title: String,
  slug: String,
  author: String,
  content: String,
  album: String,
  band: String,
  genre: String,
  selectedFile: {
    type: String,
    default: "https://source.unsplash.com/1600x900/?music",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// const Review = mongoose.model("Review", reviewSchema);
const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
