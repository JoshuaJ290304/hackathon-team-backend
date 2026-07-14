const express = require("express");
const TeamModel = require("../models/TeamModel");

const router = express.Router();

router.post("/add-team", async (req, res) => {

    try {

        const data = new TeamModel(req.body);

        await data.save();

        res.json({
            status: "success",
            message: "Team Added Successfully"
        });

    } catch (error) {

        res.json({
            status: "error",
            message: error
        });

    }

});

module.exports = router;