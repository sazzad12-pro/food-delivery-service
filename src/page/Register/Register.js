import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UseContext/UseContext";

const Register = () => {
  const { googleSingUp, singUpUser, updateNamePhoto } = useContext(AuthContext);
  // user track with state start
  const [passwordError, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  // useContext googleProvider
  const handleGoogleLogin = () => {
    googleSingUp()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  // google provider

  // create user
  const handleSing = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const name = form.name.value;
    console.log(email, password, photoURL, name);

    singUpUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
        handleNamePhoto(name, photoURL);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // set name and phot url
  const handleNamePhoto = (name, photoURL) => {
    const profile = {
      displayName: name,
      photURL: photoURL,
    };
    updateNamePhoto(profile);
  };
  // error handle
  const handlePasswordError = (e) => {
    const password = e.target.value;
    if (password.length < 8) {
      setError("Your password must be at least 8 characters");
    } else {
      setError("");
    }
  };
  const handleEmailError = (e) => {
    const email = e.target.value;
    if (!/[@]/.test(email)) {
      setEmailError("provide valid email");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h1 className="fs-3 fw-bold text-primary text-center">Please Register</h1>
      <Form onSubmit={handleSing}>
        <Form.Group className="mb-3" controlId="formBasicEmailg">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmaill">
          <Form.Label>Photo URl</Form.Label>
          <Form.Control
            name="photoURL"
            type="text"
            placeholder=" please give your Photo"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmailr">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmailError}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-danger fs-5">{emailError}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePasswordError}
            type="password"
            placeholder="Password"
            name="password"
          />
          <Form.Text className="text-danger fs-5">{passwordError}</Form.Text>
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Register
        </Button>

        <h5 className="mt-1">
          Already Account<Link to="/login">Login</Link>{" "}
        </h5>
      </Form>
      <div className="d-flex align-items-center mt-3 ">
        <div
          style={{
            width: "300px",
            height: "2px",
            backgroundColor: "black",
            marginTop: "0px",
          }}
        ></div>
        <h4 className="me-3   ms-3">Or</h4>
        <div
          style={{ width: "300px", height: "2px", backgroundColor: "black" }}
        ></div>
      </div>
      <div className="mt-3">
        <Button onClick={handleGoogleLogin} className="w-100">
          Google
        </Button>
      </div>
    </div>
  );
};

export default Register;
