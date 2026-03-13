import axios from "axios";

export default function Login() {

  function login(e){
    e.preventDefault();

    axios.post("http://localhost:5000/login",{
      email: e.target.email.value,
      password: e.target.password.value
    })
    .then(res => alert(res.data));
  }

  return (
    <form onSubmit={login}>
      <h2>Login</h2>

      <input type="email" name="email" placeholder="Email" />
      <br/><br/>

      <input type="password" name="password" placeholder="Password" />
      <br/><br/>

      <button>Login</button>
    </form>
  );
}