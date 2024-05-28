const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  email: {
    type: String,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    min: 2,
    max: 200,
    required: true,
  },
});

const model = mongoose.models.contact || mongoose.model("contact", schema);
export default model;
