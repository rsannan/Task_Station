import "./features.css";

export default function Features() {
  return (
    <section id="features" className="constructions">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Features</h2>
          <p>Made by us For You</p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg features1"></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Project Management</h4>
                    <p>
                      Have all your tasks in one place. No need for 1000 apps
                      have it all in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg features2"></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Personalized Profiles</h4>
                    <p>
                      Personalized profiles for each individual through sign up,
                      meaning you would always have your tasks available to you
                      once you return at anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg features3"></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Stay Notified</h4>
                    <p>
                      Making sure no matter where you are or what you are doing
                      you would be alerted of any tasks you have with upcoming
                      deadlines that may have slipped your mind
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg features4"></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Never Forget a Task</h4>
                    <p>
                      Task-Station makes sure you remember everything including
                      those small pesky tasks that you have to do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
