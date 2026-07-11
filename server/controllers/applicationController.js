import Application from "../models/Application.js";

// Create a new application
const createApplication = async (req, res) => {
  try {
    // Validate required fields
    const requiredFields = ["firstName", "lastName", "email", "country", "handle", "niche", "platforms", "followers", "profileLink", "about", "agreeTerms"];
    
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ 
          message: `Missing required field: ${field}` 
        });
      }
    }

    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all applications (newest first)
const getApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createApplication, getApplications };