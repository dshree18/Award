import express from "express";
import { createAward } from "../controllers/awardController.js"; // Correct import path

const route = express.Router();

// Define the route for creating awards
route.post("/create", createAward);

// Export the route
export default route;
