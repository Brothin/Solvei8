import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the schema for Address sub-document
const addressSchema = new Schema({
  detailedAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
});

// Define the main schema for Training Center
const trainingCenterSchema = new Schema({
  centerName: {
    type: String,
    required: [true, "CenterName is required"],
    maxlength: [40, "CenterName must be less than 40 characters"],
  },
  centerCode: {
    type: String,
    required: [true, "CenterCode is required"],
    match: [
      /^[A-Za-z0-9]{12}$/,
      "CenterCode must be exactly 12 alphanumeric characters",
    ],
  },
  address: { type: addressSchema, required: [true, "Address is required"] },
  studentCapacity: { type: Number },
  coursesOffered: { type: [String] },
  createdOn: { type: Date, default: Date.now },
  contactEmail: {
    type: String,
    validate: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"],
  },
  contactPhone: {
    type: String,
    required: [true, "ContactPhone is required"],
    match: [/^\d{10}$/, "Invalid phone number format"],
  },
});

// Create the model
const TrainingCenter = mongoose.model("TrainingCenter", trainingCenterSchema);

export default TrainingCenter;
