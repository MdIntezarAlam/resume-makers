import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../Service/firebase";
import './login.css';


const Login=() =>{
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "", });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="login_container">
      <div className="login_innerBox">
        <h1 className="login_heading">Login</h1>
        <InputControl
          label="Email"
          onChange={(event) =>setValues((prev) => ({ ...prev, email: event.target.value }))}
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
          placeholder="Enter Password"
        />
        <div className="login_footer">
          <b className="login_error">{errorMsg}  </b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
          <p>Already have an account?{" "}
            <span><Link to="/signup">Sign up</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;