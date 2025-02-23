import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Load environment variables

export const database_connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Database Connected Successfully!');
    } catch (error) {
        console.error('❌ Error connecting to the database:', error);
        process.exit(1);
    }
};

// ✅ Add this to check if the script runs
console.log("🔄 Trying to connect to MongoDB...");
database_connection();
