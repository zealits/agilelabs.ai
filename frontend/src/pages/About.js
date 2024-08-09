import React, { useRef, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import aboutVideo from "../assets/video/about.mp4";
import globalmentor from "../assets/images/aboutus/globalmentor.png";
import planning from "../assets/images/aboutus/planning.png";
import dataanalysis from "../assets/images/aboutus/dataanalysis.png";

const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Attempt to play the video
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started
        })
        .catch((error) => {
          // Autoplay was prevented
          console.log("Autoplay prevented: ", error);
          // Optionally show a play button for user interaction
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

  return (
    <div className="about-container">
      <video ref={videoRef} className="background-video" loop muted>
        <source src={aboutVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>About Us</h1>
        <h2>Agile & Quality AI, VR, and AR Solution Provider</h2>
        <p>
          Agilelabs.AI is a leading organization specializing in artificial intelligence, data analytics, and cloud
          computing. By collaborating with top companies, Agilelabs.AI develops tailored solutions to enhance
          innovation, streamline operations, lower expenses, and gain an edge over competitors. Agilelabs.AI utilizes
          advanced tools and techniques to create customized solutions that meet specific client needs, addressing
          intricate business challenges.
        </p>
        <p>
          Through cloud-native technology, Agilelabs.AI delivers scalable, secure, and cost-effective solutions to
          ensure clients can focus on core competencies while leaving technology needs to experts. Agilelabs.AI’s
          commitment to staying at the forefront of technological advancements is reflected in its ability to understand
          client needs, design custom solutions, and deliver results, setting it apart from the competition. Overall,
          Agilelabs.AI is a dedicated organization that provides state-of-the-art solutions to complex technological
          challenges faced by businesses today.
        </p>



        {/* provide the mobile view responsive css for below compoenent */}
        <h3 className="headingsec">Service Portfolio</h3>
        <Carousel className="service-carousel">
          <Carousel.Item>
            <div className="boss">
            <div className="service-card">
              <img src="https://agilelabs.ai/wp-content/uploads/2023/04/Annotation.png" alt="Annotation" />
              <h4>Annotation</h4>
              <p>
                Image – Point & Box, Video – Point & Box, Speech, Error Annotation, Display Format Text, Localization,
                Global Crowd
              </p>
            </div>
            <div>
            </div>
            <div className="additional-points">
            <h4>Unlocking the Value of Text Data</h4>
            <ul>
              <li>Multi-source, multi-language text data capabilities</li>
              <li>Deep annotation and textualization centered on client-defined parameters</li>
              <li>Optimized management practices overseen by experts with experience running enterprise-scale data pipelines</li>
              <li>Integrated quality control and monitoring at every stage of collection and analysis</li>
              <li>Smart automation and pre-built pipeline templates for unmatched efficiency across diverse use cases</li>
              <li>Nuanced treatment of factors ranging from context to intent, grammar and word-choice</li>
            </ul>
          </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="boss">
            <div className="service-card">
              <img src="https://agilelabs.ai/wp-content/uploads/2023/04/map.png" alt="Maps" />
              <h4>MAPS</h4>
              <p>End-to-end Maps Data Collection Outdoor mapping- Drive, Pedestrian, Indoor mapping, Transit, Venue</p>
            </div>
            <div>

            <div className="additional-points">
            <h4> A ROAD MAP TO BETTER DATA</h4>
            <ul>
              <li>Unlocked location-rich data ranging from interior maps to city transit guides</li>
              <li>Extensive annotation and contextualization centered on client-selected priorities</li>
              <li>Proven management techniques, run by pros with experience in running enterprise-scale data pipelines across the globe</li>
              <li> Best practices for quality control and monitoring baked in at every stage of collection and processing</li>
              <li>Smart automation and pre-built pipeline templates enabling efficient handling of map-data even at a massive scale</li>
              <li>Analysis of subtle geographic factors and background research for deep contextualization</li>
            </ul>
          </div>
      
            </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
        <div className="carousel-item-content">
        <div className="boss">
          <div className="service-card">
            <img src="https://agilelabs.ai/wp-content/uploads/2023/04/user.png" alt="User Studies" />
            <h4>User Studies</h4>
            <p>
              Prototypes, Handhelds, Wearables User Experiences, Benchmarking, Diverse protocols, Diverse
              demographics, Biometrics, GPS coordinates, Global Outreach, Live On & One time
            </p>
          </div>
          <div className="additional-points">
            <h4>User Studies</h4>
            <ul>
              <li>Comprehensive user experience analysis</li>
              <li>Diverse protocols and demographics</li>
              <li>Biometric data collection</li>
              <li>GPS coordinate tracking</li>
              <li>Global outreach programs</li>
            </ul>
          </div>
          </div>
        </div>
      </Carousel.Item>
      
      <Carousel.Item>
        <div className="carousel-item-content">
        <div className="boss">
          <div className="service-card">
            <img src="https://agilelabs.ai/wp-content/uploads/2023/04/ar.png" alt="AR/VR" />
            <h4>AR/VR</h4>
            <p>
              Venue Scanning- Indoor & Outdoor, Lidar Scanning- Video Recording, Object Scanning, 3DMD scanning,
              Handling Prototypes, Diverse Scenes, Diverse Geography
            </p>
          </div>
          <div className="additional-points">
            <h4>AR/VR Services</h4>
            <ul>
              <li>Comprehensive venue scanning</li>
              <li>Advanced Lidar and 3DMD scanning</li>
              <li>Diverse scene and geography handling</li>
              <li>Prototyping and object scanning</li>
            </ul>
          </div>
        </div>
      </div>
      </Carousel.Item>
      
      <Carousel.Item>
        <div className="carousel-item-content">
        <div className="boss">
          <div className="service-card">
            <img src="https://agilelabs.ai/wp-content/uploads/2023/04/data.png" alt="Data Collection" />
            <h4>Data Collection</h4>
            <p>
              Image, Video, Speech Optical Character Recognition (OCR) Food, Products, Signages, etc. Short Range &
              Long range videos, Activities, POI, Venue, 3D video, etc. Utterances, Command Prompts, Dictation,
              Conversation, Meeting
            </p>
          </div>
          <div className="additional-points">
            <h4>Data Collection Services</h4>
            <ul>
              <li>Comprehensive image, video, and speech OCR</li>
              <li>Food, product, and signage data collection</li>
              <li>Short and long-range video data</li>
              <li>Activities, POI, and venue data collection</li>
              <li>Utterances and command prompts data</li>
            </ul>
          </div>
        </div>
        </div>
      </Carousel.Item>
        </Carousel>



        <h3 className="headingsec">Some Reasons to Work Together</h3>
        <div className="reasons">
          <div className="reason-card">
            <img src={globalmentor} alt="aboutimage" className="icon" />
            <h4>Global Mentors Network</h4>
            <p>
              Agilelabs AI has extensive access to the Global tech solutions network. Our training facilities are
              located in Dallas.
            </p>
          </div>
          <div className="reason-card">
            <img src={planning} alt="aboutimage" className="icon" />
            <h4>Planning & Strategy</h4>
            <p>
              We offer IT resource management based on client specifications and simultaneous IT consulting on real-time
              project requirements.
            </p>
          </div>
          <div className="reason-card">
            <img src={dataanalysis} alt="aboutimage" className="icon" />
            <h4>Driving Business Value With Data</h4>
            <p>
              We deliver innovative data & AI solutions to help customers build a data-driven culture and empower their
              business decisions with insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
