

const mongoose = require("mongoose");

const applicationSchema =
  new mongoose.Schema({

    candidateName: String,

    candidateEmail: String,

    employerEmail: String,

    jobTitle: String,

    company: String,

    location: String,

    salary: String,

    description: String,

    resume: String,

    status: {
      type: String,
      default: "Applied"
    }

  });

module.exports =
  mongoose.model(
    "Application",
    applicationSchema
  );