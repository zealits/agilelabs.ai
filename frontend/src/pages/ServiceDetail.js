import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaArrowLeft,
  FaLaptopCode,
  FaUsers,
  FaUserTie,
  FaSearch,
  FaMoneyBillWave,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  const servicesData = {
    1: {
      title: "Technology Consulting",
      description:
        "Expert guidance on technology strategy, digital transformation, and IT infrastructure optimization.",
      longDescription: `Our Technology Consulting services help organizations navigate the complex world of digital transformation. We provide expert guidance on:
      • Technology Strategy Development
      • Digital Transformation Roadmap
      • IT Infrastructure Optimization
      • Cloud Migration and Management
      • Cybersecurity Implementation
      • Enterprise Architecture Design
      • Technology Stack Selection
      • Digital Innovation Consulting`,
      benefits: [
        "Reduced operational costs",
        "Improved efficiency and productivity",
        "Enhanced security and compliance",
        "Better scalability and flexibility",
        "Competitive advantage through technology",
      ],
      icon: <FaLaptopCode size={80} />,
    },
    2: {
      title: "Staff Augmentation",
      description: "Flexible staffing solutions to scale your team with skilled IT professionals.",
      longDescription: `Our Staff Augmentation services provide flexible and scalable solutions to meet your project needs:
      • On-demand IT Professionals
      • Project-based Staffing
      • Long-term Team Extensions
      • Skill-specific Hiring
      • Remote and On-site Options
      • Quality Assurance
      • Performance Monitoring
      • Seamless Integration`,
      benefits: [
        "Quick access to skilled professionals",
        "Cost-effective scaling",
        "Reduced hiring time",
        "Flexible engagement models",
        "Maintained project momentum",
      ],
      icon: <FaUsers size={80} />,
    },
    3: {
      title: "Recruiting",
      description: "End-to-end recruitment services to find the best talent for your organization.",
      longDescription: `Our comprehensive Recruitment services cover the entire hiring lifecycle:
      • Job Description Development
      • Candidate Sourcing
      • Resume Screening
      • Technical Assessment
      • Interview Coordination
      • Reference Checking
      • Offer Negotiation
      • Onboarding Support`,
      benefits: [
        "Access to top talent",
        "Reduced time-to-hire",
        "Quality candidate pipeline",
        "Industry expertise",
        "Comprehensive screening process",
      ],
      icon: <FaUserTie size={80} />,
    },
    4: {
      title: "Headhunting",
      description: "Specialized executive search services to find top-tier leadership talent.",
      longDescription: `Our Executive Search services focus on finding the perfect leadership fit:
      • C-level Executive Search
      • Board Member Recruitment
      • Leadership Assessment
      • Market Mapping
      • Confidential Search
      • Succession Planning
      • Executive Coaching
      • Leadership Development`,
      benefits: [
        "Access to passive candidates",
        "Confidential search process",
        "Industry-specific expertise",
        "Thorough vetting process",
        "Long-term leadership solutions",
      ],
      icon: <FaSearch size={80} />,
    },
    5: {
      title: "Payroll Outsourcing",
      description: "Comprehensive payroll management solutions to streamline your HR operations.",
      longDescription: `Our Payroll Outsourcing services handle all aspects of payroll management:
      • Payroll Processing
      • Tax Compliance
      • Benefits Administration
      • Time and Attendance
      • HRIS Integration
      • Reporting and Analytics
      • Employee Self-service
      • Compliance Management`,
      benefits: [
        "Reduced administrative burden",
        "Improved accuracy",
        "Cost savings",
        "Enhanced compliance",
        "Better employee satisfaction",
      ],
      icon: <FaMoneyBillWave size={80} />,
    },
    6: {
      title: "HR Services",
      description: "Complete HR solutions including benefits administration, compliance, and employee relations.",
      longDescription: `Our comprehensive HR Services cover all aspects of human resource management:
      • HR Strategy Development
      • Employee Relations
      • Performance Management
      • Training and Development
      • Compensation Planning
      • HR Compliance
      • Employee Engagement
      • HR Technology Implementation`,
      benefits: [
        "Streamlined HR processes",
        "Improved employee satisfaction",
        "Better compliance management",
        "Enhanced organizational culture",
        "Strategic HR support",
      ],
      icon: <FaFileInvoiceDollar size={80} />,
    },
  };

  useEffect(() => {
    setService(servicesData[id]);
  }, [id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="service-detail-page">
      <button className="back-button" onClick={() => navigate("/services")}>
        <FaArrowLeft /> Back to Services
      </button>

      <Row className="mt-4">
        <Col md={3} className="service-icon-container">
          <div className="service-icon-wrapper">{service.icon}</div>
        </Col>
        <Col md={6}>
          <h1>{service.title}</h1>
          <p className="lead">{service.description}</p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <Card className="detail-card">
            <Card.Body>
              <h2>Service Overview</h2>
              <div className="service-description">
                {service.longDescription.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="benefits-card">
            <Card.Body>
              <h2>Key Benefits</h2>
              <ul className="benefits-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetail;
