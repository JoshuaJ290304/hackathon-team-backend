const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({

    teamId: String,
    teamName: String,
    teamLeaderName: String,
    leaderEmail: String,
    leaderPhone: String,
    collegeName: String,
    numberOfMembers: String,
    projectTitle: String,
    problemStatementTrack: String,
    technologyStack: String,
    mentorName: String,
    registrationDate: String,
    tableNumber: String

});

module.exports = mongoose.model("teams", TeamSchema);