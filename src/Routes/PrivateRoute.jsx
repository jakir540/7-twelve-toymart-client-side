import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center mt-80">
        <progress
          className="progress progress-error w-56"
          value="70"
          max="100"
        ></progress>
      </div>
    );
  }

  if (user) {
    return children
  }
  return <Navigate to="/login" state={{from: location }} replace></Navigate>;
};

export default PrivateRoute;
