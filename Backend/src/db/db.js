import { DB_NAME } from "../constants.js";
import mongoose from 'mongoose';

const connectDB = async ()=> {
    try {
        const connectedInstances = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
           console.log(`\n Connected to MongoDB database successfully at HOST: ${connectedInstances.connection.host}`);
    } catch (error) {
        console.log("ERROR: ", error);
        process.exit(1);        
    }
}
export default connectDB;