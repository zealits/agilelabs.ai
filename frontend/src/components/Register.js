import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
import "./Register.css"; // Create this CSS file for custom styles
import emailjs from "@emailjs/browser";
import axios from "axios";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    position: "",
    email: "",
    phoneNumber: "",
    companyWebsite: "",
    aiServices: "",
    aiModels: "",
    aiProducts: "",
    bigCustomers: "",
    revenue: "",
    headquarters: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post("/aak/l1/registerservice", formData);

      if (response.status === 200) {
        setMessage({ type: "success", text: "Service registered successfully!" });

        // Clear the form after successful submission
        setFormData({
          companyName: "",
          contactPerson: "",
          position: "",
          email: "",
          phoneNumber: "",
          companyWebsite: "",
          aiServices: "",
          aiModels: "",
          aiProducts: "",
          bigCustomers: "",
          revenue: "",
          headquarters: "",
        });
      }
    } catch (error) {
      console.error("Error registering service:", error);
      setMessage({ type: "danger", text: "Something went wrong. Please try again." });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);

  //   emailjs.sendForm("service_l4p8sqs", "template_aswjtaa", form.current, "YpoxBk7FCyOu5qiel").then(
  //     (result) => {
  //       console.log("Email successfully sent!", result.text);
  //       setMessage({ type: "success", text: "Form submited successfully!" });
  //     },
  //     (error) => {
  //       console.log("Failed to send email.", error.text);
  //       setMessage({ type: "error", text: "Failed to submit form." });
  //     }
  //   );

  //   // Optionally clear the form after submission
  // };

  return (
    <Container className="register-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="register-card">
            <Card.Body>
              <h3 className="text-center mb-4">Register</h3>
              {message && <Alert variant={message.type === "success" ? "success" : "danger"}>{message.text}</Alert>}
              <Form ref={form} onSubmit={handleSubmit}>
                <Form.Group controlId="formCompanyName" className="mb-3">
                  <Form.Label>
                    Company Name <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your company name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formContactPerson" className="mb-3">
                  <Form.Label>
                    Contact Person <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter contact person's name"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPosition" className="mb-3">
                  <Form.Label>
                    Position <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter position"
                    name="position"
                    value={formData.position}
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
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber" className="mb-3">
                  <Form.Label>
                    Phone Number <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formCompanyWebsite" className="mb-3">
                  <Form.Label>
                    Company Website URL <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="url"
                    placeholder="Enter company website URL"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formAIServices" className="mb-3">
                  <Form.Label>
                    AI Solutions Being Provided <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter AI services"
                    name="aiServices"
                    value={formData.aiServices}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formAIModels" className="mb-3">
                  <Form.Label>AI Models</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter AI models"
                    name="aiModels"
                    value={formData.aiModels}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formAIProducts" className="mb-3">
                  <Form.Label>
                    AI Products Available <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter AI products"
                    name="aiProducts"
                    value={formData.aiProducts}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBigCustomers" className="mb-3">
                  <Form.Label>
                    Potential Customers <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter potential big customers"
                    name="bigCustomers"
                    value={formData.bigCustomers}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formRevenue" className="mb-3">
                  <Form.Label>
                    Revenue <span className="required">*</span>
                  </Form.Label>

                  <Form.Control
                    as="select"
                    placeholder="Enter revenue"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    required
                  >
                    <option value="Less than 1 Millon">Less than 1 Millon</option>
                    <option value="1 Millon to 10 Millon">1 Millon to 10 Millon </option>
                    <option value="11 Millon to 50 Millon">11 Millon to 50 Millon </option>
                    <option value="Greater than 50 Millon">Greater than 50 Millon </option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formHeadquarters" className="mb-3">
                  <Form.Label>
                    Headquarters <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter headquarters"
                    name="headquarters"
                    value={formData.headquarters}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
