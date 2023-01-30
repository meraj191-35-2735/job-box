import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowLeftCircle } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import { Link, useParams } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import { useRegisterMutation } from "../../features/auth/authApi";

const RegisterUser = () => {
  const { email, role } = useParams();
  const [phone, setPhone] = useState("");
  const [enable, setEnable] = useState("off");
  const [postUser, { isLoading, isError }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = email;
    data.phone = phone;
    data.role = role;
    postUser({ ...data });
    console.log(data);
  };

  const handleButton = () => {
    const checkBox = document.getElementById("checkButton");
    if (checkBox.checked) {
      checkBox.disabled = false;
      setEnable(checkBox.value);
    } else {
      setEnable("off");
    }
  };

  return (
    <div className="lg:mx-40 my-5 border-2 border-t-warning-content">
      <Link className="flex items-center text-sm m-2" to="/registerRole">
        <FiArrowLeftCircle></FiArrowLeftCircle>
        <p className="font-serif ml-0.5">Back</p>
      </Link>
      <div className="w-3/4 mx-auto">
        <h2 className="font-bold font-mono text-center border-b-8 border-b-accent-focus mb-3">
          <span className="uppercase text-xl">{role} Registration</span>
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center "
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-serif">First Name</span>
            </label>
            <input
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First Name is Required",
                },
              })}
              type="text"
              placeholder="Enter First Name"
              className="input input-bordered w-full max-w-xs font-serif"
            />
            <label className="label">
              {errors.firstName?.type === "required" && (
                <span className="label-text-alt text-red-600 font-serif">
                  {errors.firstName.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-serif">Last Name</span>
            </label>
            <input
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last Name is Required",
                },
              })}
              type="text"
              placeholder="Enter Last Name"
              className="input input-bordered w-full max-w-xs font-serif"
            />
            <label className="label">
              {errors.lastName?.type === "required" && (
                <span className="label-text-alt text-red-600 font-serif">
                  {errors.lastName.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-serif">Phone</span>
            </label>
            <PhoneInput
              {...register("phone")}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
                placeholder: "Enter Phone Number",
              }}
              onBlur={(e) => setPhone(e.target.value)}
              className="w-full max-w-xs font-serif"
            />
            <label className="label">
              {errors.phone?.type === "required" && (
                <span className="label-text-alt text-red-600 font-serif">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-serif">Country</span>
            </label>
            <input
              {...register("country", {
                required: {
                  value: true,
                  message: "Country is Required",
                },
              })}
              type="text"
              placeholder="Enter Country Name"
              className="input input-bordered w-full max-w-xs font-serif"
            />
            <label className="label">
              {errors.country?.type === "required" && (
                <span className="label-text-alt text-red-600 font-serif">
                  {errors.country.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-serif">City</span>
            </label>
            <input
              {...register("city", {
                required: {
                  value: true,
                  message: "City is Required",
                },
              })}
              type="text"
              placeholder="Enter City Name"
              className="input input-bordered w-full max-w-xs font-serif"
            />
            <label className="label">
              {errors.city?.type === "required" && (
                <span className="label-text-alt text-red-600 font-serif">
                  {errors.city.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-serif">Street Address</span>
            </label>
            <input
              {...register("streetAddress", {
                required: {
                  value: true,
                  message: "Street Address is Required",
                },
              })}
              type="text"
              placeholder="Enter Address"
              className="input input-bordered w-full max-w-xs font-serif"
            />
            <label className="label">
              {errors.streetAddress?.type === "required" && (
                <span className="label-text-alt text-red-600 font-serif">
                  {errors.streetAddress.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-serif">Postal Code</span>
            </label>
            <input
              {...register("postalCode", {
                required: {
                  value: true,
                  message: "Postal Code is Required",
                },
              })}
              type="text"
              placeholder="Enter Postal Code"
              className="input input-bordered w-full max-w-xs font-serif"
            />
            <label className="label">
              {errors.postalCode?.type === "required" && (
                <span className="label-text-alt text-red-600 font-serif">
                  {errors.postalCode.message}
                </span>
              )}
            </label>
          </div>
          <div className="flex justify-start items-center">
            <input
              onClick={handleButton}
              id="checkButton"
              type="checkbox"
              class="default:ring-2 checkbox-accent"
            />{" "}
            <p className="ml-1 font-serif">
              I agree to all{" "}
              <a
                href="https://job-box-redux.web.app/"
                className="text-blue-700 hover:underline"
              >
                terms & condition
              </a>
            </p>
          </div>
          {/* Error  */}

          {enable === "on" ? (
            <input
              className="btn btn-sm my-2 btn-active max-w-xs font-serif"
              type="submit"
              value="Submit"
            />
          ) : (
            <input
              className="btn btn-sm my-2 btn-active max-w-xs font-serif"
              type="submit"
              value="Submit"
              disabled
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
