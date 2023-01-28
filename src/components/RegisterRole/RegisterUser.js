import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

const RegisterUser = () => {
  const { role } = useParams();
  return (
    <div className="lg:mx-40 mt-5 border-2 border-t-warning-content">
      <Link className="flex items-center text-sm m-2" to="/registerRole">
        <FiArrowLeftCircle></FiArrowLeftCircle>
        <p className="font-serif ml-0.5">Back</p>
      </Link>
      <div className="w-3/4 mx-auto">
        <h2 className="font-bold font-mono">
          <span className="uppercase">{role} </span>Registration
        </h2>
        <form></form>
      </div>
    </div>
  );
};

export default RegisterUser;
