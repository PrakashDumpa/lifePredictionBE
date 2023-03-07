import dotenv from "dotenv";
import express from "express";
import connectToDB from "./src/DbConnections/remoteDbAtlas.js";
import CollectSamplesRouter from "./src/Routes/CollectSamples.js";
import cors from "cors";

const app = express();
dotenv.config();

const port = 4000 || process.env.PORT;

app.listen(port, () => {
  console.log("Server is Running at 4000");
});

connectToDB();
app.use(express.json());
app.use(cors());

app.use(CollectSamplesRouter);
