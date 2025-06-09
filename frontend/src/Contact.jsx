import React, { useState, useEffect } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [sms, setSms] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");
  const [showAlert, setShowAlert] = useState(false);
  const hanleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || email === "" || comment === "") {
      setSms("Fill all fields");
      setAlertVariant("danger");
    } else {
      // setSms("Thanks, "+firstName+" "+lastName+ " will contact soon");
      setSms(`Thanks ${firstName} ${lastName} will contact soon`);
      setAlertVariant("success");
    }
    setShowAlert(true);
  };

  // Alert
  useEffect(() => {
    // per sa kohe do te behet ndryshimi i gjendjes
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showAlert]);
  // Shembull fillestar per useEffect
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  }, [showAlert]);
  return (
    <Container>
      <p>{count}</p>
      <Form onSubmit={hanleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Send
        </Button>
      </Form>
      {showAlert && <Alert variant={alertVariant}>{sms}</Alert>}
    </Container>
  );
};

export default Contact;
