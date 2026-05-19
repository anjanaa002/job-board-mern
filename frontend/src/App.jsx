// // // import { useState } from 'react'
// // // import reactLogo from './assets/react.svg'
// // // import viteLogo from './assets/vite.svg'
// // // import heroImg from './assets/hero.png'
// // // import './App.css'

// // // function App() {
// // //   const [count, setCount] = useState(0)

// // //   return (
// // //     <>
// // //       <section id="center">
// // //         <div className="hero">
// // //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// // //           <img src={reactLogo} className="framework" alt="React logo" />
// // //           <img src={viteLogo} className="vite" alt="Vite logo" />
// // //         </div>
// // //         <div>
// // //           <h1>Get started</h1>
// // //           <p>
// // //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// // //           </p>
// // //         </div>
// // //         <button
// // //           type="button"
// // //           className="counter"
// // //           onClick={() => setCount((count) => count + 1)}
// // //         >
// // //           Count is {count}
// // //         </button>
// // //       </section>

// // //       <div className="ticks"></div>

// // //       <section id="next-steps">
// // //         <div id="docs">
// // //           <svg className="icon" role="presentation" aria-hidden="true">
// // //             <use href="/icons.svg#documentation-icon"></use>
// // //           </svg>
// // //           <h2>Documentation</h2>
// // //           <p>Your questions, answered</p>
// // //           <ul>
// // //             <li>
// // //               <a href="https://vite.dev/" target="_blank">
// // //                 <img className="logo" src={viteLogo} alt="" />
// // //                 Explore Vite
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://react.dev/" target="_blank">
// // //                 <img className="button-icon" src={reactLogo} alt="" />
// // //                 Learn more
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //         <div id="social">
// // //           <svg className="icon" role="presentation" aria-hidden="true">
// // //             <use href="/icons.svg#social-icon"></use>
// // //           </svg>
// // //           <h2>Connect with us</h2>
// // //           <p>Join the Vite community</p>
// // //           <ul>
// // //             <li>
// // //               <a href="https://github.com/vitejs/vite" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#github-icon"></use>
// // //                 </svg>
// // //                 GitHub
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://chat.vite.dev/" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#discord-icon"></use>
// // //                 </svg>
// // //                 Discord
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://x.com/vite_js" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#x-icon"></use>
// // //                 </svg>
// // //                 X.com
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#bluesky-icon"></use>
// // //                 </svg>
// // //                 Bluesky
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       </section>

// // //       <div className="ticks"></div>
// // //       <section id="spacer"></section>
// // //     </>
// // //   )
// // // }

// // // export default App


// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // import Register from "./pages/Register";
// // import Login from "./pages/Login";
// // import Jobs from "./pages/Jobs";
// // import Employer from "./pages/Employer";

// // import "./App.css";

// // function App() {

// //   return (
// //     <BrowserRouter>

// //       <Routes>

// //         <Route path="/" element={<Jobs />} />

// //         <Route path="/register" element={<Register />} />

// //         <Route path="/login" element={<Login />} />

// //         <Route path="/employer" element={<Employer />} />

// //       </Routes>

// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Jobs from "./pages/Jobs";
// import Employer from "./pages/Employer";
// import Profile from "./pages/Profile";
// import "./App.css";

// function App() {

//   return (

//     <BrowserRouter>

//       <nav className="navbar">

//         <Link to="/">Jobs</Link>

//         <Link to="/register">Register</Link>

//         <Link to="/login">Login</Link>

//         <Link to="/employer">Employer</Link>

//       </nav>

//       <Routes>

//         <Route path="/" element={<Jobs />} />

//         <Route path="/register" element={<Register />} />

//         <Route path="/login" element={<Login />} />

//         <Route path="/employer" element={<Employer />} />
// <Route path="/profile" element={<Profile />} />
//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import Employer from "./pages/Employer";
import Profile from "./pages/Profile";
import AddJob from "./pages/AddJob";
import MyJobs from "./pages/MyJobs";
import Applications from "./pages/Applications";
import "./App.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        {/* <Route
          path="/employer"
          element={<Employer />}
        /> */}

        <Route
  path="/add-job"
  element={<AddJob />}
/>

<Route
  path="/my-jobs"
  element={<MyJobs />}
/>

<Route
  path="/applications"
  element={<Applications />}
/>

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;