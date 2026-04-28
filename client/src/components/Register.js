import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function register(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields required");
      return;
    }

    axios
      .post("http://localhost:5000/register", { email, password })
      .then((res) => alert(res.data.message))
      .catch(() => alert("Error"));
  }

  return (
    <form onSubmit={register}>
      <h2>Register</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />

      <button>Register</button>
    </form>
  );
}
