import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-clock"></i>
          <h3>opening hours</h3>
          <p>07:00am to 10:00pm</p>
        </div>

        <div className="icons">
          <i className="fas fa-phone"></i>
          <h3>phone</h3>
          <p>+34 632 99 52 88</p>
          <p>+34 632 88 77 08</p>
        </div>

        <div className="icons">
          <i className="fas fa-envelope"></i>
          <h3>email</h3>
          <p>admin@sulemanraza.com</p>
          <p>contact@sulemanraza.com</p>
        </div>

        <div className="icons">
          <i className="fas fa-map"></i>
          <h3>address</h3>
          <p>08923 Santa Coloma de Gramenet Spain</p>
        </div>
      </div>

      <div className="share">
        <a href="https://www.facebook.com/SulemanRaza.co" target="_blank"  rel="noreferrer" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
      </div>

      <div className="credit">
        created by <a href="https://sulemanraza.com/"  rel="noreferrer" target="_blank" ><span>mr. web designer</span></a> | all rights reserved!
      </div>
    </section>
  );
};

export default Footer;
