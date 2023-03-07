import express from "express";
import Sample from "../models/Samples.js";

const CollectSamplesRouter = new express.Router();

const getResult = async (request, response) => {
  try {
    console.log("Accessed - getResult API");
    // CRUD code
    const result = await Sample.find({}).limit(5);
    response.status(200);
    response.send({ availableList: result });
    // CRUD code end
  } catch (err) {
    console.log("Something went wrong in getResult API", err);
    response.status(500);
    response.send({ msg: "Something went wrong!" });
  }
};

const getFinalResult = async (request, response) => {
  try {
    console.log("Accessed - getFinalResult API");
    // CRUD code
    const obj = request.body;
    console.log(obj);
    const result = await Sample.findOne(obj);
    if (result === null) {
      response.status(404);
      response.send({ msg: "No record matched" });
    } else {
      response.status(200);
      response.send({ result: result.healthyLife });
    }

    // CRUD code end
  } catch (err) {
    console.log("Something went wrong in getResult API", err);
    response.status(500);
    response.send({ msg: "Something went wrong!" });
  }
};

const trail = async (request, response) => {
  try {
    console.log("Accessed - trail API");
    // CRUD code
    // const result = await Sample.find({ country: "india" });
    const result = await Sample.aggregate([{ $group: { _id: "$diseases" } }]);
    // console.log(result._id.valueOf());
    response.status(200);
    response.send(result);
    // CRUD code end
  } catch (err) {
    console.log("Something went wrong in trail API", err);
    response.status(500);
    response.send({ msg: "Something went wrong!" });
  }
};

// Routes

CollectSamplesRouter.get("/result", getResult);
CollectSamplesRouter.post("/get-result", getFinalResult);
CollectSamplesRouter.get("/", trail);

export default CollectSamplesRouter;

// const clear = async () => {
//   await Sample.deleteMany();
// };
// clear();
