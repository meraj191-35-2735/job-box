import React from "react";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const { email } = useSelector((state) => state.auth);
  return (
    <div>
      <h1>This is the Dashboard of {email}</h1>
    </div>
  );
};

export default UserDashboard;
