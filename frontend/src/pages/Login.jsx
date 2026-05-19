// // // import { useState } from "react";
// // // import axios from "axios";

// // // function Login() {

// // //   const [email, setEmail] = useState("");

// // //   const [password, setPassword] = useState("");

// // //   const handleLogin = async (e) => {

// // //     e.preventDefault();

// // //     const res = await axios.post(
// // //       "http://localhost:5000/login",
// // //       {
// // //         email,
// // //         password
// // //       }
// // //     );

// // //     alert("Login Success");
// // //     console.log(res.data);
// // //   };

// // //   return (
// // //     <div className="container">

// // //       <h1>Login</h1>

// // //       <form onSubmit={handleLogin}>

// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           onChange={(e) =>
// // //             setEmail(e.target.value)
// // //           }
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           onChange={(e) =>
// // //             setPassword(e.target.value)
// // //           }
// // //         />

// // //         <button type="submit">
// // //           Login
// // //         </button>

// // //       </form>

// // //     </div>
// // //   );
// // // }

// // // export default Login;

// // import { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // function Login() {

// //   const navigate = useNavigate();

// //   const [email, setEmail] = useState("");

// //   const [password, setPassword] = useState("");

// //   const handleLogin = async (e) => {

// //     e.preventDefault();

// //     try {

// //       const res = await axios.post(
// //         "http://localhost:5000/login",
// //         {
// //           email,
// //           password
// //         }
// //       );

// //       alert("Login Success");

// //       if (res.data.role === "employer") {

// //         navigate("/employer");

// //       } else {

// //         navigate("/");

// //       }

// //     } catch (error) {

// //       alert("Login Failed");

// //     }
// //   };

// //   return (

// //     <div className="container">

// //       <h1>Login</h1>

// //       <form onSubmit={handleLogin}>

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           onChange={(e) =>
// //             setEmail(e.target.value)
// //           }
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           onChange={(e) =>
// //             setPassword(e.target.value)
// //           }
// //         />

// //         <button type="submit">
// //           Login
// //         </button>

// //       </form>

// //     </div>
// //   );
// // }

// // export default Login;

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {

//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");

//   const [password, setPassword] =
//     useState("");

//   const [role, setRole] =
//     useState("candidate");

//   const handleLogin = async (e) => {

//     e.preventDefault();

//     const res = await axios.post(
//       "http://localhost:5000/login",
//       {
//         email,
//         password
//       }
//     );

//     if (res.data.message) {

//       alert(res.data.message);

//       return;
//     }

//     if (res.data.role !== role) {

//       alert("Wrong role selected");

//       return;
//     }

//     localStorage.setItem(
//       "email",
//       res.data.email
//     );

//     alert("Login Success");

//     if (role === "employer") {

//       navigate("/employer");

//     } else {

//       navigate("/profile");
//     }
//   };

//   return (

//     <div className="container">

//       <h1>Login</h1>

//       <form onSubmit={handleLogin}>

//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) =>
//             setEmail(e.target.value)
//           }
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) =>
//             setPassword(e.target.value)
//           }
//         />

//         <select
//           onChange={(e) =>
//             setRole(e.target.value)
//           }
//         >

//           <option value="candidate">
//             Candidate
//           </option>

//           <option value="employer">
//             Employer
//           </option>

//         </select>

//         <button type="submit">
//           Login
//         </button>

//       </form>

//     </div>
//   );
// }

// export default Login;

import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [role, setRole] =
    useState("candidate");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password
        }
      );

      if (res.data.message) {

        alert(res.data.message);

        return;
      }

      if (res.data.role !== role) {

        alert("Wrong role selected");

        return;
      }
      localStorage.setItem(
  "name",
  res.data.name
);

localStorage.setItem(
  "role",
  res.data.role
);

      localStorage.setItem(
        "email",
        res.data.email
      );

      localStorage.setItem(
        "loggedIn",
        "true"
      );

      alert("Login Success");

      if (role === "employer") {

        navigate("/add-job");

      } else {

        navigate("/jobs");
      }

    } catch (error) {

      alert("Login Failed");
    }
  };

  return (

    <div className="container">

      <div className="card">

        <h1>Login</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <select
            onChange={(e) =>
              setRole(e.target.value)
            }
          >

            <option value="candidate">
              Candidate
            </option>

            <option value="employer">
              Employer
            </option>

          </select>

          <button type="submit">
            Login
          </button>

        </form>

        <p>

          Not Registered?

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;