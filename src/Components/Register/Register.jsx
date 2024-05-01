import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Register = () => {
  const navigate = useNavigate();

  const { googleLogin, createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    console.log(name, email, password, confirm_password);

    // email validation
    if (!/@gmail\.com$/.test(email)) {
      // toast.warn("Please enter a valid email address")
      return;
    }

    // password validation
    if (password.length < 6) {
      // toast.warn("Password must be at least 6 characters")
      return;
    }
    if (password !== confirm_password) {
      // toast.warn("Both password Must be equal")
      return;
    }
    // const uppercaseRegex = /^(?=.*[A-Z]).+$/;
    // if(!uppercaseRegex.test(password)){
    //   // toast.warn("Password must contain at least one uppercase letter")
    //   return
    // }
    // const lowercaseRegex = /^(?=.*[a-z]).+$/;
    // if(!lowercaseRegex.test(password)){
    //   // toast.warn("Password must contain at least one lowercase letter")
    //   return
    // }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // new user has been created
        // toast.success('User created successfully')
        navigate("/");
      })
      .then((error) => {
        console.error(error);
      });

    };
    const handleGoogleLogin = () => {
      googleLogin()
      .then(result => console.log(result.user))
    }

    

  return (
    <div className="w-[40%] mx-auto min-w-[500px]">
      <form onSubmit={handleRegister}>
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" name="name" className="" placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="email" className="" name="email" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className=""
            name="password"
            placeholder="Password"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className=""
            name="confirm_password"
            placeholder="Confirm Password"
          />
        </label>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </div>
        <p className="text-center">
          Already have an Account? Please{" "}
          <NavLink to="/login" className="btn btn-ghost">
            Sign in
          </NavLink>
        </p>
      </form>
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
  );
};

export default Register;

{
  /*<p>
              Already Have an Account? Please
              <Link to="/signIn">
                <button className="btn btn-link">Login</button>
              </Link>
            </p> */
}
