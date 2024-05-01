// user is entity
const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    required: true,
    // default:"USER"
  },
  refreshToken:String,
  // refreshToken :{
  //  type:String
  // },
  // rememberMe:{
  //   type: Boolean,
    
  // }
});

const model = mongoose.models.user || mongoose.model("user", schema);
export default model;
