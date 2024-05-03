// user is entity
const { default: mongoose } = require("mongoose");
const schema = mongoose.Schema({
  userName: {
    type: String,
    // min:5,
    // max:12,
    required: true,
  },
  email: {
    type: String,
    // min: 8,
    // max: 30,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    // min: 8,
    // max: 200,
    required: true,
  },
  role:{
    type:String,
    default:"USER"
  },
  refreshToken: String,
  // rememberMe:{
  //   type: Boolean,
    
  // }
});

const model = mongoose.models.user || mongoose.model("user", schema);
export default model;
