import Application from "../models/Application.js";

export const submitApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);

    res.status(201).json({
      success: true,
      application
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({
      createdAt: -1
    });

    res.json(applications);
  } catch (err) {
    res.status(500).json({
      success: false
    });
  }
};

export const getApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    res.json(application);
  } catch (err) {
    res.status(500).json({
      success: false
    });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);

    res.json({
      success: true
    });
  } catch (err) {
    res.status(500).json({
      success: false
    });
  }
};