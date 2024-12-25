


// import React from 'react';
// import './AboutUs.css';
// import Footer from './Footer'; // Import the Footer component

// const AboutUs = () => {
//   return (
//     <div>
//       {/* Carousel Section */}
//       <section id="carouselExample" className="carousel slide" data-bs-ride="carousel">
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
//       </section>

//       <section className="about-us-container">
//         <article className="about-us">
//           <h2>How we work in Somalia/Somaliland</h2>
//           <p>
//             Minority Rights Organizations (MRO) Consortium is a pioneering minority-led organization based in Somalia, dedicated to championing the rights and interests of marginalized communities. Founded and operated by minority groups themselves, our consortium serves as a crucial platform for advocacy, support, and collaboration.
//           </p>
//           <p>
//             Our mission is to empower minority communities by addressing systemic injustices and promoting equitable treatment and promote social justice, equality, and inclusion for marginalized groups, ensuring their voices are heard and their rights protected.
//           </p>
//           <p>
//             Minority Rights Organizations (MRO) focuses on influencing policy reforms, providing resources and training to minority-led organizations, and fostering a collaborative environment to tackle common challenges. Through our initiatives, we work to amplify the voices of those who are often unheard and to drive meaningful change at both local and national levels.
//           </p>
//           <p>
//             We offer a range of services, including advocacy campaigns, NGO certification, coordination of joint efforts, and representation in key forums. Our goal is to build a more inclusive society where minority groups can thrive and fully participate in all aspects of public life. Through collective action, we envision a Somalia where diversity is embraced, and all individuals can live with dignity, free from discrimination and inequality.
//           </p>

//           <h2>Vision</h2>
//           <p className="centered-message">Stronger together for resilient Somali Communities.</p>

//           <h2>Mission</h2>
//           <p  className="centered-message">A coordination platform, focused on an enabling environment for efficient and effective delivery of humanitarian and development outcomes.</p>
//         </article>
//       </section>

//       {/* Footer component */}
//       <Footer />
//     </div>
//   );
// };

// export default AboutUs;



import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import './AboutUs.css';
import Footer from './Footer'; // Import the Footer component

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div>
        <main className="hero-gradient animate-bg relative">
          <header className="flex flex-row justify-center md:h-96 items-center p-8">
            <h1 className="text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold text-black text-center">
              Join the
              <div className="inline-block bg-orange-400 transform -rotate-3 px-1 md:px-2 rounded-md py-1 text-sm md:text-lg lg:text-xl xl:text-2xl">
                Minority Rights Organizations
              </div>
              Consortium
            </h1>
          </header>
    
          <img
            src="/readinguncle.jpg" // Correct image path without "/public"
            alt="Minority Rights Organizations"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: 0 }} // Start with opacity 0
          />
        </main>
      </div>

      {/* About Us Section */}
      <section className="about-us-container">
        <article className="about-us">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            How we work in Somalia/Somaliland
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Minority Rights Organizations (MRO) Consortium is a pioneering minority-led organization based in Somalia, dedicated to championing the rights and interests of marginalized communities. Founded and operated by minority groups themselves, our consortium serves as a crucial platform for advocacy, support, and collaboration.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Our mission is to empower minority communities by addressing systemic injustices and promoting equitable treatment and promote social justice, equality, and inclusion for marginalized groups, ensuring their voices are heard and their rights protected.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Minority Rights Organizations (MRO) focuses on influencing policy reforms, providing resources and training to minority-led organizations, and fostering a collaborative environment to tackle common challenges. Through our initiatives, we work to amplify the voices of those who are often unheard and to drive meaningful change at both local and national levels.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            We offer a range of services, including advocacy campaigns, NGO certification, coordination of joint efforts, and representation in key forums. Our goal is to build a more inclusive society where minority groups can thrive and fully participate in all aspects of public life. Through collective action, we envision a Somalia where diversity is embraced, and all individuals can live with dignity, free from discrimination and inequality.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Vision
          </motion.h2>
          <motion.p
            className="centered-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            Stronger together for resilient Somali Communities.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
          >
            Mission
          </motion.h2>
          <motion.p
            className="centered-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.1 }}
          >
            A coordination platform, focused on an enabling environment for efficient and effective delivery of humanitarian and development outcomes.
          </motion.p>
        </article>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default AboutUs;
