import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { googleLogIn, logInUser } from "../../features/auth/authSlice";

const Login = () => {
  const { isLoading, email } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    dispatch(logInUser({ email, password }));
  };

  const handleGoogleLogIn = () => {
    dispatch(googleLogIn());
  };

  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
    }
  }, [isLoading, email, navigate]);

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 px-10 mt-3">
        <div className="flex flex-col justify-center items-center bg-gray-100 shadow-sm rounded-md  py-5">
          <h3 className="font-semibold font-serif">Welcome to</h3>
          <br />
          <h1
            data-aos="flip-right"
            data-aos-duration="2000"
            data-aos-easing="linear"
            className="text-accent font-bold font-mono text-3xl border-b-2 border-accent inline"
          >
            Job Station
          </h1>
        </div>
        <div className="bg-gray-100 shadow-xl rounded-md py-5">
          <div className="flex justify-center items-center">
            <h1 className="font-bold font-xl text-accent border-b-2 border-accent inline">
              Log In
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center "
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-serif">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a Valid Email Address",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs font-serif"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600 font-serif">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600 font-serif">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-serif">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 character or more longer",
                  },
                })}
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs font-serif"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600 font-serif ">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600 font-serif ">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* Forgot Password  */}
            <div className="flex justify-center items-center mb-2">
              <label htmlFor="forgotPassword" className="mt-0 pt-0">
                <span className="font-serif">Forgot Password?</span>
              </label>
            </div>
            {/* Error  */}

            {/* Login Button  */}
            <input
              className="btn btn-active  w-full max-w-xs font-serif"
              type="submit"
              value="Login"
            />
            <label htmlFor="signup">
              <p className="font-serif mb-3">
                New to Job Station?{" "}
                <span>
                  <Link className="font-bold text-accent-focus" to="/signup">
                    Sign Up
                  </Link>
                </span>
              </p>
            </label>
            <input
              className="btn btn-active  w-full max-w-xs font-serif"
              type="button"
              value="Sign in with Google"
              onClick={handleGoogleLogIn}
            />
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
