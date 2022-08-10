import "./login.scss";
export default function Login() {


  return (
    <div className="login">
      <h2>Admin Login</h2>
      <form className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
         
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
         
        />
        <button
          className="loginButton"
          
        >
          Login
        </button>
      </form>
    </div>
  );
}
