// import {
//   useEffect,
//   useState
// } from "react";

// import axios from "axios";

// import { Link } from "react-router-dom";

// function Applications() {

//   const [applications,
//     setApplications] =
//     useState([]);

//   const employerEmail =
//     localStorage.getItem("email");

//   const logout = () => {

//     localStorage.clear();

//     window.location.href = "/";
//   };

//   useEffect(() => {

//     fetchApplications();

//   }, []);

//   const fetchApplications =
//     async()=>{

//       const res =
//         await axios.get(
//           // `http://localhost:5000/employer-applications/${employerEmail}`
//           `https://job-board-mern-grfk.onrender.com/employer-applications/${employerEmail}`
//         );

//       setApplications(res.data);
//     };

//   const updateStatus =
//     async(id,status)=>{

//       await axios.put(
//         // `http://localhost:5000/applications/${id}`,
//         `https://job-board-mern-grfk.onrender.com/applications/${id}`,
//         {status}
//       );

//       fetchApplications();
//     };

//   return (

//     <div>

//       <nav className="navbar">

//         <Link to="/add-job">
//           Add Job
//         </Link>

//         <Link to="/my-jobs">
//           My Jobs
//         </Link>

//         <Link to="/applications">
//           Applications
//         </Link>

//         <button onClick={logout}
//          className="logout-btn">
//           Logout
//         </button>

//       </nav>

//       <div className="container">

//         <h1>Applications</h1>

//         {
//           applications.map((app)=>(

//             <div
//               className="card"
//               key={app._id}
//             >

//               <h3>
//                 {app.candidateName}
//               </h3>

//               <p>
//                 Email:
//                 {app.candidateEmail}
//               </p>

//               <p>
//                 Job Role:
//                 {app.jobTitle}
//               </p>

//               <p>
//                 Company:
//                 {app.company}
//               </p>

//               <p>
//                 Location:
//                 {app.location}
//               </p>

//               <p>
//   Salary:
//   {app.salary}
// </p>

// <p>
//   Description:
//   {app.description}
// </p>

//               <p>
//                 Resume:
//                 {app.resume}
//               </p>

//               <p>
//                 Status:
//                 {app.status}
//               </p>

//               {/* <button
//                 onClick={()=>
//                   updateStatus(
//                     app._id,
//                     "Shortlisted"
//                   )
//                 }
//               >
//                 Accept
//               </button> */}

//               {/* <button
//                 onClick={()=>
//                   updateStatus(
//                     app._id,
//                     "Rejected"
//                   )
//                 }
//               >
//                 Reject
//               </button> */}

//               {
//   !app.status || app.status === "Applied" && (

//     <div>

//       <button
//         onClick={() =>
//           updateStatus(
//             app._id,
//             "Shortlisted"
//           )
//         }
//       >
//         Shortlist
//       </button>

//       <button
//         onClick={() =>
//           updateStatus(
//             app._id,
//             "Rejected"
//           )
//         }
//       >
//         Reject
//       </button>

//     </div>
//   )
// }

//             </div>
//           ))
//         }

//       </div>

//     </div>
//   );
// }

// export default Applications;





import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Applications() {
  const [applications, setApplications] = useState([]);

  const employerEmail = localStorage.getItem("email");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(
        `https://job-board-mern-grfk.onrender.com/employer-applications/${employerEmail}`
      );
      setApplications(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `https://job-board-mern-grfk.onrender.com/applications/${id}`,
        { status }
      );

      fetchApplications(); // refresh after update
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <Link to="/add-job">Add Job</Link>
        <Link to="/my-jobs">My Jobs</Link>
        <Link to="/applications">Applications</Link>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </nav>

      {/* CONTENT */}
      <div className="container">
        <h1>Applications</h1>

        {applications.length === 0 ? (
          <p>No applications found</p>
        ) : (
          applications.map((app) => (
            <div className="card" key={app._id}>
              <h3>{app.candidateName}</h3>

              <p>Email: {app.candidateEmail}</p>
              <p>Job Role: {app.jobTitle}</p>
              <p>Company: {app.company}</p>
              <p>Location: {app.location}</p>
              <p>Salary: {app.salary}</p>
              <p>Description: {app.description}</p>
              <p>Resume: {app.resume}</p>

              <p>
                Status:{" "}
                <b>{app.status ? app.status : "Applied"}</b>
              </p>

              {/* BUTTON LOGIC FIXED */}
              {(!app.status || app.status === "Applied") && (
                <div>
                  <button
                    onClick={() =>
                      updateStatus(app._id, "Shortlisted")
                    }
                  >
                    Shortlist
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(app._id, "Rejected")
                    }
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Applications;
