const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    //   upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    //   comments: [
    //     {
    //       text: String,
    //       postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    //     },
    //   ],
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("question", questionSchema);
