import React, { useState, useEffect } from 'react'; // Ensure useState is imported
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles

import Footer from "./Footer";
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import Marquee from 'react-marquee-slider'; // Ensure you have this package installed
// or where you include styles in your project

const LandingPage = () => {
  const theme = {
    primary: '#333',
    secondary: '#f9f9f9',
    tertiary: '#666',
  };
  
  const [paused, setPaused] = useState(false); // Correctly initialize useState
  const statsData = [
    { count: 5000, text: "Communities Supported" },
    { count: 150, text: "Advocacy Campaigns" },
    { count: 25, text: "Years of Service" },
    { count: 112, text: "SNC Membership in 2024" },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervalIds = statsData.map((stat, index) => {
      const increment = Math.ceil(stat.count / 100); // Increment value
      return setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            i === index ? (count + increment >= stat.count ? stat.count : count + increment) : count
          )
        );
      }, 30);
    });

    // Clear intervals after counters reach their values
    return () => intervalIds.forEach(clearInterval);
  }, []);

  // The GeoJSON data for Somalia's boundaries
  const somaliaGeoJson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Somalia"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            // GeoJSON coordinates for Somalia (simplified)
            [
              [43.1319, 10.1776], [43.799, 10.7013], [44.339, 10.4183], // Add coordinates for Somalia here
              [45.3143562, 2.0469345], // Coordinates for Mogadishu to center the map
            ]
          ]
        }
      }
    ]
  };

  const mogadishuCoordinates = [2.0469345, 45.3143562]; // Coordinates for Mogadishu

  return (
    <div>
      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/voice.jpg" className="d-block w-100" alt="FMS" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
              <h5>
  <span style={{ color: '#FFC700' }}> VOICE</span> OF THE <span style={{ color: '#dbd924' }}>VOICELESS</span>
</h5>


                <p
  style={{
    color: '#ffffff', // Text color
    padding: '10px', // Add padding to give some space around the text
    borderRadius: '1px', // Optional: Round the corners
    opacity: '0.8', // Optional: Slight transparency for a softer look
  }}
>
The MROs Consortium in Somalia aims in Bringing Somalia to the Forefront.</p>
                {/* <p style={{ color: '#FFC700' }}>
                  The MROs Consortium in Somalia aims in Bringing Somalia to the Forefront.
                </p> */}
               <button
  className="btn btn-success caption-button bg-green-500 text-white py-2 px-4  shadow-md transition-transform transform hover:scale-105 active:scale-95"
>
  <Link
    to="/login"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    JOIN CONSORTIUM
  </Link>
</button>

              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="Somalia.webp" className="d-block w-100" alt="245D" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
                <h5>ADVOCATING FOR EQUALITY</h5>
                <p
  style={{
    color: '#f4450b', // Text color
    backgroundColor: '#c3f5ff', // Background color
    padding: '10px', // Add padding to give some space around the text
    borderRadius: '1px', // Optional: Round the corners
    opacity: '0.8', // Optional: Slight transparency for a softer look
  }}
>
  The MROs Consortium in Somalia aims to build a powerful coalition that amplifies the voices of minority communities ...
</p>

              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="src/components/somalia2.avif" className="d-block w-100" alt="PCA Services" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
              <h5>
  <span style={{ color: '#FFC700' }}> MARGINAlIZED</span> &  Minority People <span style={{ color: '#dbd924' }}></span>
</h5>


                {/* <h5 style={{ textTransform: 'uppercase', color: '#EEE' }}>
                  Marginalized & Minority People
                </h5> */}
                <p
  style={{
    color: '#f4450b', // Text color
    backgroundColor: '#c3f5ff', // Background color
    padding: '10px', // Add padding to give some space around the text
    borderRadius: '1px', // Optional: Round the corners
    opacity: '0.8', // Optional: Slight transparency for a softer look
  }}
>
The MROs Consortium in Somalia aims to build a powerful coalition that amplifies the voices of minority communities ...
</p>
                {/* <p style={{ color: '#FFC700' }}>
                  The MROs Consortium in Somalia aims to build a powerful coalition that amplifies the voices of minority communities ...
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Why Us Section */}
      <section className="why-us">
        <img src="/bowl.webp" alt="" className="why-us-image" />
        <div className="why-us-content">
          <h2>How we work in Somalia/Somaliland</h2>
          <p>
            Minority Rights Organizations (MRO) Consortium is a pioneering minority-led organization based in Somalia, dedicated to championing the rights and interests of marginalized communities. Founded and operated by minority groups themselves, our consortium serves as a crucial platform for advocacy, support, and collaboration.
          </p>
          <p>
            Our mission is to empower minority communities by addressing systemic injustices and promoting equitable treatment and promote social justice, equality, and inclusion for marginalized groups, ensuring their voices are heard and their rights protected.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
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

      {/* Beautiful Map Section */}
      <section className="map-section" style={{
  height: '500px',
  marginBottom: '50px',
  backgroundColor: '#f7f7f7',
  borderRadius: '15px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  backgroundImage: 'url("/bowl.webp")', // Corrected path with url() syntax
  backgroundSize: 'cover', // Ensures the image covers the section
  backgroundPosition: 'center', // Centers the background image
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
            <h3 style={{ color: '#1e3c72', fontWeight: 'bold' }}>Explore Our Work on the Map</h3>
          </div>

          <MapContainer center={mogadishuCoordinates} zoom={12} style={{ height: '500px', width: '100%' }}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={mogadishuCoordinates}>
              <Popup>
                <div style={{ textAlign: 'center' }}>
                  <strong>Somalia - Centered on the capital, Mogadishu</strong>
                </div>
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






// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import Footer from "./Footer";


// import { Link } from 'react-router-dom';


// const LandingPage = () => {
//   const theme = {
//     primary: '#333',
//     secondary: '#f9f9f9',
//     tertiary: '#666',
//   };

//   const [paused, setPaused] = useState(false);
//   const statsData = [
//     { count: 5000, text: "Communities Supported" },
//     { count: 150, text: "Advocacy Campaigns" },
//     { count: 25, text: "Years of Service" },
//     { count: 112, text: "SNC Membership in 2024" },
//   ];

//   const [counts, setCounts] = useState(statsData.map(() => 0));

//   useEffect(() => {
//     const intervalIds = statsData.map((stat, index) => {
//       const increment = Math.ceil(stat.count / 100);
//       return setInterval(() => {
//         setCounts((prevCounts) =>
//           prevCounts.map((count, i) =>
//             i === index ? (count + increment >= stat.count ? stat.count : count + increment) : count
//           )
//         );
//       }, 30);
//     });

//     return () => intervalIds.forEach(clearInterval);
//   }, []);

//   // Coordinates for Mogadishu, Somalia
//   const mogadishuCoordinates = [2.0469, 45.3182]; // Coordinates of Mogadishu

//   return (
//     <div>
//       {/* Carousel Section */}
//       <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="/manngo.jpg" className="d-block w-100" alt="FMS" />
//             <div className="carousel-caption carousel-caption-style">
//               <div className="caption-background">
//                 <h5>VOICE OF THE VOICELESS</h5>
//                 <p style={{ color: '#FFC700' }}>
//                   The MROs Consortium in Somalia aims in Bringing Somalia to the Forefront.
//                 </p>
//                 <button className="btn btn-success caption-button">
//                   <Link to="/consortium" style={{ textDecoration: 'none', color: 'inherit' }}>
//                     JOIN CONSORTIUM
//                   </Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="/motherchild.jpg" className="d-block w-100" alt="245D" />
//             <div className="carousel-caption carousel-caption-style">
//               <div className="caption-background">
//                 <h5>ADVOCATING FOR EQUALITY</h5>
//                 <p style={{ color: '#FFC700' }}>
//                   The MROs Consortium in Somalia aims to build a powerful coalition that amplifies the voices of minority communities ...
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="/happypeople.jpg" className="d-block w-100" alt="PCA Services" />
//             <div className="carousel-caption carousel-caption-style">
//               <div className="caption-background">
//                 <h5 style={{ textTransform: 'uppercase', color: '#EEE' }}>
//                   Marginalized & Minority People
//                 </h5>
//                 <p style={{ color: '#FFC700' }}>
//                   The MROs Consortium in Somalia aims to build a powerful coalition that amplifies the voices of minority communities ...
//                 </p>
//                 <button className="btn btn-success caption-button">JOIN CONSORTIUM</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       {/* Statistics Section */}
//       <section className="statistics" style={{ backgroundColor: 'white', padding: '40px 0' }}>
//         <div className="container text-center">
//           <div className="row">
//             {statsData.map((stat, index) => (
//               <div className="col-md-3 mb-4" key={index}>
//                 <div style={{
//                   padding: '20px',
//                   borderRadius: '10px',
//                   textAlign: 'center',
//                   backgroundColor: '#f1f1f1',
//                   boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
//                 }}>
//                   <h3 style={{ color: "#C4E1F6", fontSize: '3rem' }}>
//                     {counts[index]}+
//                   </h3>
//                   <p style={{ color: theme.primary, fontSize: '1.1rem', fontWeight: 'bold' }}>
//                     {stat.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Beautiful Map Section */}
//       <section className="map-section" style={{
//         height: '500px',
//         marginBottom: '50px',
//         backgroundColor: '#f7f7f7',
//         borderRadius: '15px',
//         boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
//         padding: '20px',
//       }}>
//         <div className="container">
//           <div className="map-container" style={{
//             backgroundColor: '#fff',
//             borderRadius: '15px',
//             padding: '20px',
//             boxShadow: '0 6px 30px rgba(0, 0, 0, 0.1)',
//             marginBottom: '30px',
//             textAlign: 'center'
//           }}>
//             <h3 style={{ color: '#1e3c72', fontWeight: 'bold' }}>Explore Our Work on the Map</h3>
//           </div>

//           <MapContainer center={mogadishuCoordinates} zoom={12} style={{ height: '500px', width: '100%' }}>
//           <TileLayer
// url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
// attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//             <Marker position={mogadishuCoordinates}>
//               <Popup>
//                 <div style={{ textAlign: 'center' }}>
//                   <strong>Somalia - Centered on the capital, Mogadishu</strong>
//                 </div>
//               </Popup>
//             </Marker>
//           </MapContainer>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;
