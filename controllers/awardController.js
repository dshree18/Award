// awardController.js
import Award from "../models/awardModel.js"; // Import the Award model
export const createAward = async (req, res) => {
    try {
        const awardData = new Award(req.body);
        await awardData.save();
        res.status(200).json({ msg: "Award Created Successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



// Fetch award data (assuming we're using the ID or any other criteria to find awards)
export const getAwardsall = async (req, res) => {
    try {
        // Assuming we're looking for an award by its ID, or you can customize it based on your needs
        const awardData = await Award.find(req.body);  // Find an award based on the provided criteria (e.g., award ID, year, etc.)

        if (!awardData) {
            return res.status(404).json({ msg: "Award not found" });  // Return 404 if no award is found
        }

        res.status(200).json(awardData);  // Return the found award data

    } catch (err) {
        res.status(500).json({ error: err.message });  // Return any errors encountered during the request
    }
};

export const getAwardsone = async (req, res) => {
    try {
        // Assuming we're looking for an award by its ID, or you can customize it based on your needs
        const awardData = await Award.findOne(req.body);  // Find an award based on the provided criteria (e.g., award ID, year, etc.)

        if (!awardData) {
            return res.status(404).json({ msg: "Award not found" });  // Return 404 if no award is found
        }

        res.status(200).json(awardData);  // Return the found award data

    } catch (err) {
        res.status(500).json({ error: err.message });  // Return any errors encountered during the request
    }
};







export const deleteAward = async (req, res) => {
    try {
        const { id } = req.body; // Get the ID from the request body

        if (!id) {
            return res.status(608).json({ msg: "Award ID bari guru" });
        }

        const deletedAward = await Award.findByIdAndDelete(id); // Delete the award by ID

        if (!deletedAward) {
            return res.status(404).json({ msg: "Award not found for the given ID" });
        }

        res.status(200).json({ msg: "Award deleted successfully", deletedAward });
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({ error: "Internal server error" });
    }
};


export const updateAward = async (req, res) => {
try {
    const { id, updatedData } = req.body; // Get the ID and updated data from the request body

    if (!id) {
        return res.status(608).json({ msg: "Award ID bari guru" });
    }

    if (!updatedData) {
        return res.status(400).json({ msg: "No data provided to update" });
    }

    const updatedAward = await Award.findByIdAndUpdate(id, updatedData, { new: true }); // Update the award by ID and return the new document

    if (!updatedAward) {
        return res.status(404).json({ msg: "Award not found for the given ID" });
    }

    res.status(200).json({ msg: "Award updated successfully", updatedAward });
} catch (err) {
    console.error(err); // Log the error
    res.status(500).json({ error: "Internal server error" });
}
}
