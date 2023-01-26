import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="grid grid-cols-2 gap-5">
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
          {/* Error  */}

          {/* Login Button  */}
          <input
            className="btn btn-active  w-full max-w-xs"
            type="submit"
            value="Login"
          />
          <label htmlFor="signup">
            <p>
              New to Job Box?{" "}
              <span>
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
