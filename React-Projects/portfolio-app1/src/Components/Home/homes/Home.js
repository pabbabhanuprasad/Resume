import React from "react";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img
                src="https://www.bing.com/images/search?q=wallpaper%20for%20laptop&FORM=IQFRBA&id=7DD9F94A6D59EE59B0F686AB03DC92DE4CA7B2A9"
                alt=""
              />
            </div>
          </div>
          <div className="right topMargin">
            <h1>I AM A FULL STACK DEVELOPER</h1>
          </div>
          <div className="socialIcon">
            <i className="fab fa-facebook-f facebook"></i>
            <i className="fab fa-instagram instagram"></i>
            <i className="fab fa-twitter twitter"></i>
            <i className="fab fa-youtube youtube"></i>
            <i className="fab fa-pinterest pinterest"></i>
            <i className="fab fa-dribbble dribbble"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <button className="primary-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
