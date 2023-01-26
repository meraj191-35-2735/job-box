import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [passwordError, setPasswordError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.passwordConfirm) {
      setPasswordError("Password doesn't match!");
    }
    setPasswordError(" ");
  };
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 px-10">
        <div>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            expedita natus perspiciatis numquam, praesentium obcaecati quaerat
            omnis ratione ea eos recusandae ex placeat adipisci dolor? Labore
            officiis suscipit accusantium atque.
          </h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center "
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
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
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
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
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
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
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.passwordConfirm?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.passwordConfirm.message}
                  </span>
                )}
                {errors.passwordConfirm?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors?.passwordConfirm?.message}
                  </span>
                )}
              </label>
            </div>
            {/* Error  */}
            {passwordError && <p>{passwordError}</p>}
            {/* Login Button  */}
            <input
              className="btn btn-active  w-full max-w-xs"
              type="submit"
              value="Sign Up"
            />
            <label htmlFor="login">
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
