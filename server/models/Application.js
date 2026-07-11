import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    country: { type: String, required: true },
    city: { type: String },
    handle: { type: String, required: true },
    niche: { type: String, required: true },
    platforms: { type: [String], required: true },
    followers: { type: String, required: true },
    avgViews: { type: String },
    profileLink: { type: String, required: true },
    interests: { type: [String] },
    about: { type: String, required: true },
    experience: { type: String },
    heardFrom: { type: String },
    agreeTerms: { type: Boolean, required: true },
    agreePhotos: { type: Boolean, default: false },
    agreeUpdates: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Application", ApplicationSchema);