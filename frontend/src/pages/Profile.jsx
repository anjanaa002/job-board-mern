// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // function Profile() {

// //   const [data, setData] = useState(null);

// //   useEffect(() => {

// //     const email =
// //       localStorage.getItem("email");

// //     fetchProfile(email);

// //   }, []);

// //   const fetchProfile = async (email) => {

// //     const res = await axios.get(
// //       `http://localhost:5000/profile/${email}`
// //     );

// //     setData(res.data);
// //   };

// //   if (!data) {

// //     return <h1>Loading...</h1>;
// //   }

// //   return (

// //     <div className="container">

// //       <h1>Candidate Profile</h1>

// //       <h2>{data.user.name}</h2>

// //       <p>{data.user.email}</p>
// //       <button
// //   onClick={() => window.location.href="/jobs"}
// // >
// //   View Jobs
// // </button>

// //       <h2>Applied Jobs</h2>

// //       {
// //         data.applications.map((app) => (

// //           <div className="card" key={app._id}>

// //             <h3>{app.jobTitle}</h3>

// //             <p>Status: {app.status}</p>

// //           </div>
// //         ))
// //       }

// //     </div>
// //   );
// // }

// // export default Profile;

// import {
//   useEffect,
//   useState
// } from "react";

// import axios from "axios";

// import { Link } from "react-router-dom";

// function Profile() {

//   const [data, setData] =
//     useState(null);

//   useEffect(() => {

//     const email =
//       localStorage.getItem("email");

//     fetchProfile(email);

//   }, []);

//   const fetchProfile =
//     async (email) => {

//       const res =
//         await axios.get(
//           `http://localhost:5000/profile/${email}`
//         );

//       setData(res.data);
//     };

//   if (!data) {

//     return <h1>Loading...</h1>;
//   }

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

//         <h1>Candidate Profile</h1>

//         <h2>{data.user.name}</h2>

//         <p>{data.user.email}</p>

//         <h2>Applied Jobs</h2>

//         {
//           data.applications.map((app) => (

//             <div
//               className="card"
//               key={app._id}
//             >

//               <h3>{app.jobTitle}</h3>

//               <p>
//                 Resume: {app.resume}
//               </p>

//               <p>
//                 Status: {app.status}
//               </p>

//             </div>
//           ))
//         }

//       </div>

//     </div>
//   );
// }

// export default Profile;
import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import { Link } from "react-router-dom";

function Profile() {


    const logout = () => {

  localStorage.clear();

  window.location.href = "/";
}; 

  const [data, setData] =
    useState(null);

  useEffect(() => {

    const email =
      localStorage.getItem("email");

    fetchProfile(email);

  }, []);

  const fetchProfile =
  // console.log("PROFILE DATA:", res.data);
    async (email) => {

      const res =
        await axios.get(
          `http://localhost:5000/profile/${email}`
        );

      setData(res.data);
    };

  if (!data) {

    return <h1>Loading...</h1>;
  }

//   const editName =
//   async () => {

//     const newName =
//       prompt(
//         "Enter New Name"
//       );

//     if (!newName) return;

//     const email =
//       localStorage.getItem(
//         "email"
//       );

//     const res =
//       await axios.put(

//         `http://localhost:5000/update-user/${email}`,

//         {
//           name: newName
//         }
//       );

//     localStorage.setItem(
//       "name",
//       res.data.name
//     );

//     fetchProfile(email);

//     alert("Name Updated");
// };


const editName = async () => {

  const newName = prompt("Enter New Name");

  if (!newName) return;

  const email = localStorage.getItem("email");

  const res = await axios.put(
    `http://localhost:5000/update-user/${email}`,
    { name: newName }
  );

  // 🔥 IMPORTANT: update localStorage
  localStorage.setItem("name", res.data.name);

  // 🔥 IMPORTANT: force refresh profile data
  fetchProfile(email);
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

        <h1>Candidate Profile</h1>

        <h2>{data.user.name}</h2>

<button
  onClick={editName}
>
  Edit Name
</button>

        <p>{data.user.email}</p>

        <h2>Applied Jobs</h2>

        {
          data.applications.map((app) => (

            <div
              className="card"
              key={app._id}
            >

              {/* <h3>{app.jobTitle}</h3>

              <p>
                Resume: {app.resume}
              </p>

              <p>
                Status: {app.status}
              </p> */}

              <h3>{app.jobTitle}</h3>

<p>
  Company:
  {app.company}
</p>

<p>
  Location:
  {app.location}
</p>

<p>
  Salary:
  {app.salary}
</p>

<p>
  Description:
  {app.description}
</p>

<p>
  Resume:
  {app.resume}
</p>

<p>
  Status:
  {app.status}
</p>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Profile;