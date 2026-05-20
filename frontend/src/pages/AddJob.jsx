import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddJob() {

  const employerEmail =
    localStorage.getItem("email");

  const [job, setJob] =
    useState({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: ""
    });

  const logout = () => {

    localStorage.clear();

    window.location.href = "/";
  };

  const addJob = async (e) => {

    e.preventDefault();

    await axios.post(
      // "http://localhost:5000/jobs",

      "https://job-board-mern-grfk.onrender.com/jobs",
      {
        ...job,
        employerEmail
      }
    );

    alert("Job Added");
    setJob({
  title: "",
  company: "",
  location: "",
  salary: "",
  description: ""
});
  };

  return (

    <div>

      <nav className="navbar">

        <Link to="/add-job">
          Add Job
        </Link>

        <Link to="/my-jobs">
          My Jobs
        </Link>

        <Link to="/applications">
          Applications
        </Link>

        <button onClick={logout}
         className="logout-btn">
          Logout

        </button>

      </nav>

      <div className="container">

        <h1>Add Job</h1>

        <form onSubmit={addJob}>

          {/* <input
            type="text"
            placeholder="Job Title"
            onChange={(e)=>
              setJob({
                ...job,
                title:e.target.value
              })
            }
          /> */}

          <input
  type="text"
  placeholder="Job Title"
  value={job.title}
  onChange={(e)=>
    setJob({
      ...job,
      title:e.target.value
    })
  }
/>

          {/* <input
            type="text"
            placeholder="Company"
            onChange={(e)=>
              setJob({
                ...job,
                company:e.target.value
              })
            }
          /> */}

          <input
  type="text"
  placeholder="Company"
  value={job.company}
  onChange={(e)=>
    setJob({
      ...job,
      company:e.target.value
    })
  }
/>

          <input
            type="text"
            placeholder="Location"
             value={job.location}
            onChange={(e)=>
              setJob({
                ...job,
                location:e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Salary"
            value={job.salary}
            onChange={(e)=>
              setJob({
                ...job,
                salary:e.target.value
              })
            }
          />

          <textarea
  placeholder="Job Description"
   value={job.description}
  onChange={(e)=>
    setJob({
      ...job,
      description:e.target.value
    })
  }
/>

          <button type="submit">
            Add Job
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddJob;