import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },
    gender: {
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

    // 🔥 UPDATED LOCATION STRUCTURE (IMPORTANT)
    location: {
      formattedAddress: {
        type: String,
        trim: true,
      },

      country: {
        type: String,
        trim: true,
      },

      division: {
        type: String,
        trim: true,
      },

      district: {
        type: String,
        trim: true,
      },

      city: {
        type: String,
        trim: true,
      },

      area: {
        type: String,
        trim: true,
      },

      // optional multiple nearby areas
      neighbourhoods: [
        {
          type: String,
        },
      ],

      // 🔥 GEO LOCATION (MANDATORY FOR MAP / NEARBY SEARCH)
      coordinates: {
        type: {
          type: String,
          enum: ["Point"],
          default: "Point",
        },
        coordinates: {
          type: [Number], // [lng, lat]
          required: true,
        },
      },

      // 🔥 tutor radius (how far they can teach)
      radiusKm: {
        type: Number,
        default: 3,
      },
    },

    // Current Education
    currentInstitution: {
      type: String,
      trim: true,
    },

    department: {
      type: String,
      trim: true,
    },

    currentYear: {
      type: String,
      trim: true,
    },
    studentId: {
      type: String,

    },
    // SSC Info
    sscSchool: {
      type: String,
      trim: true,
    },

    sscGroup: {
      type: String,
      trim: true,
    },

    sscResult: {
      type: String,
      trim: true,
    },

    sscMedium: {
      type: String,
      trim: true,
    },

    // HSC Info
    hscCollege: {
      type: String,
      trim: true,
    },

    hscGroup: {
      type: String,
      trim: true,
    },

    hscResult: {
      type: String,
      trim: true,
    },

    hscMedium: {
      type: String,
      trim: true,
    },

    // Teaching Info
    teachClass: {
      type: String,
      trim: true,
    },

    teachSubjects: {
      type: String,
      trim: true,
    },

    preferredMedium: {
      type: String,
      trim: true,
    },

    tuitionType: {
      type: String, // Home / Online
      trim: true,
    },

    expectedSalary: {
      type: String,
      trim: true,
    },

    availableTime: {
      type: String,
      trim: true,
    },

    experience: {
      type: String,
      trim: true,
    },

    notes: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

/**
 * 🔥 GEO INDEX (CRITICAL FOR NEARBY SEARCH)
 * This enables:
 * - find tutors near me
 * - radius filtering
 * - map-based search
 */
tutorSchema.index({ "location.coordinates": "2dsphere" });

export default mongoose.models.Tutor ||
  mongoose.model("Tutor", tutorSchema);