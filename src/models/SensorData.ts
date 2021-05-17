import mongoose from "mongoose";

const { Schema } = mongoose;

const SensorDataSchema = new Schema({
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  }
});

export default mongoose.model("SensorData", SensorDataSchema);
