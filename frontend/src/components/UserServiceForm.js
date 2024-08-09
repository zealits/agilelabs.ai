import React, { useState, useRef } from "react";
import { Container, Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
import "./UserServiceForm.css"; // Create this CSS file for custom styles
import emailjs from "@emailjs/browser";

const UserServiceForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    companyLocation: "",
    employeeCount: "",
    serviceOfInterest: "",
    additionalComments: "",
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
    // Handle form submission logic here

    emailjs.sendForm("service_l4p8sqs", "template_qcrc2mm", form.current, "YpoxBk7FCyOu5qiel").then(
      (result) => {
        console.log("Form submited successfully!", result.text);
        setMessage({ type: "success", text: "Form submited successfully!" });
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
        <Col md={8} lg={6}>
          <Card className="user-service-form-card">
            <Card.Body>
              <h3 className="text-center mb-4">Explore reseller dissount </h3>
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
                      <Form.Label>Last Name <span className="required">*</span> </Form.Label>
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
                  <Form.Label>Business Email <span className="required">*</span> </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your business email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formCompany" className="mb-3">
                  <Form.Label>Company <span className="required">*</span> </Form.Label>
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
                <Form.Group controlId="formEmployeeCount" className="mb-3">
                  <Form.Label>Employee Count <span className="required">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter employee count"
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formServiceOfInterest" className="mb-3">
                  <Form.Label>Service of Interest <span className="required">*</span></Form.Label>
                  <Form.Control
                    as="select"
                    name="serviceOfInterest"
                    value={formData.serviceOfInterest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="AIConsulting">AI Consulting and Strategy Development</option>
                    <option value="MLModelDevelopment">Machine Learning Model Development</option>
                    <option value="DataAnalytics">Data Analytics and Insights</option>
                    <option value="NLP">Natural Language Processing (NLP)</option>
                    <option value="ComputerVision">Computer Vision</option>
                    <option value="RPA">Robotic Process Automation (RPA)</option>
                    <option value="AICustomerService">AI-Driven Customer Service</option>
                    <option value="PredictiveMaintenance">Predictive Maintenance</option>
                    <option value="RecommendationSystems">Recommendation Systems</option>
                    <option value="FraudDetection">Fraud Detection and Security</option>
                    <option value="AIIntegration">AI Integration and Deployment</option>
                    <option value="VoiceRecognition">Voice Recognition and Speech-to-Text</option>
                    <option value="AISupplyChain">AI for Supply Chain Optimization</option>
                    <option value="HealthcareAI">Healthcare AI Solutions</option>
                    <option value="AIEthics">AI Ethics and Governance</option>
                    <option value="PersonalizedMarketing">Personalized Marketing and Advertising</option>
                    <option value="VirtualAgents">Virtual Agents and Assistants</option>
                    <option value="AITraining">AI Training and Education</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formServiceOfInterest" className="mb-3">
                  <Form.Label>Spend Potential <span className="required">*</span> </Form.Label>
                  <Form.Control
                    as="select"
                    name="serviceOfInterest"
                    value={formData.serviceOfInterest}
                    onChange={handleChange}
                    required
                  >
                    <option value="Less than 1 Millon">Less than 1 Millon</option>
                    <option value="1 Millon to 10 Millon">1 Millon to 10 Millon </option>
                    <option value="11 Millon to 50 Millon">11 Millon to 50 Millon </option>
                    <option value="Greater than 50 Millon">Greater than 50 Millon </option>
                   
                    
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formServiceOfInterest" className="mb-3">
                  <Form.Label>Target Spend Timeline <span className="required">*</span></Form.Label>
                  <Form.Control
                    as="select"
                    name="serviceOfInterest"
                    value={formData.serviceOfInterest}
                    onChange={handleChange}
                    required
                  >
                    <option value="within next 3 months">within next 3 months</option>
                    <option value="within next 3 to 6 months">within next 3 to 6 months</option>
                    <option value="within next 6 months to 1 year">within next 6 months to 1 year</option>
                    
                   
                    
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formAdditionalComments" className="mb-3">
                  <Form.Label>Additional Comments <span className="required">*</span> </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter any additional comments"
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleChange}
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
