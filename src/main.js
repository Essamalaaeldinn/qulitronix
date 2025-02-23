import express from "express";
import { config } from "dotenv";
config();
import routerHandler from "./utils/router-handler.utils.js";
import { database_connection } from "./DB/connection.js";

const bootstrap = async () => {
    const app = express();
    app.use(express.json());
    await database_connection();
    routerHandler(app);

    return app;  // ✅ Return Express app instead of listening inside this function
};

export default bootstrap;
