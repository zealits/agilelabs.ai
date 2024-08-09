import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./AboutUs.css"; // Create this CSS file for custom styles

// Example image URL, replace with an actual image URL
const aboutUsImage = "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719851523/agile/agileCarousel/second.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>About Us</h2>
            <p>Agile & Quality AI, VR, and AR Solution Provider</p>
            <p>
              Agilelabs.AI is a leading organization specializing in artificial intelligence, data analytics, and cloud
              computing. By collaborating with top companies, Agilelabs.AI develops tailored solutions to enhance
              innovation, streamline operations, lower expenses, and gain an edge over competitors. Agilelabs.AI
              utilizes advanced tools and techniques to create customized solutions that meet specific client needs,
              addressing intricate business challenges.
            </p>
            <p>
              Through cloud-native technology, Agilelabs.AI delivers scalable, secure, and cost-effective solutions to
              ensure clients can focus on core competencies while leaving technology needs to experts. Agilelabs.AI’s
              commitment to staying at the forefront of technological advancements is reflected in its ability to
              understand client needs, design custom solutions, and deliver results, setting it apart from the
              competition. Overall, Agilelabs.AI is a dedicated organization that provides state-of-the-art solutions to
              complex technological challenges faced by businesses today.
            </p>
            <p>For More Information: +1 (650) 597-3601</p>
          </Col>
          {/* <Col md={6}>
            <img src={aboutUsImage} alt="Agilelabs AI" className="img-fluid" />
          </Col> */}
        </Row>
        





{/* i want a mobile view for below componet  */}
        <Row className="mt-5">
          <Col md={4}>
            <Card className="info-card">
              <Card.Img variant="top" src="https://agilelabs.ai/wp-content/uploads/2023/04/firts.png" />
              <Card.Body>
                <Card.Title>AI FIRST</Card.Title>
                <Card.Text>
                  Our work with machine learning models designed to derive insight from your business’ data means you
                  have access to the latest in product engineering capabilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="info-card">
              <Card.Img variant="top" src="https://agilelabs.ai/wp-content/uploads/2023/04/2.png" />
              <Card.Body>
                <Card.Title>DATA DRIVEN</Card.Title>
                <Card.Text>
                  Our focus on smart data management and extensive use of data-driven intelligence offers a constant
                  source of insight for your organization.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="info-card">
              <Card.Img variant="top" src="https://agilelabs.ai/wp-content/uploads/2023/04/3.png" />
              <Card.Body>
                <Card.Title>CLOUD NATIVE</Card.Title>
                <Card.Text>
                  Our cloud-native development environment offers an added advantage, even if your own application needs
                  to be deployed on-premise.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        
        <Row className="reasons-to-work-together mt-5">
          <Col md={12}>
            <h3>Some Reasons to Work Together</h3>
          </Col>
          <Col md={4}>
            <Card className="reason-card">
              <Card.Body>
                <Card.Title>Global Mentors Network</Card.Title>
                <Card.Text>
                  Agilelabs AI has extensive access to the Global tech solutions network. Our training facilities are
                  located in Dallas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="reason-card">
              <Card.Body>
                <Card.Title>Planning & Strategy</Card.Title>
                <Card.Text>
                  We offer IT resource management based on client specifications and simultaneous IT consulting on
                  real-time project requirements.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="reason-card">
              <Card.Body>
                <Card.Title>Driving Business Value With Data</Card.Title>
                <Card.Text>
                  We deliver innovative data & AI solutions to help customers build a data-driven culture and empower
                  their business decisions with insights.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
