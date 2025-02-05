import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import Footer from "./Footer";
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import Marquee from 'react-marquee-slider'; 

const LandingPage = () => {
  const theme = {
    primary: '#333',
    secondary: '#f9f9f9',
    tertiary: '#666',
  };
  
  const [paused, setPaused] = useState(false);
  const statsData = [
    { count: 0, text: "Communities Supported" },
    { count: 0, text: "Advocacy Campaigns" },
    { count: 0, text: "Years of Service" },
    { count: 0, text: "SNC Membership in 2024" },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervalIds = statsData.map((stat, index) => {
      const increment = Math.ceil(stat.count / 100);
      return setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            i === index ? (count + increment >= stat.count ? stat.count : count + increment) : count
          )
        );
      }, 30);
    });

    return () => intervalIds.forEach(clearInterval);
  }, []);

  const mogadishuCoordinates = [2.0469345, 45.3143562];

  return (
    <div>
           <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/voice.jpg" className="d-block w-100" alt="FMS" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
                <h5><span style={{ color: '#FFC700' }}>VOICE</span> OF THE <span style={{ color: '#dbd924' }}>VOICELESS</span></h5>
                <p style={{ color: '#ffffff', padding: '10px', opacity: '0.8' }}>
                  The MROs Consortium in Somalia aims in Bringing Somalia to the Forefront.
                </p>
                <button className="btn btn-success caption-button">
                  <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>JOIN CONSORTIUM</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Somalia.webp" className="d-block w-100" alt="245D" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
                <h5>ADVOCATING FOR EQUALITY</h5>
                <p style={{ color: '#FFC700' }}>
                  The MROs Consortium in Somalia aims to build a powerful coalition that amplifies the voices of minority communities ...
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/somalia2.avif" className="d-block w-100" alt="PCA Services" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
       
                <h5><span style={{ color: '#FFC700' }}>MARGINALIZED</span> &  <span style={{ color: '#dbd924' }}>MINORITY</span> PEOPLE</h5>

                <p style={{ color: '#34362f' }}>
                  The MROs Consortium in Somalia aims to build a powerful coalition that amplifies the voices of minority communities ...
                </p>
                {/* <button className="btn btn-success caption-button">JOIN CONSORTIUM</button> */}
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <section className="why-us">
        <img src="/bowl.webp" alt="" className="why-us-image" />
        <div className="why-us-content">
          <h2>How we work in Somalia/Somaliland</h2>
          <p>
            Minority Rights Organizations (MRO) Consortium is a pioneering minority-led organization based in Somalia, dedicated to championing the rights and interests of marginalized communities.
            Founded and operated by minority groups themselves, our consortium serves as a crucial platform for advocacy, support, and collaboration.
          </p>
          <p>
            Our mission is to empower minority communities by addressing systemic injustices and promoting equitable treatment and promote social justice, equality, and inclusion for marginalized groups, ensuring their voices are heard and their rights protected.
          </p>
        </div>
      </section>

      <section className="statistics" style={{ backgroundColor: 'white', padding: '40px 0' }}>
        <div className="container text-center">
          <div className="row">
            {statsData.map((stat, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div style={{
                  padding: '20px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                }}>
                  <h3 style={{ color: "#fd9c3c", fontSize: '3rem' }}>
                    {counts[index]}+
                  </h3>
                  <p style={{ color: theme.primary, fontSize: '1.1rem', fontWeight: 'bold' }}>
                    {stat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section" style={{
        height: '500px',
        marginBottom: '50px',
        backgroundColor: '#f7f7f7',
        borderRadius: '15px',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        backgroundImage: 'url("/wow.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container">
          <div className="map-container" style={{
            backgroundColor: '#fff',
            borderRadius: '15px',
            padding: '20px',
            boxShadow: '0 6px 30px rgba(0, 0, 0, 0.1)',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#1e3c72', fontWeight: 'bold' }}>Explore </h3>
          </div>
          <MapContainer center={mogadishuCoordinates} zoom={6} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={mogadishuCoordinates}>
              <Popup>
                Mogadishu - The capital of Somalia.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
