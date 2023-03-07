import dotenv from "dotenv";
import express from "express";
import connectToDB from "./src/DbConnections/remoteDbAtlas.js";
import CollectSamplesRouter from "./src/Routes/CollectSamples.js";
import cors from "cors";

const app = express();
dotenv.config();

app.listen(4000, () => {
  console.log("Server is Running at 4000");
});

connectToDB();
app.use(express.json());
app.use(cors());

app.use(CollectSamplesRouter);
