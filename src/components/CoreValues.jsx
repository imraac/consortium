

import React, { useEffect } from 'react';
import Footer from './Footer'; 
import './CoreValues.css'; 

const CoreValues = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <div className="m-0 p-0 w-full">
  <div className="m-0 p-0 w-full">
    <main className="hero-gradient animate-bg relative w-full m-0 p-0">
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
        src="/readinguncle.jpg"
        alt="Minority Rights Organizations"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: 0 }}
      />
    </main>
  </div>
</div>



      <div className="core-values-wrapper">
        <h2>Our Core Values</h2>
        <p>
          At the Minority Rights Organizations (MRO) Consortium, which is exclusively owned and managed by minority groups in Somalia, we are committed to:
        </p>
        <ul className="core-values-list">
          <li>
            <strong>Inclusivity:</strong> 
            <p>
              Embracing the diversity of minority communities and ensuring all voices are represented. We believe that every individual, regardless of their background, should have the opportunity to contribute to societal discussions and decision-making processes. Inclusivity fosters a sense of belonging and strengthens community ties.
            </p>
          </li>
          <li>
            <strong>Empowerment:</strong> 
            <p>
              Supporting minority groups in asserting their rights and identities. We aim to provide resources, education, and advocacy to empower individuals and communities to recognize and claim their rights. By facilitating skill development and access to opportunities, we enable marginalized voices to be heard and valued.
            </p>
          </li>
          <li>
            <strong>Integrity:</strong> 
            <p>
              Upholding transparency, accountability, and ethical practices in all Consortium activities. We are committed to conducting our operations with honesty and openness, ensuring that stakeholders can trust our intentions and actions. Integrity builds credibility and fosters strong relationships with communities and partners.
            </p>
          </li>
          <li>
            <strong>Solidarity:</strong> 
            <p>
              Promoting unity among organizations and communities in the pursuit of justice and equality. We recognize that our strength lies in collaboration and mutual support. By standing together, we amplify our efforts and create a collective impact that advances the rights and welfare of minority groups.
            </p>
          </li>
        </ul>
                <Footer />
      </div>
    </div>
  );
};

export default CoreValues;
