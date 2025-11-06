// frontend/src/landing_page/signup/Signup.jsx
import { SignUp, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      // safe redirect after signup completes
      navigate("/dashboard", { replace: true });
    }
  }, [isSignedIn, navigate]);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <SignUp
        path="/signup"
        routing="path"
        signInUrl="/signin"
         
      />
    </div>
  );
};

export default Signup;

