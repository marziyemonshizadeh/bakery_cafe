const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected successfully");
   
      }
  } catch (err) {
    console.log("connectToDB has err => ", err);
  }
};
export default connectToDB;
