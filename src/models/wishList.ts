const mongoose = require("mongoose");
require("./user");
require("./product");

const schema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    productID: {
      type: mongoose.Types.ObjectId,
      ref: "product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Wishlist || mongoose.model("Wishlist", schema);

export default model;
