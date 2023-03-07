import mongoose from "mongoose";

const SamplesSchema = new mongoose.Schema({
  geneDescription: {
    type: String,
  },
  accessionNo: String,
  dob: Number,
  country: String,
  avc: Number,
  gender: {
    type: String,
    unique: false,
  },
  climaticCondition: String,
  diseases: String,
  stages: Number,
  startAge: Number,
  disLifeExp: Number,
  inherited: String,
  an: String,
  sn: String,
  smage: Number,
  avsmexp: Number,
  healthyLife: Number,
});

const Sample = new mongoose.model("Sample", SamplesSchema);

export default Sample;
