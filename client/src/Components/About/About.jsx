import "./about.css";

export default function About() {
  return (
    <section id="about" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About</h2>
          <p>
            We as Proud African citizens, never really had the opportuinity to
            be exposed to technology growing up. Due to our strong passion and
            grit and good fortune we found like minded individuals and decided
            to try and test ourselves. We are using this project not only to
            help others but ourselves as well, to prove that we have made it
            this far. A special Thank you to Alx Africa for giving us the
            opportuinity to nature our talent and thirst for technological
            break-through.
          </p>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="fa-solid fa-network-wired about-icon"></i>
              </div>
              <h3>Reginald Shawn Annan</h3>
              <p></p>
              <a href="https://twitter.com/Rs_annan" className="readmore">
                Twitter
              </a>
              <a
                href="https://github.com/rsannan?tab=repositories"
                className="readmore"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/reginald-shawn-annan-50700b1b7"
                className="readmore"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="fa-solid fa-network-wired about-icon"></i>
              </div>
              <h3>Isaac Takiyara Kanyiti</h3>
              <p></p>
              <a href="#" className="readmore">
                Twitter
              </a>
              <a href="https://github.com/Isaac-web" className="readmore">
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/isaac-takiyara-kanyiti-b38086193"
                className="readmore"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="fa-solid fa-network-wired about-icon"></i>
              </div>
              <h3>Find Our Project</h3>
              <p>
                Learn more about our project using the link below to get to our
                Github repository.
              </p>
              <a
                href="https://github.com/rsannan/Task_Station"
                className="readmore"
              >
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
