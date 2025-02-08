import React, { useState, useRef } from "react";
import { Container, Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const UserServiceForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    companyLocation: "",
  });

  const form = useRef();
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_l4p8sqs", "template_qcrc2mm", form.current, "YpoxBk7FCyOu5qiel").then(
      (result) => {
        console.log("Form submitted successfully!", result.text);
        setMessage({ type: "success", text: "Form submitted successfully!" });
      },
      (error) => {
        console.log("Failed to submit form.", error.text);
        setMessage({ type: "error", text: "Failed to submit form." });
      }
    );
    console.log(formData);
  };

  return (
    <Container className="user-service-form-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="user-service-form-card">
            <Card.Body>
              <h3 className="text-center mb-4">Request Demo</h3>
              {message && <Alert variant={message.type === "success" ? "success" : "danger"}>{message.text}</Alert>}
              <Form ref={form} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="formFirstName">
                      <Form.Label>First Name <span className="required">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name <span className="required">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email <span className="required">*</span></Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formCompany" className="mb-3">
                  <Form.Label>Company <span className="required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your company name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formCompanyLocation" className="mb-3">
                  <Form.Label>Company Location <span className="required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your company location"
                    name="companyLocation"
                    value={formData.companyLocation}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserServiceForm;
