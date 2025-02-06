import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar.js";
import AllCategories from "./pages/AllCategories.js";
import TopFifty from "./pages/TopFifty.js";
import Home from "./pages/Home.js";
import CustomNav from "./components/CustomNav.js";
import Register from "./components/Register.js";
import UserServiceForm from "./components/UserServiceForm.js";
import UserDemoForm from "./components/UserDemoForm.js";
import ServiceDetails from "./pages/ServiceDetails.js";
import SearchResults from "./pages/SearchResults.js";
import ContactUs from "./pages/ContactUs.js";
import Blog from "./pages/blog.js";

import AboutUs from "./pages/AboutUs.js";
import About from "./pages/About.js";
import Footer from "./pages/Footer.js";
import DeepDiveMarTechBlog from "./pages/blogs/DeepDiveMarTechBlog.js";
import GenerativeAIBlog from "./pages/blogs/GenerativeAIBlog.js";
import HealthcareAIBlog from "./pages/blogs/HealthcareAIBlog.js";

function App() {
  return (
    <div>
      <Router>
        {/* {isAuthenticated && <Header />} */}
        <CustomNav />
        <Routes>
          <Route path="/service/:id" element={<ServiceDetails />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/about-us" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:searchTerm" element={<SearchResults />} />
          <Route path="/request-service" element={<UserServiceForm />} />
          <Route path="/request-demo" element={<UserDemoForm />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/a-deep-dive-into-7-emerging-martech-trends" element={<DeepDiveMarTechBlog />} />
          <Route path="/unleashing-the-transformative-power-of-generative-ai-in-overcoming-business-challenges" element={<GenerativeAIBlog />} />
          <Route path="/revolutionizing-healthcare-management-the-role-and-challenges-of-artificial-intelligence" element={<HealthcareAIBlog />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



