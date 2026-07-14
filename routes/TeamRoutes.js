const express = require("express");
const TeamModel = require("../models/TeamModel");

const router = express.Router();

// Add Team
router.post("/add-team", async (req, res) => {

    try {

        const team = new TeamModel(req.body);

        await team.save();

        res.json({
            status: "success",
            message: "Team Added Successfully"
        });

    } catch (error) {

        res.json({
            status: "error",
            message: error.message
        });

    }

});

// View All Teams (POST)
router.post("/view-team", async (req, res) => {

    try {

        const data = await TeamModel.find();

        res.json(data);

    } catch (error) {

        res.json({
            status: "error",
            message: error.message
        });

    }

});

module.exports = router;