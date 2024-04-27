import express from "express";
import trainingCenterController from "../controllers/trainingCenterController.js";

const router = express.Router();

// Define routes
router.post("/", trainingCenterController.createTrainingCenter);
router.get("/", trainingCenterController.getAllTrainingCenters);

export default router;
