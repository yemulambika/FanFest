import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    country: String,
    city: String,

    creatorName: String,

    niche: String,

    platforms: [String],

    followers: String,

    averageViews: String,

    profileLink: String,

    participation: [String],

    about: String,

    previousExperience: String,

    source: String,

    agreeTerms: Boolean,

    marketingConsent: Boolean,

    updatesConsent: Boolean
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Application", ApplicationSchema);