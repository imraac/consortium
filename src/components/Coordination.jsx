

import React from 'react';
import './Coordination.css'; // Import a CSS file for styling if needed
import Footer from './Footer';

const Coordination = () => {
  return (
    <div>
      {/* Hero Section */}
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

      {/* Coordination Section */}
      <div className="coordination-wrapper">
        <div className="text-container">
          <h2>Coordination</h2>
          <div className="coordination-activities">
            <p>Coordination activities include:</p>
            <ol className="coordination-list">
              <li>Collaborative Projects: Organizing joint initiatives and programs that leverage the strengths of multiple minority-led organizations.</li>
              <li>Resource Sharing: Facilitating access to tools, knowledge, and best practices among consortium members.</li>
              <li>Event Management: Coordinating events such as conferences, workshops, and forums to foster dialogue and collaboration.</li>
            </ol>
          </div>

          <div className="representation-section">
            <h3>Representation</h3>
            <p>We represent minority communities in the following areas:</p>
            <ol className="representation-list">
              <li>
                <strong>Humanitarian Working Groups:</strong>
                Actively participating in cluster and sector-specific working groups to ensure that minority communities are considered and prioritized in humanitarian planning and response efforts. This involvement helps shape policies that directly impact these communities during crises.
              </li>
              <li>
                <strong>National Forums:</strong>
                Engaging with Somali governmental bodies and national institutions to advocate for the rights, protection, and inclusion of minority communities in policy-making and national initiatives. This engagement allows us to influence legislation and promote the needs of these communities.
              </li>
              <li>
                <strong>International Platforms:</strong>
                Taking part in global discussions, forums, and conferences to raise awareness and bring attention to the challenges and rights of minority groups in Somalia, ensuring they are visible on the international stage. Our participation helps garner support and resources for advocacy efforts.
              </li>
              <li>
                <strong>Public Advocacy:</strong>
                Leveraging media platforms and public speaking opportunities to advocate for the rights and needs of minority communities, aiming to influence public opinion and promote social justice. This approach mobilizes community support and fosters understanding of minority issues.
              </li>
            </ol>
            <div>
              <h3>Real-life Impact</h3>
              <p>
                Our initiatives have led to successful advocacy campaigns that resulted in policy changes benefiting minority communities. By sharing success stories and real-life examples, we demonstrate the positive impact of our work on the lives of individuals and communities.
              </p>
            </div>
            <div>
              <h3>Get Involved</h3>
              <p>
                Join us in advocating for minority rights. Stay informed, support our initiatives, or participate in our events to help amplify the voices of minority communities.
              </p>
            </div>
          </div>

          {/* Information Sharing Section */}
          <div>
            <h3>Information Sharing</h3>
            <p>We ensure that valuable information is shared through:</p>
            <ol className="information-sharing-list">
              <li>Newsletters: Providing regular updates on consortium activities, advocacy efforts, and relevant issues.</li>
              <li>Reports and Publications: Sharing research findings, impact reports, and policy papers.</li>
              <li>Online Resources: Maintaining a digital platform with access to essential documents and information.</li>
            </ol>
          </div>
        </div>
      
      </div>
      <Footer />
    </div>
  );
};

export default Coordination;
