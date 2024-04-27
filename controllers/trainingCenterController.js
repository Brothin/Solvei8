import { validationResult } from "express-validator";
import TrainingCenter from "../models/trainingCenterModel.js";

const createTrainingCenter = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract fields from request body
    const {
      centerName,
      centerCode,
      address,
      studentCapacity,
      coursesOffered,
      contactEmail,
      contactPhone,
    } = req.body;

    // Populate createdOn field with server timestamp
    const createdOn = Date.now();

    // Create new TrainingCenter document
    const newTrainingCenter = new TrainingCenter({
      centerName,
      centerCode,
      address,
      studentCapacity,
      coursesOffered,
      createdOn,
      contactEmail,
      contactPhone,
    });

    // Save the new TrainingCenter document
    await newTrainingCenter.save();

    // Return the newly saved TrainingCenter information
    res.status(201).json(newTrainingCenter);
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error creating training center:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the training center" });
  }
};

const getAllTrainingCenters = async (req, res) => {
  try {
    // Retrieve all training centers from the database
    const trainingCenters = await TrainingCenter.find();

    // Return the list of training centers in JSON format
    res.json(trainingCenters);
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error fetching training centers:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching training centers" });
  }
};

export default {
  createTrainingCenter,
  getAllTrainingCenters,
};
