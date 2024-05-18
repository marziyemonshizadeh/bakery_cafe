const Validator = require("fastest-validator");
const validate = new Validator();
const userVaidationSchema = {
  email: { type: "string" },
  password: { type: "string" },
  phoneNumber: { type: "string", positive: true, integer: true },
  userName: { type: "string" },
};
const check = validate.compile(userVaidationSchema);

export default check;
