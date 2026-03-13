import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return (
    <BrowserRouter>

      <Link to="/">Login</Link> | 
      <Link to="/register">Register</Link>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </BrowserRouter>
  );
}