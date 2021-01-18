const mongoose = require("mongoose");
const { Schema } = mongoose;

const allTimeStatsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  honor: {
    type: Number,
    required: true,
  },
  completed: {
    type: Number,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const allTimeStats = mongoose.model("total", allTimeStatsSchema);
module.exports = allTimeStats;
