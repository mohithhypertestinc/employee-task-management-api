const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    assignedTo: {
      type: String,
      required: true,
      trim: true,
    },

    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      default: "MEDIUM",
    },

    status: {
      type: String,
      enum: ["TODO", "IN_PROGRESS", "BLOCKED", "DONE"],
      default: "TODO",
    },
  },
  {
    timestamps: true,
    //automatically adds createdAt and updatedAt fields to the schema
  }
);

module.exports = mongoose.model("Task", taskSchema);