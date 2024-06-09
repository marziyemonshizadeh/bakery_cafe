const { default: mongoose } = require("mongoose");
require("./user");

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timeStamp: true }
);

const model =
  mongoose.models.department || mongoose.model("department", schema);
export default model;
