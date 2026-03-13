import axios from "axios";

export default function Register(){

  function register(e){
    e.preventDefault();

    axios.post("http://localhost:5000/register",{
      email: e.target.email.value,
      password: e.target.password.value
    })
    .then(res => alert(res.data));
  }

  return(
    <form onSubmit={register}>

      <h2>Register</h2>

      <input type="email" name="email" placeholder="Email"/>
      <br/><br/>

      <input type="password" name="password" placeholder="Password"/>
      <br/><br/>

      <button>Register</button>

    </form>
  );
}