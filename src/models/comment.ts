const { default: mongoose } = require("mongoose");
require("./product");
require("./user");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  isAccept: {
    type: Boolean,
    default: false,
  },
  score: {
    type: Number,
    min: 1,
    max: 5,
    default: 5,
    required: true,
  },
  date: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
  productID: {
    type: mongoose.Types.ObjectId,
    ref: "product",
    required: true,
  },
  userID: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const model = mongoose.models.comment || mongoose.model("comment", schema);
export default model;
