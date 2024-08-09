// TopFifty.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCompanies } from "../services/actions/companyActions";
import { FaCalendarAlt, FaUser, FaStar, FaLink } from "react-icons/fa";
import "./TopFifty.css";

const TopFifty = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);

  const { companies } = useSelector((state) => state.company);

  return (
    <div className="top-fifty-container">
      {companies &&
        companies.map((company) => (
          <div key={company._id} className="card">
            <div className="header">
              <div className="icon">
                <img src={company.icon} alt="icon" />
              </div>
              <div className="details">
                <h3>{company.name}</h3>
                <p>{company.serviceType}</p>
                <div className="info-row">
                  <span>
                    <FaCalendarAlt /> {company.yearEstablished}
                  </span>
                  <span>
                    <FaUser /> {company.employees}+
                  </span>
                  <span>
                    <FaStar /> {company.rating}
                  </span>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="services">
                <h4>Services</h4>
                {company.services.map((service, index) => (
                  <div key={index} className="service">
                    {service}
                  </div>
                ))}
              </div>
              <p className="info">{company.info}</p>
              <a href={company.website} className="website-link" target="_blank" rel="noopener noreferrer">
                <FaLink /> Visit Website
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TopFifty;
