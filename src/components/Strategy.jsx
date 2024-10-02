



import React from 'react';
import './Strategy.css'; // Import the CSS file
import Footer from './Footer';

const Strategy = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="strategy-container">
          <p>
            The Minority Rights Organizations (MROs) Consortium in Somalia aims to address the unique challenges faced by minority communities in the country. This strategy outlines our approach to promoting and protecting minority rights through advocacy, collaboration, and capacity building.
            The MROs Consortium strategy in Somalia aims to create a cohesive and effective network dedicated to advancing minority rights. Through collaboration, capacity building, and targeted advocacy, we strive to ensure that all minority communities are recognized, protected, and empowered to contribute to a more inclusive society.
            The NGO-Certification program is designed to:
    1. Validate Standards: The Consortium ensures that organizations claiming to be minority-led are genuine and adhere to the highest ethical standards and best practices. This validation process guarantees that these organizations truly represent and serve minority communities.
    2. Certification Process: The certification process involves a thorough review of each organization's practices, governance, and impact. A panel of experts conducts this evaluation to ensure transparency and integrity. This rigorous process ensures that only organizations meeting the criteria are recognized as minority-led.
    3. Benefits of Certification: Certified minority-led organizations gain several key advantages:
    • Credibility: Enhanced reputation and trust among donors, partners, and beneficiaries.
    • Access to Resources: Increased opportunities for funding, partnerships, and capacity-building initiatives.
    • Networking Opportunities: Greater access to a network of like-minded organizations, enhancing collaboration and impact.



{/* Download button */}
<div className="download-section">
  <a
    href="/MRO_-Web Information (5).docx"
    download="MRO_-Web Information (5).docx"
    className="download-button"
  >
    <button className="button-style">
      Download MRO Web Information
    </button>
  </a>
</div>


          </p>

    


          {/* Your SVG content here */}
          <svg className="strategy-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
        
        {/* Strategic Goal 1 */}
        <g transform="translate(20, 100)">
          <rect x="0" y="-20" width="760" height="140" fill="#e0e0e0" stroke="#bbb" />
          <text className="strategy-goal">Strengthen Advocacy Efforts</text>
          <text x="20" y="20">Objective: Amplify the voices of minority communities and influence policy changes.</text>
          <text x="20" y="40">Actions:</text>
          <text x="40" y="60">- Develop a comprehensive advocacy plan focusing on key issues.</text>
          <text x="40" y="80">- Engage with stakeholders to build support for minority rights.</text>
          <text x="40" y="100">- Organize campaigns highlighting injustices faced by minority groups.</text>
        </g>

        {/* Strategic Goal 2 */}
        <g transform="translate(20, 240)">
          <rect x="0" y="-20" width="760" height="140" fill="#e0e0e0" stroke="#bbb" />
          <text className="strategy-goal">Enhance Collaboration Among Members</text>
          <text x="20" y="20">Objective: Foster a united approach to address minority rights challenges.</text>
          <text x="20" y="40">Actions:</text>
          <text x="40" y="60">- Establish regular communication channels among member organizations.</text>
          <text x="40" y="80">- Organize joint workshops and training sessions.</text>
          <text x="40" y="100">- Create a platform for sharing successful case studies.</text>
        </g>

        {/* Strategic Goal 3 */}
        <g transform="translate(20, 380)">
          <rect x="0" y="-20" width="760" height="140" fill="#e0e0e0" stroke="#bbb" />
          <text className="strategy-goal">Build Capacity of Member Organizations</text>
          <text x="20" y="20">Objective: Strengthen operational and advocacy capabilities of member organizations.</text>
          <text x="20" y="40">Actions:</text>
          <text x="40" y="60">- Conduct needs assessments to identify gaps.</text>
          <text x="40" y="80">- Provide training on advocacy and human rights standards.</text>
          <text x="40" y="100">- Facilitate access to funding opportunities.</text>
        </g>

        {/* Strategic Goal 4 */}
        <g transform="translate(20, 520)">
          <rect x="0" y="-20" width="760" height="140" fill="#e0e0e0" stroke="#bbb" />
          <text className="strategy-goal">Raise Awareness and Mobilize Communities</text>
          <text x="20" y="20">Objective: Educate the public and mobilize support for minority rights.</text>
          <text x="20" y="40">Actions:</text>
          <text x="40" y="60">- Launch awareness campaigns utilizing social media and local media.</text>
          <text x="40" y="80">- Develop educational materials highlighting minority rights.</text>
          <text x="40" y="100">- Organize community forums to engage minority populations.</text>
        </g>

        {/* Strategic Goal 5 */}
        <g transform="translate(20, 660)">
          <rect x="0" y="-20" width="760" height="140" fill="pink" stroke="#bbb" />
          <text className="strategy-goal">Conduct Research and Monitor Policy Developments</text>
          <text x="20" y="20">Objective: Inform advocacy efforts with evidence-based research.</text>
          <text x="20" y="40">Actions:</text>
          <text x="40" y="60">- Undertake research focusing on socio-economic conditions of minority communities.</text>
          <text x="40" y="80">- Monitor and analyze policies impacting minority rights.</text>
          <text x="40" y="100">- Publish reports and policy briefs to disseminate findings.</text>
        </g>
      </svg>
       
        </div>
      </div>

      <Footer /> {/* Footer will now stick to the bottom */}
    </div>
  );
};

export default Strategy;
