import mongoose from "mongoose";

const connectDB =async()=> {
    const MONGOURL = process.env.MONGO_URL; 

    if (!MONGOURL){
      console.error("Mongo_Url is missing in environment");
      process.exit(1);
    }

    try {
      await mongoose.connect(MONGOURL);
      console.log("DB connected successfully");
    } catch(error) {
      console.error("Database connection failed: ",error);
      process.exit(1)
    }


  }

export default connectDB;
   


