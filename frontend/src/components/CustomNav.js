import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomNav.css"; // Ensure this CSS file has the necessary styles

const CustomNav = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleHome = () => {
    navigate(`/`);
  };

  const handleAbout = () => {
    navigate(`/about-us/`);
  };

  const handleContactus = () => {
    navigate(`/contact-us/`);
  };

  const handleBlog = () => {
    navigate(`/blog/`);
  };



  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  const handleServices = () => {
    navigate(`/services`);
  };

  return (
    <Navbar variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand onClick={handleHome}>
          <img
            src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720718371/agile/logos/aglietag_du4fcm.png"
            className="d-inline-block align-top aglielogo"
            alt="Company logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleHome}>Home</Nav.Link>
            <Nav.Link onClick={handleAbout}>About </Nav.Link>
            <Nav.Link onClick={handleServices}>Services</Nav.Link>
            {/* <Nav.Link onClick={handleBlog}>Blog</Nav.Link> */}
            <Nav.Link onClick={handleContactus}>Contact</Nav.Link>
          </Nav>
          <Form onSubmit={handleSearch} className="d-flex search-box">
            <FormControl
              type="search"
              placeholder="search for service"
              className="me-2 search-input"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" variant="outline-success" className="search-button">
              Search
            </Button>
          </Form>
          <Nav className="ml-auto social-icons">
            <Nav.Link href="https://www.linkedin.com/company/agilelabs-ai/" target="_blank">
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/people/Agile-LabsAI/100093562100160/" target="_blank">
              <FaFacebook />
            </Nav.Link>

            {/* <img src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720645185/agile/americanlog_fzkc7x.png" alt=" " /> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
