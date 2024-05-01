import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Login = () => {
  const { googleLogin, loginUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => console.log(result.user))
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign in now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>
              New in <span className="font-bold">CraftSter?</span> Please
              <Link to="/register">
                <button className="btn btn-link">Register</button>
              </Link>
            </p>
            <p className="text-center mb-3">Continue With</p>
            <div className="flex justify-center">
              <button
                className="btn btn-ghost text-4xl tooltip"
                data-tip="Login With Google"
                onClick={handleGoogleLogin}
              >
                <FcGoogle></FcGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
