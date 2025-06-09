import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <h2>Hello, It's Me</h2>
        <h1>H R Pratham</h1>
        <h3>And I'm a <span>Graphic Designer</span></h3>
        <p>My interests lie in developing efficient algorithms, building scalable web applications, and exploring the realms of artificial intelligence.
</p>
        <div className="social-icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
        </div>
        <button className="btn">Download CV</button>
      </div>
      <div className="home-right">
        <img src="/profile.jpeg" alt="profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Home;
