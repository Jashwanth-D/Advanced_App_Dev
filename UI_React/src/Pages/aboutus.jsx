import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-section bg-gray-800 text-white p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold mb-4">About Our Boathouse Tourism Website</h1>
        <p className="text-lg">
          Welcome to our boathouse tourism website! We aim to provide a unique experience for travelers to explore the serene beauty of our waterways while enjoying the comfort of our luxurious boathouses.
        </p>
        <p className="text-lg mt-2">
          Our platform connects travelers with boathouse owners, offering a range of accommodations and experiences tailored to their preferences.
        </p>
      </section>

      <section className="features-section bg-gray-300 text-gray-800 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg">Unique Accommodations: Experience the charm of staying in a boathouse.</li>
          <li className="text-lg">Customized Packages: Tailor your boathouse experience to suit your needs.</li>
          <li className="text-lg">Scenic Routes: Explore picturesque waterways and breathtaking views.</li>
          <li className="text-lg">Personalized Services: Receive personalized services and assistance throughout your journey.</li>
          <li className="text-lg">Community Engagement: Connect with fellow travelers and share your experiences.</li>
        </ul>
      </section>

      <section className="mission-section bg-gray-800 text-white p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg">
          Our mission is to promote sustainable tourism and foster a deep appreciation for the natural beauty of our waterways. We are committed to providing memorable experiences while preserving the ecological balance of our surroundings.
        </p>
      </section>

      <section className="team-section bg-gray-300 text-gray-800 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p className="text-lg">
          Meet the passionate individuals behind our boathouse tourism website. Our team is dedicated to ensuring that every traveler has a memorable and enjoyable experience exploring the beauty of our waterways.
        </p>
      </section>

      <section className="technology-section bg-gray-800 text-white p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
        <p className="text-lg">
          Our website is built using state-of-the-art technologies to ensure seamless navigation and secure transactions. We leverage technologies such as React for the frontend, Node.js for the backend, and MongoDB for data storage.
        </p>
      </section>

      <section className="join-us-section bg-gray-300 text-gray-800 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Join Us</h2>
        <p className="text-lg">
          Are you passionate about promoting sustainable tourism and exploring new destinations? Join our team and be a part of our exciting journey! Visit our <a href="/careers" className="text-blue-500 hover:text-blue-700">careers</a> page for current job openings and opportunities.
        </p>
      </section>

      <section className="contact-section bg-gray-800 text-white p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg">
          Have questions or need assistance? We're here to help! Reach out to us at <a href="mailto:info@example.com" className="text-blue-500 hover:text-blue-700">info@boathousetours.com</a>.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;