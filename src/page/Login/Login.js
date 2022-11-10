import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseTitle from "../../component/hook/UseTitle";
import food from "../../image/food.png";
import { AuthContext } from "../../UseContext/UseContext";

const Login = () => {
  const [error, setError] = useState("");
  const [userEmail, setEmail] = useState("");

  UseTitle("Login");

  // useContext use
  const { googleSingUp, logInEmailPassword, forgetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // Google sing in
  const handleGoogle = () => {
    googleSingUp()
      .then((result) => {
        const user = result.user;
        navigate("/");
        const currentUser = {
          email: user.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("service", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // login with email and password
  const logInUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInEmailPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const currentUser = {
          email: user.email,
        };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("service", data.token);
            navigate(from, { replace: true });
          });

        navigate("/");
        // navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);

        setError(err.message);
      });
  };
  // reset email
  const emailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handleForget = () => {
    forgetPassword(userEmail)
      .then(() => {
        // rest email
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col lg={6} className="mt-5">
            {" "}
            <h1 className="text-success fw-bold">
              If you are Hungry at fast you are login and order food
            </h1>
            <img className="img-fluid h-50" src={food} alt="" />
          </Col>
          <Col lg={6} className="mt-5">
            <div>
              <h1 className="fs-3 fw-bold text-primary text-center">
                Please Login
              </h1>
              <Form onSubmit={logInUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onBlur={emailChange}
                    name="email"
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Text className="text-muted">{error}</Form.Text>

                <Button className="w-100" variant="primary" type="submit">
                  Login
                </Button>
                <Link onClick={handleForget}>Forget Your Password</Link>
                <h5>
                  No Account<Link to="/register"> Register</Link>{" "}
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
                  style={{
                    width: "300px",
                    height: "2px",
                    backgroundColor: "black",
                  }}
                ></div>
              </div>
              <div className="mt-3">
                <Button onClick={handleGoogle} className="w-100">
                  Google
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
