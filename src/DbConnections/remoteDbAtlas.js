import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const db =
  "mongodb+srv://prakashdumpa:prakashdumpa@cluster0.vbghxsv.mongodb.net/krishna?retryWrites=true&w=majority";

const connectToDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database Connected Successfully");
  } catch (error) {
    console.log("Could not connected to db");
  }
};

export default connectToDB;
