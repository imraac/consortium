// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Footer from "./Footer";
// import './Navbar.css'; // Import your CSS file

// const LandingPage = () => {
//   return (
//     <div>
//       {/* Carousel Section */}
//       <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="/motherchild.jpg" className="d-block w-100" alt="FMS" />
//             <div className="carousel-caption text-center carousel-caption-style">
//               <div className="caption-background">
//                 <div className="text-center my-4">
//                   <button className="btn btn-success caption-button">JOIN CONSORTIUM</button>
//                 </div>
//                 <h5>FMS</h5>
//                 <p>
//                   SOM-NGO is dedicated to improving the health and well-being of communities through sustainable and impactful health programs...
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="/motherchild.jpg" className="d-block w-100" alt="245D" />
//             <div className="carousel-caption text-center carousel-caption-style">
//               <div className="caption-background">
//                 <h5>Our Mission</h5>
//                 <p>
//                   Our mission is to promote sustainable development in areas affected by poverty, conflict, and natural disasters...
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="/motherchild.jpg" className="d-block w-100" alt="PCA Services" />
//             <div className="carousel-caption text-center carousel-caption-style">
//               <div className="caption-background">
//                 <h5>Marginalized & Minority People</h5>
//                 <p>
//                   SOM-NGO is committed to empowering marginalized and minority communities in Somalia...
//                 </p>
//                 <div className="text-center my-4">
//                   <button className="btn btn-success caption-button">JOIN CONSORTIUM</button>
//                 </div>
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
//             The Somali NGO Consortium is a voluntary coordination mechanism of NGOs for NGOs: given the highly insecure environment, the complexity of the operating environment, and the large numbers of agencies working in Somalia/Somaliland, a coordinated voice is critical to successfully conduct development and humanitarian aid.
//           </p>
//           <p>
//             The Somali NGO Consortium was established in 1999 and has since grown to become an effective network of non-governmental organisations (NGOs) working together to improve international aid coordination and raise the presence and profile of NGO representation within the aid coordination structure for Somalia/Somaliland. The NGO Consortium maintains its presence through its offices in Hargeisa, Garowe, Mogadishu, Baidao, Kismayo, and Dhusamareeb.
//           </p>
//           <p>
//             The reach of our services greatly extends beyond the immediate membership. We also work closely with INSO Somalia (formerly NSP and SPAS) in providing support to International and National NGOs so as to facilitate their safe and secure operations in Somalia / Somaliland.
//           </p>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services">
//         {[
//           { icon: "fas fa-hands-holding", title: "PCA HOME CARE", description: "Personal Care Assistants (PCAs) are provided by Minnesota Quality Care." },
//           { icon: "fa-solid fa-sitemap", title: "SOCIAL SUPPORT", description: "We do so much more than home care services for our clients." },
//           { icon: "fa-solid fa-hand-holding-heart", title: "SOCIAL SUPPORT", description: "We do so much more than home care services for our clients." },
//           { icon: "fa-solid fa-person-hiking", title: "TRANSPORTATION", description: "Transportation services for appointments, errands, and outings." },
//         ].map(service => (
//           <div className="services-col" key={service.title}>
//             <i className={service.icon + " service-icon"}></i>
//             <h3 className="service-title">{service.title}</h3>
//             <p className="service-description">{service.description}</p>
//             <button className="learn-more-button">LEARN MORE</button>
//           </div>
//         ))}
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./Footer";
import './Navbar.css'; // Import your CSS file

const LandingPage = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/motherchild.jpg" className="d-block w-100" alt="FMS" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
               
                <h5>FMS</h5>
                <p>
                  SOM-NGO is dedicated to improving the health and well-being of communities through sustainable and impactful health programs...
                </p>
                
                  <button className="btn btn-success caption-button">JOIN CONSORTIUM</button>
               
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/motherchild.jpg" className="d-block w-100" alt="245D" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
                <h5>Our Mission</h5>
                <p>
                  Our mission is to promote sustainable development in areas affected by poverty, conflict, and natural disasters...
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/motherchild.jpg" className="d-block w-100" alt="PCA Services" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
                <h5>Marginalized & Minority People</h5>
                <p>
                  SOM-NGO is committed to empowering marginalized and minority communities in Somalia...
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
            The Somali NGO Consortium is a voluntary coordination mechanism of NGOs for NGOs: given the highly insecure environment, the complexity of the operating environment, and the large numbers of agencies working in Somalia/Somaliland, a coordinated voice is critical to successfully conduct development and humanitarian aid.
          </p>
          <p>
            The Somali NGO Consortium was established in 1999 and has since grown to become an effective network of non-governmental organisations (NGOs) working together to improve international aid coordination and raise the presence and profile of NGO representation within the aid coordination structure for Somalia/Somaliland. The NGO Consortium maintains its presence through its offices in Hargeisa, Garowe, Mogadishu, Baidao, Kismayo, and Dhusamareeb.
          </p>
          <p>
            The reach of our services greatly extends beyond the immediate membership. We also work closely with INSO Somalia (formerly NSP and SPAS) in providing support to International and National NGOs so as to facilitate their safe and secure operations in Somalia / Somaliland.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        {[
          { icon: "fas fa-hands-holding", title: "PCA HOME CARE", description: "Personal Care Assistants (PCAs) are provided by Minnesota Quality Care." },
          { icon: "fa-solid fa-sitemap", title: "SOCIAL SUPPORT", description: "We do so much more than home care services for our clients." },
          { icon: "fa-solid fa-hand-holding-heart", title: "SOCIAL SUPPORT", description: "We do so much more than home care services for our clients." },
          { icon: "fa-solid fa-person-hiking", title: "TRANSPORTATION", description: "Transportation services for appointments, errands, and outings." },
        ].map(service => (
          <div className="services-col" key={service.title}>
            <i className={service.icon + " service-icon"}></i>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="learn-more-button">LEARN MORE</button>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
