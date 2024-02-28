import { connect } from "mongoose";

const connectToMongo = async () => {
  try {
    await connect(process.env.MONGO_DB_URI as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    if(error instanceof Error){
        console.error("Error connecting to MongoDB: ", error.message);
    }
    console.error(error);
  }
};

export default connectToMongo;