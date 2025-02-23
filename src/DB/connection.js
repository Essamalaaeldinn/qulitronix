import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let isConnected = false;  // ✅ Track connection status

export const database_connection = async () => {
    if (isConnected) {
        console.log("✅ Using existing database connection");
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;  // ✅ Mark as connected
        console.log("✅ Database Connected Successfully!");
    } catch (error) {
        console.error("❌ Database Connection Failed:", error);
        process.exit(1);
    }
};
