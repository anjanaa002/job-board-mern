import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import { Link } from "react-router-dom";

function MyJobs() {

  const [jobs, setJobs] =
    useState([]);

  const employerEmail =
    localStorage.getItem("email");

  const logout = () => {

    localStorage.clear();

    window.location.href = "/";
  };

  useEffect(() => {

    fetchJobs();

  }, []);

  const fetchJobs = async () => {

    const res = await axios.get(
      // "http://localhost:5000/jobs"
      "https://job-board-mern-grfk.onrender.com/jobs"
    );

    const filtered =
      res.data.filter(
        (job)=>
          job.employerEmail===
          employerEmail
      );

    setJobs(filtered);
  };

  const deleteJob =
    async(id)=>{

      await axios.delete(
        `http://localhost:5000/jobs/${id}`
      );

      fetchJobs();
    };

const editJob =
  async (job) => {

    const title =
      prompt(
        "Edit Title",
        job.title
      );

    const company =
      prompt(
        "Edit Company",
        job.company
      );

    const location =
      prompt(
        "Edit Location",
        job.location
      );

    const salary =
      prompt(
        "Edit Salary",
        job.salary
      );

    await axios.put(
      `http://localhost:5000/jobs/${job._id}`,
      {
        title,
        company,
        location,
        salary
      }
    );

    fetchJobs();
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

        <h1>My Jobs</h1>

        {
          jobs.map((job)=>(

            <div
              className="card"
              key={job._id}
            >

              {/* <h3>{job.title}</h3>

              <p>{job.company}</p>

              <p>{job.location}</p> */}

              <h3>{job.title}</h3>

<p>
  Company: {job.company}
</p>

<p>
  Location: {job.location}
</p>

<p>
  Salary: {job.salary}
</p>

<p>
  Description:
  {job.description}
</p>

              <button
                onClick={()=>
                  deleteJob(job._id)
                }
              >
                Delete
              </button>


                <button
  onClick={() =>
    editJob(job)
  }
>
  Edit
</button>
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default MyJobs;