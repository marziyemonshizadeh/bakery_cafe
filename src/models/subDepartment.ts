const { default: mongoose } = require("mongoose");
require("./department");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Types.ObjectId,
    ref: "department",
    required: true,
  },
});

const model =
  mongoose.models.subDepartment || mongoose.model("subDepartment", schema);
export default model;
