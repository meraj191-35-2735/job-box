import React from "react";
import candidate from "../../assests/images/registerRole/candidate.jpg";
import employer from "../../assests/images/registerRole/employer.jpg";
import { useNavigate } from "react-router-dom";

const RegisterRole = () => {
  const navigate = useNavigate();
  const handleRegister = (role) => {
    navigate(`/register/${role}`);
  };

  return (
    <div className="mx-20 border rounded mt-2">
      <div className="flex justify-center items-center h-10">
        <p className="font-serif font-semibold italic">Continue as ...</p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 m-3">
        <div
          onClick={() => handleRegister("candidate")}
          className="border-2 flex flex-col justify-center items-center hover:border-2 hover:border-accent hover:shadow-2xl hover:rounded-lg hover:scale-100 ease-in duration-500 scale-90"
        >
          <img className="w-96 h-80" src={candidate} alt="" />
          <div>
            <p className="font-serif font-bold p-2 m-2">Candidate</p>
          </div>
        </div>
        <div
          onClick={() => handleRegister("employer")}
          className="border-2 flex flex-col justify-center items-center hover:border-2 hover:border-accent hover:shadow-2xl hover:rounded-lg hover:scale-100 ease-in duration-500 scale-90"
        >
          <img className="w-96 h-80 " src={employer} alt="" />
          <div>
            <p className="font-serif font-bold p-2 m-2">Employer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterRole;
