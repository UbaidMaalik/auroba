import { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/styles.css";
// import { EnvelopeFill } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="login-left" md={7} sm={7} lg={7}>
            <Row className="justify-content-center form">
              <Col md={5} sm={5} lg={5}>
                <Form onSubmit={onSubmit} className="w-100">
                  <Form.Group controlId="formEmail">
                    <Form.Label className="label">Email</Form.Label>

                    <Form.Control
                      className="input"
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control
                      className="input"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </Form.Group>
                  <div className="check">
                    <div>
                      <Form.Check label="Remember Me" name="group1" />
                    </div>
                    <div>Create Account?</div>
                  </div>
                  <Button variant="primary" type="submit" className="login">
                    LOG IN
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col md={5} sm={5} lg={5}>
            <Image src="./images/Logo.png" className="d-block mx-auto logo" />
            <Image src="./images/Ellipse 5.png" className="ellipse1" />
            <Image src="./images/Ellipse 6.png" className="ellipse2" />
            <Image src="./images/Ellipse 7.png" className="ellipse3" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
