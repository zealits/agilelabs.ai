import React, { useRef, useEffect, useState } from "react";
import { Carousel, Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import serv1 from "../assets/images/services/aiConsultancy.png";
import serv2 from "../assets/images/services/machineLearning.png";
import serv3 from "../assets/images/services/dataAnalytics.png";
import serv4 from "../assets/images/services/nlp.png";
import serv5 from "../assets/images/services/cv.png";
import serv6 from "../assets/images/services/rpa.png";
import serv7 from "../assets/images/services/customerServices.png";
import serv8 from "../assets/images/services/predictiveMaintenance.png";
import serv9 from "../assets/images/services/recommendationSystem.png";
import serv10 from "../assets/images/services/fraudDetection.png";
import serv11 from "../assets/images/services/aiIntegration.png";
import serv12 from "../assets/images/services/voiceRecognition.png";
import serv13 from "../assets/images/services/supplyChainManagement.png";
import serv14 from "../assets/images/services/healthcare.png";
import serv15 from "../assets/images/services/governance.png";
import serv16 from "../assets/images/services/marketing.png";
import serv17 from "../assets/images/services/virtualAgents.png";
import serv18 from "../assets/images/services/aiTraining.png";
import serv19 from "../assets/images/services/aiInfrastucture.png";
import client1 from "../assets/images/clients/northern-logistics-logo.png";
import client2 from "../assets/images/clients/finnely-law.png";
import client6 from "../assets/images/clients/sunward.png";
import client4 from "../assets/images/clients/esolutions.png";
import client5 from "../assets/images/clients/concentrix.png";
import client3 from "../assets/images/clients/firstsource.png";
import client7 from "../assets/images/clients/Aii.png";
import client8 from "../assets/images/clients/techmahindra.png";
import client9 from "../assets/images/clients/altimetrik.png";
import heroVideo from "../assets/video/heroVideo.mp4";

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const copy = document.querySelector(".logo-slider__logos-slide").cloneNode(true);
    document.querySelector(".logo-slider__wrapper").appendChild(copy);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Autoplay started
        })
        .catch((error) => {
          // Autoplay was prevented
          // You can handle this scenario or show a play button to allow user interaction
        });
    }

    return () => {
      // Clean up
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, []);

  const handleCardClick = (id) => {
    navigate(`/service/${id}`);
  };

  const register = (id) => {
    navigate(`/register`);
  };

  const requestService = () => {
    navigate("/request-service");
  };

  const requestDemo = () => {
    navigate("/request-demo");
  };
  const categories = [
    { id: 1, name: "AI Consulting and Strategy Development", description: "Description of service 1", imgSrc: serv1 },
    { id: 2, name: "Machine Learning Model Development", description: "Description of service 2", imgSrc: serv2 },
    { id: 3, name: "Data Analytics and Insights", description: "Description of service 2", imgSrc: serv3 },
    { id: 4, name: "Natural Language Processing (NLP)", description: "Description of service 2", imgSrc: serv4 },
    { id: 5, name: "Computer Vision", description: "Description of service 2", imgSrc: serv5 },
    { id: 6, name: "Robotic Process Automation (RPA)", description: "Description of service 2", imgSrc: serv6 },
    { id: 7, name: "AI-Driven Customer Service", description: "Description of service 2", imgSrc: serv7 },
    { id: 8, name: "Predictive Maintenance", description: "Description of service 2", imgSrc: serv8 },
    { id: 9, name: "Recommendation Systems", description: "Description of service 2", imgSrc: serv9 },
    { id: 10, name: "Fraud Detection and Security", description: "Description of service 2", imgSrc: serv10 },
    { id: 11, name: "AI Integration and Deployment", description: "Description of service 2", imgSrc: serv11 },
    { id: 12, name: "Voice Recognition and Speech-to-Text", description: "Description of service 2", imgSrc: serv12 },
    { id: 13, name: "AI for Supply Chain Optimization", description: "Description of service 2", imgSrc: serv13 },
    { id: 14, name: "Healthcare AI Solutions", description: "Description of service 2", imgSrc: serv14 },
    { id: 15, name: "AI Ethics and Governance", description: "Description of service 2", imgSrc: serv15 },
    { id: 16, name: "Personalized Marketing and Advertising", description: "Description of service 2", imgSrc: serv16 },
    { id: 17, name: "Virtual Agents and Assistants", description: "Description of service 2", imgSrc: serv17 },
    { id: 18, name: "AI Training and Education", description: "Description of service 2", imgSrc: serv18 },
    // Add more categories here, up to 19
  ];

  const serviceProviders = [
    {
      id: 1,
      name: "Uniphore",
      description: "Conversational AI solutions",
      logo: "data:image/png;base64,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",
      link: "https://www.uniphore.com",
    },
    {
      id: 2,
      name: "automat",
      description: "AI powered RPA and IDP",
      logo: "https://cdn.prod.website-files.com/64d14806abf1dc04577f9cc0/64d1920312fc6b2613d5234c_logo-automat.svg",
      link: "https://www.snapcheck.io",
    },
    {
      id: 3,
      name: "Snapcheck",
      description: "AI powered background check solutions",
      logo: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720113718/agile/agileCarousel/snapcheck_nwyyy0.png",
      link: "https://www.snapcheck.io",
    },

    {
      id: 4,
      name: "Base64.ai",
      description: "AI powered document automation solutions",
      logo: "data:image/png;base64,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",
      link: "https://www.base64.ai",
    },
    {
      id: 5,
      name: "Studies HQ",
      description: "Unbiased Technology Testing",
      logo: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720717646/agile/logos/STUDIES-HQ_qkotcf.png",
      link: "https://www.snapcheck.io",
    },

    {
      id: 6,
      name: "Botpenguins",
      description: "AI Chatbot Automation.",
      logo: "https://cdn.prod.website-files.com/661e75fc70756be16764754b/66b2b672d0ca546c50a4d5df_relinns-logo-partner-gallery.webp",
      link: "https://www.snapcheck.io",
    },
    {
      id: 7,
      name: "AIGO",
      description: "AGI powered chatbot solutions",
      logo: "data:image/png;base64,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",
      link: "https://www.aigo.ai",
    },
    {
      id: 8,
      name: "ezofis",
      description: "Ezofis automates business workflows.",
      logo: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1731548034/agile/logos/ezofis-LogoV2_ckmbbz.png",
      link: "https://ezofis.com/",
    },
  ];

  return (
    <div>
      {/* Carousel Section */}
      {/* <Carousel className="mycarousel">

   
        
        <Carousel.Item>
          <img
            className="d-block w-100 mycarousel"
            src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719851509/agile/agileCarousel/first.png"
            alt="First slide"
          />
          <Carousel.Caption className="sl-main-banner__content">
            <div className="hero-text">
              <h1>Let’s work together towards your company’s AI future !</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719851523/agile/agileCarousel/second.png"
            alt="First slide"
          />
          <Carousel.Caption className="sl-main-banner__content">
            <div className="hero-text">
              <h1>Your one-stop for modernizing AI solutions and infrastructure!</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719851538/agile/agileCarousel/third.png"
            alt="First slide"
          />
          <Carousel.Caption className="sl-main-banner__content">
            <div className="hero-text">
              <h1>Collaborate with our AI partners for faster AI solution deliveries for your organization !</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

      <section>
        <div className="hero-section">
          <video ref={videoRef} className="hero-video" loop muted>
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-text">
            <h1>Start your Generative AI journey with us</h1>
            <p>Transforming ideas into reality with every breakthrough in AI technology.</p>
          </div>
        </div>
      </section>

      {/* Top Service Provider Section */}
      <section className="top-service-providers">
        <Container>
          <h2>Featured Solution Providers</h2>
          <Row>
            {serviceProviders.map((provider) => (
              <Col key={provider.id} md={3} className="mb-4">
                <Card className="provider-card">
                  <Card.Img variant="top" src={provider.logo} alt={`${provider.name} logo`} className="provider-logo" />
                  <Card.Body>
                    <Card.Title>{provider.name}</Card.Title>
                    <Card.Text>{provider.description}</Card.Text>
                    {/*    <Button variant="primary" onClick={requestService} className="banner-button">
                      Explore reseller discount
                    </Button> */}
                    <Button variant="primary" onClick={requestDemo} className="banner-button">
                      Request for demo
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="carousel-section">
        <h2 >Trusted by leading brands worldwide</h2>
        <div className="logo-slider__wrapper">
          <div className="logo-slider__logos-slide">
            <img src={client1} alt="northern" className="logo-slider__image" />
            <img src={client2} alt="finnely" className="logo-slider__image finnely" />
            <img src={client3} alt="sunward" className="logo-slider__image" />
            <img src={client4} alt="esoultions" className="logo-slider__image" />
            <img src={client5} alt="concentrix" className="logo-slider__image concentrix" />
            <img src={client6} alt="firstsource" className="logo-slider__image" />
            <img src={client7} alt="aii" className="logo-slider__image aii" />
            <img src={client8} alt="techmahindra" className="logo-slider__image" />
            <img src={client9} alt="altrimak" className="logo-slider__image" />
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="full-width-container">
          <img
            src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720645850/agile/homebanner_jzifuz.jpg"
            alt="Banner"
            className=""
          />
          <div className="banner-content">
            <h2>Join the waitlist to showcase your AI products</h2>
            <div className="button-group">
              <Button variant="primary" onClick={register} className="banner-button">
                Register
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Most Visited Categories Section */}
      <section ref={servicesRef} className="most-visited-categories">
        <Container className="services-cat">
          <h1>AI Solutions</h1>
          <p>
            Our partners offer wide range of AI solutions for your business needs along with the cost-effective
            infrastructure.
          </p>
          <Row>
            {categories.map((category) => (
              <Col xs={4} sm={6} md={4} lg={3} xl={2} key={category.id} className="mb-4">
                <Card className="category-card" onClick={() => handleCardClick(category.id)}>
                  <Card.Img variant="top" src={category.imgSrc} alt="Service Icon" className="category-icon" />
                  <div className="cardBody">
                    <Card.Title className="title">{category.name}</Card.Title>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Home;
