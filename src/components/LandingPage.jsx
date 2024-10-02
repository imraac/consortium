


import  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./Footer";
import './Navbar.css'; 
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/manngo.jpg" className="  d-block w-100" alt="FMS" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
               
                <h5>CAPACITY & BUILDING</h5>
                {/* <p>
                Enhancing the skills and capabilities of minority-led organizations .
                </p> */}
                <p style={{ color: '#FFC700' }}>
  SOM-NGO is committed to empowering marginalized and minority communities in Somalia...
</p>
                
                  <button className="btn btn-success caption-button">JOIN CONSORTIUM</button>
               
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/motherchild.jpg" className="d-block w-100" alt="245D" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
                <h5> STRUCTURE & MANAGEMENT</h5>
                {/* <p>
                Our organizational structure is designed to ensure effective management .
                </p> */}
<p style={{ color: '#4A4947 ' }}>
  SOM-NGO is committed to empowering marginalized communities...
</p>
                <button className="btn btn-success caption-button">JOIN CONSORTIUM</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/map2.png" className="d-block w-100" alt="PCA Services" />
            <div className="carousel-caption carousel-caption-style">
              <div className="caption-background">
              <h5 style={{ textTransform: 'uppercase', color: '#000000' }}>
  Marginalized & Minority People
</h5>

<p style={{ color: '#4A4947 ' }}>
  SOM-NGO is committed to empowering marginalize communities 
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
    

<section className="services">
  {[
    {
      icon: "fas fa-handshake",
      title: "MAIN ACTIVITIES",
      description: "Establishing and maintaining close links to other external actors whose actions impact upon Consortium members' work in Somalia.",
      link: "/about-us" // You can set the link here for this service
    },
    {
      icon: "fas fa-bullhorn",
      title: "SERVICES & ADVOCACY",
      description: "We do so much more than home care services for our clients.",
      link: "/advocacy" // Link for the advocacy service
    },
    {
      icon: "fa-solid fa-cogs", // Icon for additional services
      title: "ADDITIONAL SERVICES",
      description: "Explore additional services we provide to support the community and our partners.",
      link: "/strategy" // Link for the strategy service
    },
    {
      icon: "fas fa-chart-line",
      title: "ESTIMATED RESULTS",
      description: "Urgent and important joint actions are coordinated, and NGO key messages and advocacy.",
      link: "/structure-management" // Link for the estimated results service
    }
  ].map((service, index) => (
    <div className="services-col" key={service.title}>
      <i className={service.icon + " service-icon"} style={{ color: '#5bc6f8' }}></i> {/* Apply the color here */}
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <Link to={service.link} className="learn-more-button">
        LEARN MORE
      </Link>
    </div>
  ))}
</section>




      <Footer />
    </div>
  );
};

export default LandingPage;
