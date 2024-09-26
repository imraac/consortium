

import React from 'react';
import './AboutUs.css';
import Footer from './Footer'; // Import the Footer component

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us">
        <h2>How we work in Somalia/Somaliland</h2>
        <p>
        Minority Rights Organizations (MRO) Consortium is a pioneering minority-led organization based in Somalia, dedicated to championing the rights and interests of marginalized communities. Founded and operated by minority groups themselves, our consortium serves as a crucial platform for advocacy, support, and collaboration.
        </p>
        <p>
        Our mission is to empower minority communities by addressing systemic injustices and promoting equitable treatment and promote social justice, equality, and inclusion for marginalized groups, ensuring their voices are heard and their rights protected.
        </p>
        <p>
        Minority Rights Organizations (MRO) focuses on influencing policy reforms, providing resources and training to minority-led organizations, and fostering a collaborative environment to tackle common challenges. Through our initiatives, we work to amplify the voices of those who are often unheard and to drive meaningful change at both local and national levels.
        </p>
        <p>
        We offer a range of services, including advocacy campaigns, NGO certification, coordination of joint efforts, and representation in key forums. Our goal is to build a more inclusive society where minority groups can thrive and fully participate in all aspects of public life. Through collective action, we envision a Somalia where diversity is embraced, and all individuals can live with dignity, free from discrimination and inequality.
        </p>
        <h2>Our Core Values</h2>
        <p>At the Minority Rights Organizations (MRO) Consortium, which is exclusively owned and managed by minority groups in Somalia, we are committed to:    • Inclusivity: Embracing the diversity of minority communities and ensuring all voices are represented.
    • Empowerment: Supporting minority groups in asserting their rights and identities.
    • Integrity: Upholding transparency, accountability, and ethical practices in all Consortium activities.
    • Solidarity: Promoting unity among organizations and communities in the pursuit of justice and equality.</p>
        <h2>Vision</h2>
        <p>Stronger together for resilient Somali Communities.</p>
        <h2>Mission</h2>
        <p>A coordination platform, focused on an enabling environment for efficient and effective delivery of humanitarian and development outcomes.</p>
      </div>

      <div className="contact-container">
        <h2>Also in this section</h2>
        <ul>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#core-values">Our Core Values</a></li>
          <li><a href="#mandate">Consortium Mandate</a></li>
          <li><a href="#structure">Consortium Structure & Management</a></li>
          <li><a href="#strategy">Strategy</a></li>
          <li><a href="#brochure">CONSORTIUM BROCHURE</a></li>
        </ul>

        <h2>Key Contacts</h2>
        <div className="contacts">
          <div>
            <h4>Secretariat</h4>
            <p><strong>Nimo Hassan</strong> - <a href="mailto:director@somaliangoconsortium.org">director@somaliangoconsortium.org</a></p>
            <h4>Deputy Director</h4>
            <p><strong>Abdulkadir Mohamed</strong> - <a href="mailto:dep.director@somaliangoconsortium.org">dep.director@somaliangoconsortium.org</a></p>
            <h4>Program Support Officer</h4>
            <p><strong>Rahma Ali</strong> - <a href="mailto:program.support@somaliangoconsortium.org">program.support@somaliangoconsortium.org</a></p>
            <h4>Membership & Communications Officer</h4>
            <p><strong>Abdisamad Yasin</strong> - <a href="mailto:comms@somaliangoconsortium.org">comms@somaliangoconsortium.org</a></p>
            <h4>Finance & Grants Manager</h4>
            <p><strong>Hassan Hussein</strong> - <a href="mailto:finance@somaliangoconsortium.org">finance@somaliangoconsortium.org</a></p>
            <h4>Partnership Specialist</h4>
            <p><strong>Ronald Isaac</strong> - <a href="mailto:partnership.grants.mgr@somaliangoconsortium.org">partnership.grants.mgr@somaliangoconsortium.org</a></p>
            <h4>Advocacy and Communications Specialist</h4>
            <p><strong>Abdullahi Noor</strong> - <a href="mailto:advocacy@somaliangoconsortium.org">advocacy@somaliangoconsortium.org</a></p>
          </div>

          <div>
            <h2>Regional Key Contacts</h2>
            <h4>Regional Coordinator - Somaliland, Puntland & Galmudug (Hargeisa based)</h4>
            <p><strong>Halimo Weheliye</strong> - <a href="mailto:rcsomaliland@somaliangoconsortium.org">rcsomaliland@somaliangoconsortium.org</a></p>
            <h4>Regional Coordinator - South (Mogadishu based)</h4>
            <p><strong>Abdirashiid Hirsi</strong> - <a href="mailto:rcsouth@somaliangoconsortium.org">rcsouth@somaliangoconsortium.org</a></p>
            <h4>Field Officer - Puntland (Garowe based)</h4>
            <p><strong>Abdisalam Mussa</strong> - <a href="mailto:fopuntland@somaliangoconsortium.org">fopuntland@somaliangoconsortium.org</a></p>
            <h4>Field Officer - South West (Baidoa based)</h4>
            <p><strong>Mohamed Ali Nor</strong> - <a href="mailto:fosouthwest@somaliangoconsortium.org">fosouthwest@somaliangoconsortium.org</a></p>
            <h4>Field Officer - Jubaland (Kismayo based)</h4>
            <p><strong>Mohamed Rahoy</strong> - <a href="mailto:fojubaland@somaliangoconsortium.org">fojubaland@somaliangoconsortium.org</a></p>
            <h4>Field Officer - Galmudug (Dhusamareb based)</h4>
            <p><strong>Abdurahman Ali</strong> - <a href="mailto:fogalmudug@somaliangoconsortium.org">fogalmudug@somaliangoconsortium.org</a></p>
          </div>
        </div>
      </div>

     {/* Place Footer component here */}
    </div>
    
  );
};

export default AboutUs;
