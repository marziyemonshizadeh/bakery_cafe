const { default: mongoose } = require("mongoose");
require("./user");
require("./department");
require("./subDepartment");

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    department: {
      type: mongoose.Types.ObjectId,
      ref: "department",
      required: true,
    },
    subDepartment: {
      type: mongoose.Types.ObjectId,
      ref: "subDepartment",
      default: false,
    },
    priority: {
      type: Number,
      default: 1,
      enum: [1, 2, 3],
    },
    userID: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timeStamp: true }
);

const model = mongoose.models.ticket || mongoose.model("ticket", schema);
export default model;
