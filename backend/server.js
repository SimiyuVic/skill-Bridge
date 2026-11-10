import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/config.js";


dotenv.config(); // allows us to process environment variables
//create an instance of express
const app = express();

const MYPORT = process.env.PORT;

const startServer = async () => {

    connectDB();

    app.listen(MYPORT, () => {
        console.log(`Listening to request via PORT ${MYPORT}`)
    });

}

startServer();