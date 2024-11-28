import Award from "../models/awardModel.js"; // Correct import path (adjust if necessary)

// Create a new award
export const createAward = async (req, res) => {
    try {
        // Create a new Award instance with the data from the request body
        const awardData = new Award(req.body);

        // Save the award data to the database
        await awardData.save();

        // Return a success response
        res.status(200).json({ msg: "Award Created Successfully" });
    } catch (err) {
        // Handle errors and send a response with the error message
        res.status(500).json({ error: err.message });
    }
};
