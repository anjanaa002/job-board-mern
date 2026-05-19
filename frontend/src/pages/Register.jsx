import { useState } from "react";
import axios from "axios";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate"
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.post(
      "http://localhost:5000/register",
      form
    );

    alert("Registered Successfully");
    setForm({
  name: "",
  email: "",
  password: "",
  role: "candidate"
});
  };

  return (
    <div className="container">

      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <select
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
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
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;