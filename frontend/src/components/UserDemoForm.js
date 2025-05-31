import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
import axios from "axios";
import "./UserServiceForm.css"; // Ensure you have a corresponding CSS file
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const UserServiceForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const providerName = location.state?.providerName;
  console.log(providerName);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    companyWebsite: "",
    decisionTimeline: "",
    solutionProviderName: providerName,
  });

  const form = useRef();
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    emailjs.sendForm("service_l4p8sqs", "template_qcrc2mm", form.current, "YpoxBk7FCyOu5qiel").then(
      (result) => {
        console.log("Form submited successfully!", result.text);
        setMessage({ type: "success", text: "Form submited successfully!" });
        window.scrollTo({ top: 0, behavior: "smooth" });
        setFormData({ name: "", phone: "", email: "", companyWebsite: "", decisionTimeline: "" });
      },
      (error) => {
        console.log("Failed to submit form.", error.text);
        setMessage({ type: "error", text: "Failed to submit form." });
        window.scrollTo({ top: 0, behavior: "smooth" });
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
              <h3 className="text-center mb-4">Request Demo for {providerName}</h3>
              {message && <Alert variant={message.type === "success" ? "success" : "danger"}>{message.text}</Alert>}
              <Form ref={form} onSubmit={handleSubmit}>
              <input type="hidden" name="solutionProviderName" value={formData.solutionProviderName} />
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>
                    Full Name <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPhone" className="mb-3">
                  <Form.Label>
                    Phone Number <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>
                    Email Address <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formCompanyWebsite" className="mb-3">
                  <Form.Label>
                    Company Website <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="url"
                    placeholder="Enter your company website"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formDecisionTimeline" className="mb-3">
                  <Form.Label>
                    Timeline for Decision Making <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="decisionTimeline"
                    value={formData.decisionTimeline}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="Immediate">Immediate</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 requestDemobutton">
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




// const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   try {
  //     const response = await axios.post("/aak/l1/formSubmission", formData);

  //     if (response.status === 200) {
  //       setMessage({ type: "success", text: "Form submitted successfully!" });
  //       // Scroll to the top of the page
  //       window.scrollTo({ top: 0, behavior: "smooth" });
  //       setFormData({ name: "", phone: "", email: "", companyWebsite: "", decisionTimeline: "" });
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     // Scroll to the top of the page
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //     setMessage({ type: "danger", text: "Something went wrong. Please try again." });
  //   }
  // };