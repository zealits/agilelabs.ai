import React, { useEffect, useState } from "react";
import "./SearchResults.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message.js";
import { getAllServices } from "../services/actions/serviceActions";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices(searchTerm));
  }, [dispatch, searchTerm]);

  const handleServiceClick = (id) => {
    navigate(`/service/${id}`);
  };

  const { loading, error, services } = useSelector((state) => state.service);

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  const [showFullText, setShowFullText] = useState({});

  const toggleShowFullText = (id) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Container className="searchpage">
      <h1>Search Results for: "{searchTerm}"</h1>
      <p>Explore the services related to your search term "{searchTerm}".</p>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : services.length === 0 ? (
        <Message variant="info">No results found for "{searchTerm}"</Message>
      ) : (
        <Row>
          {services.map((service) => (
            <Col xs={12} sm={6} md={4} lg={3} key={service._id} className="mb-4">
              <Card className="service-card" onClick={() => handleServiceClick(service.id)}>
                <Card.Img variant="top" src={service.img} alt={service.name} className="service-icon" />
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>
                    {showFullText[service._id]
                      ? service.description
                      : truncateText(service.description, 20)}
                  </Card.Text>
                  {service.description.split(" ").length > 50 && (
                    <Button
                      variant="link"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleShowFullText(service._id);
                      }}
                    >
                      {showFullText[service._id] ? "Show Less" : "Show More"}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchResults;
