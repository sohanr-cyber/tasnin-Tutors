import mongoose from "mongoose";

const tutorRequestSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      trim: true,
    },
    guardianName: {
      type: String,
      trim: true,
    },

    studentName: {
      type: String,
      trim: true,
    },

    studentClass: {
      type: String,
      trim: true,
    },

    medium: {
      type: String,
      trim: true,
    },

    subjects: {
      type: String,
      trim: true,
    },

    tutorPreference: {
      type: String, // Male / Female / Any
      trim: true,
    },

    tutorBackground: {
      type: String, // BUET / DU / Medical etc.
      trim: true,
    },

    address: {
      type: String,
      trim: true,
    },

    tuitionType: {
      type: String, // Home / Online
      trim: true,
    },

    schedule: {
      type: String,
      trim: true,
    },

    budget: {
      type: String,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    whatsapp: {
      type: String,
      trim: true,
    },

    facebook: {
      type: String,
      trim: true,
    },

    notes: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["pending", "processing", "matched", "completed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Requirement = mongoose.models.Requirement || mongoose.model('Requirement', tutorRequestSchema)
export default Requirement