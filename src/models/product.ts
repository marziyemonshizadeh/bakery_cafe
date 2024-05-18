const { default: mongoose } = require("mongoose");
require("./comment")

const schema = mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      shortDescription: {
        type: String,
        required: true,
      },
      longDescription: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      weight: {
        type: Number,
      },
      suitableFor: {
        type: String,
      },
      smell: {
        type: String,
      },
      score: {
        type: String,
        default:5,
      },
      tags: {
        type: [String],
        required: true,
      },
      Inventory: {
        type: Boolean,
        default: true,
      },
    //   one to many
      comments: {
        type: [
          {
            type: mongoose.Types.ObjectId,
            ref: "comment",
          },
        ],
      },
});

const model = mongoose.models.product || mongoose.model("product", schema);
export default model;
