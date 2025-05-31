import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaUsers, FaUserTie, FaSearch, FaMoneyBillWave, FaFileInvoiceDollar } from "react-icons/fa";
import { FaMicrochip, FaIndustry, FaHeartbeat, FaCogs, FaChartLine } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Technology Consulting",
      description:
        "Expert guidance on technology strategy, digital transformation, and IT infrastructure optimization.",
      icon: <FaLaptopCode size={40} />,
      image: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720718371/agile/services/tech-consulting.jpg",
    },
    {
      id: 2,
      title: "Staff Augmentation",
      description: "Flexible staffing solutions to scale your team with skilled IT professionals.",
      icon: <FaUsers size={40} />,
      image: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720718371/agile/services/staff-aug.jpg",
    },
    {
      id: 3,
      title: "Recruiting",
      description: "End-to-end recruitment services to find the best talent for your organization.",
      icon: <FaUserTie size={40} />,
      image: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720718371/agile/services/recruiting.jpg",
    },
    {
      id: 4,
      title: "Headhunting",
      description: "Specialized executive search services to find top-tier leadership talent.",
      icon: <FaSearch size={40} />,
      image: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720718371/agile/services/headhunting.jpg",
    },
    {
      id: 5,
      title: "Payroll Outsourcing",
      description: "Comprehensive payroll management solutions to streamline your HR operations.",
      icon: <FaMoneyBillWave size={40} />,
      image: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720718371/agile/services/payroll.jpg",
    },
    {
      id: 6,
      title: "HR Services",
      description: "Complete HR solutions including benefits administration, compliance, and employee relations.",
      icon: <FaFileInvoiceDollar size={40} />,
      image: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720718371/agile/services/hr-services.jpg",
    },
  ];

  const domains = [
    {
      id: 1,
      title: "Technology",
      icon: <FaMicrochip size={30} />,
    },
    {
      id: 2,
      title: "Engineering",
      icon: <FaCogs size={30} />,
    },
    {
      id: 3,
      title: "Healthcare and Life Sciences",
      icon: <FaHeartbeat size={30} />,
    },
    {
      id: 4,
      title: "Manufacturing",
      icon: <FaIndustry size={30} />,
    },
    {
      id: 5,
      title: "Business Process Services",
      icon: <FaChartLine size={30} />,
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <Container className="agile-services-container">
      <h1 className="agile-services-title">Our Services</h1>
      <Row className="agile-services-row">
        {services.map((service) => (
          <Col key={service.id} xs={12} sm={6} md={4} className="agile-services-col">
            <Card className="agile-service-card" onClick={() => handleCardClick(service.id)}>
              <div className="agile-service-icon-wrapper">{service.icon}</div>
              <Card.Body className="agile-service-card-body">
                <Card.Title className="agile-service-card-title">{service.title}</Card.Title>
                <Card.Text className="agile-service-card-text">{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h1 className="agile-services-title mt-5">Our Domains</h1>
      <div className="agile-domains-strip">
        {domains.map((domain) => (
          <div key={domain.id} className="agile-domain-item">
            <div className="agile-domain-icon">{domain.icon}</div>
            <span className="agile-domain-name">{domain.title}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Services;
