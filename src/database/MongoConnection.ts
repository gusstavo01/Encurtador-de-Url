import mongoose from "mongoose";
import { config } from "../config/Constants";

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION);
            console.log("MongoDB connected");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            process.exitCode = 1;
        }
    }
}
