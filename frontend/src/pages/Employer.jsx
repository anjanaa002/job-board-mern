// // // import { useEffect, useState } from "react";
// // // import axios from "axios";

// // // function Employer() {

// // //   const [job, setJob] = useState({
// // //     title: "",
// // //     company: "",
// // //     location: "",
// // //     salary: ""
// // //   });

// // //   const [applications, setApplications] =
// // //     useState([]);

// // //   useEffect(() => {

// // //     fetchApplications();

// // //   }, []);

// // //   const fetchApplications = async () => {

// // //     const res = await axios.get(
// // //       "http://localhost:5000/applications"
// // //     );

// // //     setApplications(res.data);
// // //   };

// // //   const addJob = async (e) => {

// // //     e.preventDefault();

// // //     await axios.post(
// // //       "http://localhost:5000/jobs",
// // //       job
// // //     );

// // //     alert("Job Added");
// // //   };

// // //   const updateStatus = async (id, status) => {

// // //     await axios.put(
// // //       `http://localhost:5000/applications/${id}`,
// // //       { status }
// // //     );

// // //     fetchApplications();
// // //   };

// // //   return (
// // //     <div className="container">

// // //       <h1>Employer Dashboard</h1>

// // //       <form onSubmit={addJob}>

// // //         <input
// // //           type="text"
// // //           placeholder="Job Title"
// // //           onChange={(e) =>
// // //             setJob({
// // //               ...job,
// // //               title: e.target.value
// // //             })
// // //           }
// // //         />

// // //         <input
// // //           type="text"
// // //           placeholder="Company"
// // //           onChange={(e) =>
// // //             setJob({
// // //               ...job,
// // //               company: e.target.value
// // //             })
// // //           }
// // //         />

// // //         <input
// // //           type="text"
// // //           placeholder="Location"
// // //           onChange={(e) =>
// // //             setJob({
// // //               ...job,
// // //               location: e.target.value
// // //             })
// // //           }
// // //         />

// // //         <input
// // //           type="text"
// // //           placeholder="Salary"
// // //           onChange={(e) =>
// // //             setJob({
// // //               ...job,
// // //               salary: e.target.value
// // //             })
// // //           }
// // //         />

// // //         <button type="submit">
// // //           Add Job
// // //         </button>

// // //       </form>

// // //       <h2>Applications</h2>

// // //       {
// // //         applications.map((app) => (

// // //           <div className="card" key={app._id}>

// // //             <h3>{app.candidateName}</h3>

// // //             <p>{app.jobTitle}</p>

// // //             <p>Status: {app.status}</p>

// // //             <button
// // //               onClick={() =>
// // //                 updateStatus(
// // //                   app._id,
// // //                   "Shortlisted"
// // //                 )
// // //               }
// // //             >
// // //               Shortlist
// // //             </button>

// // //             <button
// // //               onClick={() =>
// // //                 updateStatus(
// // //                   app._id,
// // //                   "Rejected"
// // //                 )
// // //               }
// // //             >
// // //               Reject
// // //             </button>

// // //           </div>
// // //         ))
// // //       }

// // //     </div>
// // //   );
// // // }

// // // export default Employer;

// // import {
// //   useEffect,
// //   useState
// // } from "react";

// // import axios from "axios";

// // import { Link } from "react-router-dom";

// // function Employer() {

// //   const [job, setJob] =
// //     useState({
// //       title: "",
// //       company: "",
// //       location: "",
// //       salary: ""
// //     });

// //   const [jobs, setJobs] =
// //     useState([]);

// //   const [applications,
// //     setApplications] =
// //     useState([]);

// //   useEffect(() => {

// //     fetchApplications();

// //     fetchJobs();

// //   }, []);

// //   const fetchJobs = async () => {

// //     const res = await axios.get(
// //       "http://localhost:5000/jobs"
// //     );

// //     setJobs(res.data);
// //   };

// //   const fetchApplications =
// //     async () => {

// //       const res =
// //         await axios.get(
// //           "http://localhost:5000/applications"
// //         );

// //       setApplications(res.data);
// //     };

// //   const addJob = async (e) => {

// //     e.preventDefault();

// //     await axios.post(
// //       "http://localhost:5000/jobs",
// //       job
// //     );

// //     alert("Job Added");

// //     fetchJobs();
// //   };

// //   const deleteJob =
// //     async (id) => {

// //       await axios.delete(
// //         `http://localhost:5000/jobs/${id}`
// //       );

// //       fetchJobs();
// //     };

// //   const updateStatus =
// //     async (id, status) => {

// //       await axios.put(
// //         `http://localhost:5000/applications/${id}`,
// //         { status }
// //       );

// //       fetchApplications();
// //     };

// //   return (

// //     <div>

// //       <nav className="navbar">

// //         <Link to="/employer">
// //           Dashboard
// //         </Link>

// //       </nav>

// //       <div className="container">

// //         <h1>Employer Dashboard</h1>

// //         <form onSubmit={addJob}>

// //           <input
// //             type="text"
// //             placeholder="Job Title"
// //             onChange={(e) =>
// //               setJob({
// //                 ...job,
// //                 title: e.target.value
// //               })
// //             }
// //           />

// //           <input
// //             type="text"
// //             placeholder="Company"
// //             onChange={(e) =>
// //               setJob({
// //                 ...job,
// //                 company: e.target.value
// //               })
// //             }
// //           />

// //           <input
// //             type="text"
// //             placeholder="Location"
// //             onChange={(e) =>
// //               setJob({
// //                 ...job,
// //                 location: e.target.value
// //               })
// //             }
// //           />

// //           <input
// //             type="text"
// //             placeholder="Salary"
// //             onChange={(e) =>
// //               setJob({
// //                 ...job,
// //                 salary: e.target.value
// //               })
// //             }
// //           />

// //           <button type="submit">
// //             Add Job
// //           </button>

// //         </form>

// //         <h2>Your Jobs</h2>

// //         {
// //           jobs.map((job) => (

// //             <div
// //               className="card"
// //               key={job._id}
// //             >

// //               <h3>{job.title}</h3>

// //               <button
// //                 onClick={() =>
// //                   deleteJob(job._id)
// //                 }
// //               >
// //                 Delete
// //               </button>

// //             </div>
// //           ))
// //         }

// //         <h2>Applications</h2>

// //         {
// //           applications.map((app) => (

// //             <div
// //               className="card"
// //               key={app._id}
// //             >

// //               <h3>
// //                 {app.candidateName}
// //               </h3>

// //               <p>
// //                 Job: {app.jobTitle}
// //               </p>

// //               <p>
// //                 Resume: {app.resume}
// //               </p>

// //               <p>
// //                 Status: {app.status}
// //               </p>

// //               <button
// //                 onClick={() =>
// //                   updateStatus(
// //                     app._id,
// //                     "Selected"
// //                   )
// //                 }
// //               >
// //                 Accept
// //               </button>

// //               <button
// //                 onClick={() =>
// //                   updateStatus(
// //                     app._id,
// //                     "Rejected"
// //                   )
// //                 }
// //               >
// //                 Reject
// //               </button>

// //             </div>
// //           ))
// //         }

// //       </div>

// //     </div>
// //   );
// // }

// // export default Employer;

// import {
//   useEffect,
//   useState
// } from "react";

// import axios from "axios";

// import { Link } from "react-router-dom";

// function Employer() {

//   const [job, setJob] =
//     useState({
//       title: "",
//       company: "",
//       location: "",
//       salary: ""
//     });

//   const [jobs, setJobs] =
//     useState([]);

//   const [applications,
//     setApplications] =
//     useState([]);

//   useEffect(() => {

//     fetchJobs();

//     fetchApplications();

//   }, []);

//   const fetchJobs = async () => {

//     const res = await axios.get(
//       "http://localhost:5000/jobs"
//     );

//     setJobs(res.data);
//   };

//   const fetchApplications =
//     async () => {

//       const res =
//         await axios.get(
//           "http://localhost:5000/applications"
//         );

//       setApplications(res.data);
//     };

//   const addJob = async (e) => {

//     e.preventDefault();

//     await axios.post(
//       "http://localhost:5000/jobs",
//       job
//     );

//     alert("Job Added");

//     fetchJobs();
//   };

//   const deleteJob =
//     async (id) => {

//       await axios.delete(
//         `http://localhost:5000/jobs/${id}`
//       );

//       fetchJobs();
//     };

//   const updateStatus =
//     async (id, status) => {

//       await axios.put(
//         `http://localhost:5000/applications/${id}`,
//         { status }
//       );

//       fetchApplications();
//     };

//   return (

//     <div>

//       <nav className="navbar">

//         <Link to="/employer">
//           Add Job
//         </Link>

//         <Link to="/employer">
//           Applications
//         </Link>

//       </nav>

//       <div className="container">

//         <h1>Employer Dashboard</h1>

//         <form onSubmit={addJob}>

//           <input
//             type="text"
//             placeholder="Job Title"
//             onChange={(e) =>
//               setJob({
//                 ...job,
//                 title: e.target.value
//               })
//             }
//           />

//           <input
//             type="text"
//             placeholder="Company"
//             onChange={(e) =>
//               setJob({
//                 ...job,
//                 company: e.target.value
//               })
//             }
//           />

//           <input
//             type="text"
//             placeholder="Location"
//             onChange={(e) =>
//               setJob({
//                 ...job,
//                 location: e.target.value
//               })
//             }
//           />

//           <input
//             type="text"
//             placeholder="Salary"
//             onChange={(e) =>
//               setJob({
//                 ...job,
//                 salary: e.target.value
//               })
//             }
//           />

//           <button type="submit">
//             Add Job
//           </button>

//         </form>

//         <h2>Your Jobs</h2>

//         {
//           jobs.map((job) => (

//             <div
//               className="card"
//               key={job._id}
//             >

//               <h3>{job.title}</h3>

//               <button
//                 onClick={() =>
//                   deleteJob(job._id)
//                 }
//               >
//                 Delete
//               </button>

//             </div>
//           ))
//         }

//         <h2>Applications</h2>

//         {
//           applications.map((app) => (

//             <div
//               className="card"
//               key={app._id}
//             >

//               <h3>
//                 {app.candidateName}
//               </h3>

//               <p>
//                 Job: {app.jobTitle}
//               </p>

//               <p>
//                 Resume: {app.resume}
//               </p>

//               <p>
//                 Status: {app.status}
//               </p>

//               <button
//                 onClick={() =>
//                   updateStatus(
//                     app._id,
//                     "Selected"
//                   )
//                 }
//               >
//                 Accept
//               </button>

//               <button
//                 onClick={() =>
//                   updateStatus(
//                     app._id,
//                     "Rejected"
//                   )
//                 }
//               >
//                 Reject
//               </button>

//             </div>
//           ))
//         }

//       </div>

//     </div>
//   );
// }

// export default Employer;


import {
  useEffect,
  useState
} from "react";

import axios from "axios";

function Employer() {

  const employerEmail =
    localStorage.getItem("email");

  const [job, setJob] =
    useState({
      title: "",
      company: "",
      location: "",
      salary: ""
    });

  const [jobs, setJobs] =
    useState([]);

  const [applications,
    setApplications] =
    useState([]);

  useEffect(() => {

    fetchJobs();

    fetchApplications();

  }, []);

  const fetchJobs = async () => {

    const res = await axios.get(
      "http://localhost:5000/jobs"
    );

    const filtered =
      res.data.filter(
        (job) =>
          job.employerEmail ===
          employerEmail
      );

    setJobs(filtered);
  };

  const fetchApplications =
    async () => {

      const res =
        await axios.get(
          `http://localhost:5000/employer-applications/${employerEmail}`
        );

      setApplications(res.data);
    };

  const addJob = async (e) => {

    e.preventDefault();

    await axios.post(
      "http://localhost:5000/jobs",
      {
        ...job,
        employerEmail
      }
    );

    alert("Job Added");

    fetchJobs();
  };

  const deleteJob =
    async (id) => {

      await axios.delete(
        // `http://localhost:5000/jobs/${id}`
        `https://job-board-mern-grfk.onrender.com/jobs/${id}`
      );

      fetchJobs();
    };

  const updateStatus =
    async (id, status) => {

      await axios.put(
        `http://localhost:5000/applications/${id}`,
        { status }
      );

      fetchApplications();
    };

  return (

    <div>

      <nav className="navbar">

        <a href="#addjob">
          Add Job
        </a>

        <a href="#myjobs">
          My Jobs
        </a>

        <a href="#applications">
          Applications
        </a>

      </nav>

      <div className="container">

        <section id="addjob">

          <h1>Add Job</h1>

          <form onSubmit={addJob}>

            <input
              type="text"
              placeholder="Job Title"
              onChange={(e) =>
                setJob({
                  ...job,
                  title: e.target.value
                })
              }
            />

            <input
              type="text"
              placeholder="Company"
              onChange={(e) =>
                setJob({
                  ...job,
                  company: e.target.value
                })
              }
            />

            <input
              type="text"
              placeholder="Location"
              onChange={(e) =>
                setJob({
                  ...job,
                  location: e.target.value
                })
              }
            />

            <input
              type="text"
              placeholder="Salary"
              onChange={(e) =>
                setJob({
                  ...job,
                  salary: e.target.value
                })
              }
            />

            <button type="submit">
              Add Job
            </button>

          </form>

        </section>

        <section id="myjobs">

          <h1>My Jobs</h1>

          {
            jobs.map((job) => (

              <div
                className="card"
                key={job._id}
              >

                <h3>{job.title}</h3>

                <p>{job.company}</p>

                <button
                  onClick={() =>
                    deleteJob(job._id)
                  }
                >
                  Delete
                </button>

              </div>
            ))
          }

        </section>

        <section id="applications">

          <h1>Applications</h1>

          {
            applications.map((app) => (

              <div
                className="card"
                key={app._id}
              >

                <h3>
                  {app.candidateName}
                </h3>

                <p>
                  Job: {app.jobTitle}
                </p>

                <p>
                  Resume: {app.resume}
                </p>

                <p>
                  Status: {app.status}
                </p>

                <button
                  onClick={() =>
                    updateStatus(
                      app._id,
                      "Selected"
                    )
                  }
                >
                  Accept
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      app._id,
                      "Rejected"
                    )
                  }
                >
                  Reject
                </button>

              </div>
            ))
          }

        </section>

      </div>

    </div>
  );
}

export default Employer;