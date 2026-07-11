import express from "express";

import {
  submitApplication,
  getApplications,
  getApplication,
  deleteApplication
} from "../controllers/applicationController.js";

const router = express.Router();

router.post("/", submitApplication);

router.get("/", getApplications);

router.get("/:id", getApplication);

router.delete("/:id", deleteApplication);

export default router;