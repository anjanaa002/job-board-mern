// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // function Jobs() {
// //      const loggedIn =
// //     localStorage.getItem("loggedIn");

// //   if (!loggedIn) {

// //     return <h1>Please Login First</h1>;
// //   }

// //   const [jobs, setJobs] = useState([]);

// //   useEffect(() => {

// //     fetchJobs();

// //   }, []);

// //   const fetchJobs = async () => {

// //     const res = await axios.get(
// //       "http://localhost:5000/jobs"
// //     );

// //     setJobs(res.data);
// //   };

// // //   const applyJob = async (title) => {

// // //     const candidateName = prompt(
// // //       "Enter your name"
// // //     );

// // //     await axios.post(
// // //       "http://localhost:5000/apply",
// // //       {
// // //         candidateName,
// // //         jobTitle: title
// // //       }
// // //     );

// // //     alert("Applied Successfully");
// // //   };

// // const applyJob = async (title) => {

// //   const candidateName =
// //     prompt("Enter your name");

// //   const candidateEmail =
// //     prompt("Enter your email");

// //   await axios.post(
// //     "http://localhost:5000/apply",
// //     {
// //       candidateName,
// //       candidateEmail,
// //       jobTitle: title
// //     }
// //   );

// //   alert("Applied Successfully");
// // };
// //   return (
// //     <div className="container">

// //       <h1>Jobs</h1>

// //       {
// //         jobs.map((job) => (

// //           <div className="card" key={job._id}>

// //             <h2>{job.title}</h2>

// //             <p>{job.company}</p>

// //             <p>{job.location}</p>

// //             <p>{job.salary}</p>

// //             <button
// //               onClick={() =>
// //                 applyJob(job.title)
// //               }
// //             >
// //               Apply
// //             </button>

// //           </div>
// //         ))
// //       }

// //     </div>
// //   );
// // }

// // export default Jobs;

// import {
//   useEffect,
//   useState
// } from "react";

// import axios from "axios";

// import { Link } from "react-router-dom";

// function Jobs() {

//   const loggedIn =
//     localStorage.getItem("loggedIn");

//   if (!loggedIn) {

//     return <h1>Please Login First</h1>;
//   }

//   const [jobs, setJobs] =
//     useState([]);

//   useEffect(() => {

//     fetchJobs();

//   }, []);

//   const fetchJobs = async () => {

//     const res = await axios.get(
//       "http://localhost:5000/jobs"
//     );

//     setJobs(res.data);
//   };

//   const applyJob = async (title) => {

//     const candidateName =
//       prompt("Enter your name");

//     const candidateEmail =
//       localStorage.getItem("email");

//     const resume =
//       prompt("Enter Resume Link or Filename");

//     await axios.post(
//       "http://localhost:5000/apply",
//       {
//         candidateName,
//         candidateEmail,
//         jobTitle: title,
//         resume
//       }
//     );

//     alert("Application Successful");
//   };

//   return (

//     <div>

//       <nav className="navbar">

//         <Link to="/jobs">
//           Jobs
//         </Link>

//         <Link to="/profile">
//           Profile
//         </Link>

//       </nav>

//       <div className="container">

//         <h1>Jobs</h1>

//         {
//           jobs.map((job) => (

//             <div
//               className="card"
//               key={job._id}
//             >

//               <h2>{job.title}</h2>

//               <p>{job.company}</p>

//               <p>{job.location}</p>

//               <p>{job.salary}</p>

//               <button
//                 onClick={() =>
//                   applyJob(job.title)
//                 }
//               >
//                 Apply
//               </button>

//             </div>
//           ))
//         }

//       </div>

//     </div>
//   );
// }

// export default Jobs;

import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import { Link } from "react-router-dom";

function Jobs() {

  const loggedIn =
    localStorage.getItem("loggedIn");

  if (!loggedIn) {

    return <h1>Please Login First</h1>;
  }

  const logout = () => {

  localStorage.clear();

  window.location.href = "/";
};

  const [jobs, setJobs] =
    useState([]);

const [search,
  setSearch] =
  useState("");

const [location,
  setLocation] =
  useState("");

const [salary,
  setSalary] =
  useState("");

  useEffect(() => {

    fetchJobs();

  }, []);

  const fetchJobs = async () => {

    const res = await axios.get(
      "http://localhost:5000/jobs"
    );

    setJobs(res.data);
  };

  const applyJob = async (job) => {

    // const candidateName =
    //   prompt("Enter your name");
    const candidateName =
  localStorage.getItem("name");

    const candidateEmail =
      localStorage.getItem("email");

    const resumeFile =
      document.createElement("input");

    resumeFile.type = "file";

    resumeFile.onchange = async () => {

      const file =
        resumeFile.files[0];
        if (!file) return;

    //   await axios.post(
    //     "http://localhost:5000/apply",
    //     {
    //       candidateName,
    //       candidateEmail,
    //       jobTitle: title,
    //       resume: file.name
    //     }
    //   );

   const res =  await axios.post(
  // "http://localhost:5000/apply",

  "https://job-board-mern-grfk.onrender.com/apply",
//   {
//     candidateName,
//     candidateEmail,
//     employerEmail:
//       job.employerEmail,
//     // jobTitle: job.title,
//     // resume: file.name
//     jobTitle: job.title,

// company: job.company,

// location: job.location,

// resume: file.name
//   }

{
  candidateName,

  candidateEmail,

  employerEmail:
    job.employerEmail,

  jobTitle:
    job.title,

  company:
    job.company,

  location:
    job.location,

    
    salary:
    job.salary,
    
    description:
    job.description,

    resume:
      file.name
}
);

      // alert(
      //   "Application Successful"
      // );
      if (res.data.message === "Already Applied") {
  alert("You already applied for this job");
} else {
  alert("Application Successful");
}
    };
    alert("Please upload your resume");

    resumeFile.click();
  };

  return (

    <div>

      <nav className="navbar">

        <Link to="/jobs">
          Jobs
        </Link>

        <Link to="/profile">
          Profile
        </Link>
  <button onClick={logout}
   className="logout-btn">
  Logout
</button>
  
      </nav>

      <div className="container">

        <div className="filters">

  <input
    type="text"
    placeholder="Search Role"
    onChange={(e)=>
      setSearch(e.target.value)
    }
  />

  <input
    type="text"
    placeholder="Filter Location"
    onChange={(e)=>
      setLocation(e.target.value)
    }
  />

  <input
    type="text"
    placeholder="Filter Salary"
    onChange={(e)=>
      setSalary(e.target.value)
    }
  />

</div>

        <h1>Available Jobs</h1>

        {/* {
          jobs.map((job) => ( */}
          {
  jobs
  .filter((job)=>

    job.title
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )

    &&

    job.location
      .toLowerCase()
      .includes(
        location.toLowerCase()
      )

    &&

    job.salary
      .toLowerCase()
      .includes(
        salary.toLowerCase()
      )
  )

  .map((job)=>(

            <div
              className="card"
              key={job._id}
            >

              <h2>{job.title}</h2>

              <p> Company: {job.company}</p>

              <p> Location: {job.location}</p>

              <p> Salary: {job.salary}</p>

              <p>
  Description:
  {job.description}
</p>

              <button
                onClick={() =>
                //   applyJob(job.title)
                applyJob(job)
                }
              >
                Apply
              </button>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Jobs;