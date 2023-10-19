import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, datab } from "./FirebaseSDK";
import { Input, Button, Form, Message } from "semantic-ui-react";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
  
    setSubmitButtonDisabled(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.pass
      );
      const user = userCredential.user;
  
      // Create a new user document in Firestore
      const usersCollection = collection(datab, "users"); // "users" is the name of your Firestore collection
      await addDoc(usersCollection, {
        name: values.name,
        email: values.email,
        createdAt: serverTimestamp(),
      });
  
      // Update user profile (optional)
      await updateProfile(user, {
        displayName: values.name,
      });
  
      setSubmitButtonDisabled(false);
      navigate("/home");
    } catch (err) {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
    }
  };


  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Signup</h1>

        <Form>
          <Form.Field>
            <label>First Name:</label>
            <Input
              type="text"
              placeholder="Enter your first name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
          </Form.Field>

          <Form.Field>
            <label>Email:</label>
            <Input
              type="email"
              placeholder="Enter email address"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
          </Form.Field>

          <Form.Field>
            <label>Password:</label>
            <Input
              type="password"
              placeholder="Enter password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            />
          </Form.Field>

          <Button
            type="submit"
            onClick={handleSubmission}
            disabled={submitButtonDisabled}
          >
            Signup
          </Button>
        </Form>

        {errorMsg && <Message negative>{errorMsg}</Message>}

        <div className="footer">
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
