


// import  'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Footer from "./Footer";
// import './Navbar.css'; 
// import { Link } from 'react-router-dom';


// const LandingPage = () => {
  
//   return (
//     <div>
//       {/* Carousel Section */}
//       <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="/manngo.jpg" className="  d-block w-100" alt="FMS" />
//             <div className="carousel-caption carousel-caption-style">
//               <div className="caption-background">
               
//                 <h5>SERVICES& ADVOCACY</h5>
//                 {/* <p>
//                 Enhancing the skills and capabilities of minority-led organizations .
//                 </p> */}
//                 <p style={{ color: '#FFC700' }}>
//                 The MROs Consortium in Somalia aims in
//                 Bringing Somalia to the Forefront .
// </p>
                
//                   <button className="btn btn-success caption-button">JOIN CONSORTIUM</button>
               
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="/motherchild.jpg" className="d-block w-100" alt="245D" />
//             <div className="carousel-caption carousel-caption-style">
//               <div className="caption-background">
//                 <h5> STRUCTURE & MANAGEMENT</h5>
//                 {/* <p>
//                 Our organizational structure is designed to ensure effective management .
//                 </p> */}
// <p style={{ color: '#FFC700 ' }}>
// The MROs Consortium in Somalia aims to build a powerful coalition that amplifies the voices of minority communities ...
// </p>

//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="/map2.png" className="d-block w-100" alt="PCA Services" />
//             <div className="carousel-caption carousel-caption-style">
//               <div className="caption-background">
//               <h5 style={{ textTransform: 'uppercase', color: '#000000' }}>
//   Marginalized & Minority People
// </h5>

// <p style={{ color: '#4A4947 ' }}>
// Our organization provides various support services to enhance the capabilities of local NGOs.
// </p>
// <button className="btn btn-success caption-button">JOIN CONSORTIUM</button>

               
                  
                
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

//       {/* Why Us Section */}
//       <section className="why-us">
//         <img src="/smallgirl.jpg" alt="" className="why-us-image" />
//         <div className="why-us-content">
//           <h2>How we work in Somalia/Somaliland</h2>
//           <p>
//           Minority Rights Organizations (MRO) Consortium is a pioneering minority-led organization based in Somalia, dedicated to championing the rights and interests of marginalized communities. Founded and operated by minority groups themselves, our consortium serves as a crucial platform for advocacy, support, and collaboration.
//           </p>
//           <p>
//           Our mission is to empower minority communities by addressing systemic injustices and promoting equitable treatment and promote social justice, equality, and inclusion for marginalized groups, ensuring their voices are heard and their rights protected.
//           Minority Rights Organizations (MRO) focuses on influencing policy reforms, providing resources and training to minority-led organizations, and fostering a collaborative environment to tackle common challenges. Through our initiatives, we work to amplify the voices of those who are often unheard and to drive meaningful change at both local and national levels.


//           </p>
//           <p>
//           We offer a range of services, including advocacy campaigns, NGO certification, coordination of joint efforts, and representation in key forums. Our goal is to build a more inclusive society where minority groups can thrive and fully participate in all aspects of public life. Through collective action, we envision a Somalia where diversity is embraced, and all individuals can live with dignity, free from discrimination and inequality.
//           </p>
//         </div>
//       </section>
    

// <section className="services" style={{ backgroundColor: theme.secondary }}>
//   <div className="servicesHeader">
//     <h2 style={{ color: theme.primary }}>Our Services</h2>
//   </div>
//   <div className="servicesContainer">
//     {[
//       {
//         icon: "fas fa-handshake",
//         title: "MAIN ACTIVITIES",
//         description: "Establishing and maintaining close links to other external actors whose actions impact upon Consortium members' work in Somalia.",
//         link: "/about-us" // You can set the link here for this service
//       },
//       {
//         icon: "fas fa-bullhorn",
//         title: "SERVICES & ADVOCACY",
//         description: "We do so much more than home care services for our clients.",
//         link: "/advocacy" // Link for the advocacy service
//       },
//       {
//         icon: "fa-solid fa-cogs", // Icon for additional services
//         title: "ADDITIONAL SERVICES",
//         description: "Explore additional services we provide to support the community and our partners.",
//         link: "/strategy" // Link for the strategy service
//       },
//       {
//         icon: "fas fa-chart-line",
//         title: "ESTIMATED RESULTS",
//         description: "Urgent and important joint actions are coordinated, and NGO key messages and advocacy.",
//         link: "/structure-management" // Link for the estimated results service
//       }
//     ].map((service, index) => (
//       <div className="service--box" key={service.title}>
//         <i className={service.icon + " service-icon"} style={{ color: '#5bc6f8' }}></i>
//         <h3 style={{ color: theme.tertiary }}>{service.title}</h3>
//         <p className="service-description">{service.description}</p>
//         <Link to={service.link} className="learn-more-button">LEARN MORE</Link>
//       </div>
//     ))}
//   </div>
// </section>





//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Footer from "./Footer";
// import './Navbar.css'; 
// import { Link } from 'react-router-dom';
// import Marquee from 'react-marquee-slider'; // Ensure you have this package installed

// const LandingPage = () => {
//   const theme = {
//     primary: '#333',
//     secondary: '#f9f9f9',
//     tertiary: '#666',
//   };
// const [paused, setPaused] = useState(false);

//   return (
//     <div>
//       {/* Carousel Section */}
//       <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="/manngo.jpg" className="d-block w-100" alt="FMS" />
//             <div className="carousel-caption carousel-caption-style">
//               <div className="caption-background">
//                 <h5>SERVICES & ADVOCACY</h5>
//                 <p style={{ color: '#FFC700' }}>
//                   The MROs Consortium in Somalia aims in Bringing Somalia to the Forefront.
//                 </p>
//                 <button className="btn btn-success caption-button">JOIN CONSORTIUM</button>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="/motherchild.jpg" className="d-block w-100" alt="245D" />
//             <div className="carousel-caption carousel-caption-style">
//               <div className="caption-background">
//                 <h5>STRUCTURE & MANAGEMENT</h5>
//                 <p style={{ color: '#FFC700' }}>
//                   The MROs Consortium in Somalia aims to build a powerful coalition that amplifies the voices of minority communities ...
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="/map2.png" className="d-block w-100" alt="PCA Services" />
//             <div className="carousel-caption carousel-caption-style">
//               <div className="caption-background">
//                 <h5 style={{ textTransform: 'uppercase', color: '#000000' }}>
//                   Marginalized & Minority People
//                 </h5>
//                 <p style={{ color: '#4A4947' }}>
//                   Our organization provides various support services to enhance the capabilities of local NGOs.
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

//       {/* Why Us Section */}
//       <section className="why-us">
//         <img src="/smallgirl.jpg" alt="" className="why-us-image" />
//         <div className="why-us-content">
//           <h2>How we work in Somalia/Somaliland</h2>
//           <p>
//             Minority Rights Organizations (MRO) Consortium is a pioneering minority-led organization based in Somalia, dedicated to championing the rights and interests of marginalized communities. Founded and operated by minority groups themselves, our consortium serves as a crucial platform for advocacy, support, and collaboration.
//           </p>
//           <p>
//             Our mission is to empower minority communities by addressing systemic injustices and promoting equitable treatment and promote social justice, equality, and inclusion for marginalized groups, ensuring their voices are heard and their rights protected.
//             Minority Rights Organizations (MRO) focuses on influencing policy reforms, providing resources and training to minority-led organizations, and fostering a collaborative environment to tackle common challenges. Through our initiatives, we work to amplify the voices of those who are often unheard and to drive meaningful change at both local and national levels.
//           </p>
//           <p>
//             We offer a range of services, including advocacy campaigns, NGO certification, coordination of joint efforts, and representation in key forums. Our goal is to build a more inclusive society where minority groups can thrive and fully participate in all aspects of public life. Through collective action, we envision a Somalia where diversity is embraced, and all individuals can live with dignity, free from discrimination and inequality.
//           </p>
//         </div>
//       </section>

//       {/* Services Section with Marquee */}
//       <section className="services" style={{ backgroundColor: theme.secondary }}>
//   <div className="servicesContainer">
//     <div className="service--scroll">
//       <Marquee 
//         gradient={false} 
//         speed={10} 
//         pauseOnHover={true}
//         pauseOnClick={true} 
//         delay={50}   
//         play={true} 
//         direction="left"
        
//       >
//         {[
//           {
//             icon: "fas fa-handshake",
//             title: "MAIN ACTIVITIES",
//             description: "Establishing and maintaining close links to other external actors whose actions impact upon Consortium members' work in Somalia. Coordination and facilitation of public briefings and media events to increase public understanding of NGO programming and major humanitarian and developmental concerns in Somalia.",
//             link: "/about-us"
//           },
//           {
//             icon: "fas fa-bullhorn",
//             title: "SERVICES & ADVOCACY",
//             description: "We do so much more than home care services for our clients. The Somalia NGO Consortium facilitates joint approaches and advocacy and influences policy change, increasing local, regional, and international awareness of Somali humanitarian and development issues.",
//             link: "/advocacy"
//           },
//           {
//             icon: "fa-solid fa-cogs",
//             title: "ADDITIONAL SERVICES",
//             description: "Explore additional services we provide to support the community and our partners.",
//             link: "/strategy"
//           },
//           {
//             icon: "fas fa-chart-line",
//             title: "ESTIMATED RESULTS",
//             description: "Urgent and important joint actions are coordinated, and NGO key messages and advocacy.",
//             link: "/structure-management"
//           }
//         ].map((service, index) => (
//           <div className="service--box" key={index} style={{
//             backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Transparent/very light background
//             backdropFilter: 'blur(10px)',  // Apply blur effect
//             border: '1px solid rgba(255, 255, 255, 0.3)',  // Light border to enhance frosted-glass look
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',    // Subtle shadow for depth
//             padding: '20px',
//             borderRadius: '10px',
//             textAlign: 'center',
//             minWidth: '200px',
//             margin: '10px',
//           }}>
//             <i className={`${service.icon} service-icon`} style={{ color: '#ffffff' }}></i> {/* White icon color */}
//             <h3 style={{ color: '#ffffff' }}>{service.title}</h3> {/* White text for clarity */}
//             <p className="service-description" style={{ color: '#eeeeee' }}>{service.description}</p> {/* Slightly lighter text */}
//             <Link to={service.link} className="learn-more-button" style={{
//               color: '#ffffff',  // White link color
//               borderBottom: '1px solid #ffffff',
//               textDecoration: 'none',
//             }}>
//               LEARN MORE
//             </Link>
//           </div>
//         ))}
//       </Marquee>
//     </div>
//   </div>
// </section>



//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;


import React, { useState, useEffect } from 'react'; // Ensure useState is imported
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles

import Footer from "./Footer";
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import Marquee from 'react-marquee-slider'; // Ensure you have this package installed

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
            // You can find the complete GeoJSON data for Somalia on various GeoJSON repositories.
            [45.3143562, 2.0469345], // Coordinates for Mogadishu to center the map
          ]
        ]
      }
    }
  ]
};
  return (
    <div>
      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/manngo.jpg" className="d-block w-100" alt="FMS" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
                <h5>VOICE OF THE VOICELESS</h5>
                <p style={{ color: '#FFC700' }}>
                  The MROs Consortium in Somalia aims in Bringing Somalia to the Forefront.
                </p>
                <button className="btn btn-success caption-button">JOIN CONSORTIUM</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/motherchild.jpg" className="d-block w-100" alt="245D" />
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
            <img src="/happypeople.jpg" className="d-block w-100" alt="PCA Services" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
                <h5 style={{ textTransform: 'uppercase', color: '#EEE' }}>
                  Marginalized & Minority People
                </h5>
                <p style={{ color: '#FFC700' }}>
                  The MROs Consortium in Somalia aims to build a powerful coalition that amplifies the voices of minority communities ...
                </p>
                <button className="btn btn-success caption-button">JOIN CONSORTIUM</button>
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
        <img src="/smallgirl.jpg" alt="" className="why-us-image" />
        <div className="why-us-content">
          <h2>How we work in Somalia/Somaliland</h2>
          <p>
            Minority Rights Organizations (MRO) Consortium is a pioneering minority-led organization based in Somalia, dedicated to championing the rights and interests of marginalized communities. Founded and operated by minority groups themselves, our consortium serves as a crucial platform for advocacy, support, and collaboration.
          </p>
          <p>
            Our mission is to empower minority communities by addressing systemic injustices and promoting equitable treatment and promote social justice, equality, and inclusion for marginalized groups, ensuring their voices are heard and their rights protected.
            Minority Rights Organizations (MRO) focuses on influencing policy reforms, providing resources and training to minority-led organizations, and fostering a collaborative environment to tackle common challenges. Through our initiatives, we work to amplify the voices of those who are often unheard and to drive meaningful change at both local and national levels.
          </p>
          <p>
            We offer a range of services, including advocacy campaigns, NGO certification, coordination of joint efforts, and representation in key forums. Our goal is to build a more inclusive society where minority groups can thrive and fully participate in all aspects of public life. Through collective action, we envision a Somalia where diversity is embraced, and all individuals can live with dignity, free from discrimination and inequality.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics" style={{ backgroundColor: 'white', padding: '40px 0' }}>
        <div className="container text-center">
          <h2 style={{ color: theme.secondary }}>Our Impact</h2>
          <div className="row">
            {statsData.map((stat, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div style={{
                  padding: '20px',
                  borderRadius: '10px',
                
                  textAlign: 'center',
                }}>
                  <h3 style={{ color: "#C4E1F6", fontSize: '3rem' }}>
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
      <section className="map-section" style={{ padding: '0px 0', textAlign: 'center', backgroundColor: '#ff0000' }}>
        <div className="map-container" style={{ width: '100%', height: '400px' }}>
          <MapContainer center={[2.0469345, 45.3143562]} zoom={12} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[2.0469345, 45.3143562]}>
              <Popup>Mogadishu, Somalia</Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
      {/* Services Section with Marquee */}
      <section className="services" style={{ backgroundColor: theme.secondary }}>
        <div className="servicesContainer">
          <div className="service--scroll">
            <Marquee 
              gradient={false} 
              speed={5} // Adjust speed to be slower
              pauseOnHover={true}
              pauseOnClick={true} 
              delay={5000}   
              direction="left"
              paused={paused ? true : undefined} // Proper handling of paused state
              onMouseEnter={() => setPaused(true)} 
              onMouseLeave={() => setPaused(false)}
            >
              {[
                {
                  icon: "fas fa-handshake",
                  title: "MAIN ACTIVITIES",
                  description: "Establishing and maintaining close links to other external actors whose actions impact upon Consortium members' work in Somalia. Coordination and facilitation of public briefings and media events to increase public understanding of NGO programming and major humanitarian and developmental concerns in Somalia.",
                  link: "/about-us"
                },
                {
                  icon: "fas fa-bullhorn",
                  title: "SERVICES & ADVOCACY",
                  description: "We do so much more than home care services for our clients. The Somalia NGO Consortium facilitates joint approaches and advocacy and influences policy change, increasing local, regional, and international awareness of Somali humanitarian and development issues.",
                  link: "/advocacy"
                },
                {
                  icon: "fa-solid fa-cogs",
                  title: "ADDITIONAL SERVICES",
                  description: "Explore additional services we provide to support the community and our partners.",
                  link: "/strategy"
                },
                {
                  icon: "fas fa-chart-line",
                  title: "ESTIMATED RESULTS",
                  description: "Urgent and important joint actions are coordinated, and NGO key messages and advocacy.",
                  link: "/structure-management"
                }
              ].map((service, index) => (
                <div className="service--box" key={index} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Transparent/very light background
                  backdropFilter: 'blur(10px)',  // Apply blur effect
                  border: '1px solid rgba(255, 255, 255, 0.3)',  // Light border to enhance frosted-glass look
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',    // Subtle shadow for depth
                  padding: '20px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  minWidth: '200px',
                  margin: '10px',
                }}>
                  <i className={`${service.icon} service-icon`} style={{ color: '#ffffff' }}></i> {/* White icon color */}
                  <h3 style={{ color: '#ffffff' }}>{service.title}</h3> {/* White text for clarity */}
                  <p className="service-description" style={{ color: '#eeeeee' }}>{service.description}</p> {/* Slightly lighter text */}
                  <Link to={service.link} className="learn-more-button" style={{
                    color: '#ffffff',  // White link color
                    borderBottom: '1px solid #ffffff',
                    textDecoration: 'none',
                  }}>
                    LEARN MORE
                  </Link>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Map Section */}
   

      <Footer />
    </div>
  );
};

export default LandingPage;
