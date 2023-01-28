import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { createUser, googleLogIn } from "../../features/auth/authSlice";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [passwordError, setPasswordError] = useState("");
  const [buttonDis, setButtonDis] = useState(false);
  const { isLoading, isError, error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    dispatch(createUser({ email, password }));
    if (!isError && !isLoading) {
      navigate("/");
    }
  };

  const handlePassword = () => {
    const password = document.getElementById("password").value;
    const passConfirm = document.getElementById("passwordConfirm").value;
    if (password !== passConfirm) {
      setPasswordError("Password doesn't match!");
      setButtonDis(true);
    } else {
      setPasswordError("");
      setButtonDis(false);
    }
  };

  const handleGoogleLogIn = () => {
    dispatch(googleLogIn());
  };

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);

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
            {" "}
            <h1 className="font-bold font-xl text-accent border-b-2 border-accent inline">
              Sign Up
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
                <span className="label-tex font-serif">Password</span>
              </label>
              <input
                name="password"
                id="password"
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
                  <span className="label-text-alt text-red-600 font-serif">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600 font-serif">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-serif">Confirm Password</span>
              </label>
              <input
                id="passwordConfirm"
                {...register("passwordConfirm", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 character or more longer",
                  },
                })}
                name="passwordConfirm"
                type="password"
                onChange={handlePassword}
                placeholder="Confirm Password"
                className="input input-bordered w-full max-w-xs font-serif"
              />
              <label className="label">
                {errors.passwordConfirm?.type === "required" && (
                  <span className="label-text-alt text-red-600 font-serif">
                    {errors.passwordConfirm.message}
                  </span>
                )}
                {errors.passwordConfirm?.type === "minLength" && (
                  <span className="label-text-alt text-red-600 font-serif">
                    {errors?.passwordConfirm?.message}
                  </span>
                )}
              </label>
            </div>
            {/* Error  */}
            {passwordError && (
              <p className="font-serif font-thin text-error">{passwordError}</p>
            )}
            {/* Login Button  */}
            {buttonDis ? (
              <input
                className="btn btn-active  w-full max-w-xs font-serif"
                type="submit"
                value="Sign Up"
                disabled
              />
            ) : (
              <input
                className="btn btn-active  w-full max-w-xs font-serif"
                type="submit"
                value="Sign Up"
              />
            )}
            <label htmlFor="signup">
              <p className="font-serif mb-2">
                Already have an account?{" "}
                <span>
                  <Link className="font-bold text-accent-focus" to="/login">
                    Log In
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

export default SignUp;
