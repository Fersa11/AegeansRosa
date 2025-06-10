import Dress from "../models/dress.model.js";
import mongoose from "mongoose";

export const getAllDresses = async (req, res) => {
  try {
    // Fetch all dresses from the database
    const dresses = await Dress.find({});

    res.status(200).json({
      success: true,
      message: "Dresses fetched successfully",
      dresses: dresses
    });
  } catch (error) {
    console.error("Error fetching dresses:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const createDress = async (req, res) => {
  const dress = req.body;
  // Here you would typically save the dress to the database
  if (!dress.category) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newDress = new Dress(dress);
  try {
    await newDress.save();
    res.status(201).json({
      success: true,
      message: "Dress saved successfully",
      dress: newDress
    });
  } catch (error) {
    console.error("Error saving dress:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateDress = async (req, res) => {
  // Extract the ID from the request parameters
  const { id } = req.params;
  const DressData = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid dress ID" });
  }
  try {
    // Find the dress by ID and update it
    const updatedDress = await Dress.findByIdAndUpdate(id, DressData, {
      new: true, // Return the updated document
      runValidators: true // Validate the update against the schema
    });

    if (!updatedDress) {
      return res.status(404).json({ message: "Dress not found" });
    }

    res.status(200).json({
      success: true,
      message: "Dress updated successfully",
      dress: updatedDress
    });
  } catch (error) {
    console.error("Error updating dress:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteDress = async (req, res) => {
  // console.log(req);
  // Extract the ID from the request parameters
  const { id } = req.params;
  try {
    const deletedDress = await Dress.findByIdAndDelete(id);
    if (!deletedDress) {
      return res.status(404).json({ message: "Dress not found" });
    }
    res.status(200).json({
      success: true,
      message: "Dress deleted successfully",
      dress: deletedDress
    });
  } catch (error) {
    console.error("Error deleting dress:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

//Aktuell nicht in Verwendung
// export const getDressById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     // Find the dress by ID
//     const dress = await Dress.findById(id);
//     if (!dress) {
//       return res.status(404).json({ message: "Dress not found" });
//     }
//     res.status(200).json({
//       success: true,
//       message: "Dress fetched successfully",
//       dress: dress
//     });
//   } catch (error) {
//     console.error("Error fetching dress:", error.message);
//     res.status(500).json({ message: "Server error" });
//   }
// };
