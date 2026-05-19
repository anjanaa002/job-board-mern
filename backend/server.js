const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

dotenv.config();

const User = require("./models/User");
const Job = require("./models/Job");
const Application = require("./models/Application");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


// REGISTER
app.post("/register", async (req, res) => {

  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role
  });

  res.json(user);
});


// LOGIN
app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ message: "User not found" });
  }

  const validPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!validPassword) {
    return res.json({ message: "Wrong password" });
  }

  res.json(user);
});

// app.put("/update-user/:email",
//   async (req, res) => {

//   const updatedUser =
//     await User.findOneAndUpdate(

//       {
//         email:
//           req.params.email
//       },

//       {
//         name:
//           req.body.name
//       },

//       {
//         new: true
//       }
//     );

//   res.json(updatedUser);
// });



app.put("/update-user/:email", async (req, res) => {

  const updatedUser =
    await User.findOneAndUpdate(

      { email: req.params.email },

      { name: req.body.name },

      { new: true } // VERY IMPORTANT

    );

  res.json({
    name: updatedUser.name,
    email: updatedUser.email
  });
});



app.post("/jobs", async (req, res) => {

  const job = await Job.create({

    title:
      req.body.title,

    company:
      req.body.company,

    location:
      req.body.location,

    salary:
      req.body.salary,

    description:
      req.body.description,

    employerEmail:
      req.body.employerEmail

  });

  res.json(job);
});

// GET JOBS
app.get("/jobs", async (req, res) => {

  const jobs = await Job.find();

  res.json(jobs);
});


// APPLY JOB
// app.post("/apply", async (req, res) => {

//   const application = await Application.create(req.body);

//   res.json(application);
// });

// app.post("/apply", async (req, res) => {

//   const application = await Application.create({

//     candidateName: req.body.candidateName,

//     candidateEmail: req.body.candidateEmail,

//     jobTitle: req.body.jobTitle

//   });

//   res.json(application);
// });


// app.post("/apply", async (req, res) => {

//   const application =
//     await Application.create({

//       candidateName:
//         req.body.candidateName,

//       candidateEmail:
//         req.body.candidateEmail,

//       jobTitle:
//         req.body.jobTitle,

//       resume:
//         req.body.resume

//     });

//   res.json(application);
// });


// app.post("/apply", async (req, res) => {

//   const application =
//     await Application.create({

//       candidateName:
//         req.body.candidateName,

//       candidateEmail:
//         req.body.candidateEmail,

//       employerEmail:
//         req.body.employerEmail,

//       jobTitle:
//         req.body.jobTitle,

//       resume:
//         req.body.resume

//     });

//   res.json(application);
// });

// app.post("/apply", async (req, res) => {

//   const application =
//     await Application.create({

//       candidateName:
//         req.body.candidateName,

//       candidateEmail:
//         req.body.candidateEmail,

//       employerEmail:
//         req.body.employerEmail,

//       jobTitle:
//         req.body.jobTitle,

//       company:
//         req.body.company,

//       location:
//         req.body.location,

//       resume:
//         req.body.resume

//     });

//   res.json(application);
// });


// app.post("/apply", async (req, res) => {

//   const application =
//     await Application.create({

//       candidateName:
//         req.body.candidateName,

//       candidateEmail:
//         req.body.candidateEmail,

//       employerEmail:
//         req.body.employerEmail,

//       jobTitle:
//         req.body.jobTitle,

//       company:
//         req.body.company,

//       location:
//         req.body.location,

//       salary:
//         req.body.salary,

//       description:
//         req.body.description,

//       resume:
//         req.body.resume

//     });

//   res.json(application);
// });


// app.post("/apply", async (req, res) => {

//   const {
//     candidateEmail,
//     jobTitle,
//     employerEmail
//   } = req.body;

//   // 🔥 CHECK IF ALREADY APPLIED
//   const existing =
//     await Application.findOne({

//       candidateEmail,
//       jobTitle,
//       employerEmail

//     });

//   if (existing) {

//     return res.json({
//       message:
//         "Already Applied"
//     });
//   }

//   const application =
//     await Application.create({

//       candidateName:
//         req.body.candidateName,

//       candidateEmail:

//         req.body.candidateEmail,

//       employerEmail:

//         req.body.employerEmail,

//       jobTitle:

//         req.body.jobTitle,

//       company:

//         req.body.company,

//       location:

//         req.body.location,

//       salary:

//         req.body.salary,

//       description:

//         req.body.description,

//       resume:

//         req.body.resume

//     });

//   res.json(application);
// });


app.post("/apply", async (req, res) => {

  const {
    candidateEmail,
    jobTitle,
    employerEmail
  } = req.body;

  // 🔥 DEBUG (optional)
  console.log(req.body);

  // 🔴 STRICT CHECK
  const existing = await Application.findOne({
    candidateEmail: candidateEmail,
    jobTitle: jobTitle,
    employerEmail: employerEmail
  });

  if (existing) {
    return res.json({
      message: "Already Applied"
    });
  }

  const application = await Application.create({
    candidateName: req.body.candidateName,
    candidateEmail,
    employerEmail,
    jobTitle,
    company: req.body.company,
    location: req.body.location,
    salary: req.body.salary,
    description: req.body.description,
    resume: req.body.resume
  });

  return res.json(application);
});



// GET APPLICATIONS
app.get("/applications", async (req, res) => {

  const applications = await Application.find();

  res.json(applications);
});

app.get(
  "/employer-applications/:email",

  async (req, res) => {

    const applications =
      await Application.find({

        employerEmail:
          req.params.email

      });

    res.json(applications);
});

app.delete("/jobs/:id",
  async (req, res) => {

  await Job.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Deleted"
  });
});

// UPDATE STATUS
app.put("/applications/:id", async (req, res) => {

  const updated = await Application.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
});
app.get("/profile/:email", async (req, res) => {

  const user = await User.findOne({
    email: req.params.email
  });



  app.put("/jobs/:id",
  async (req, res) => {

  await Job.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.json({
    message: "Updated"
  });
});

  const applications =
    await Application.find({
      candidateEmail: req.params.email
    });

  res.json({
    user,
    applications
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server Running");
});