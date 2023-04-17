import "./footer.css";
import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>
                  <img src={logo} alt="logo" className="w-10" />
                  Task-Station
                </h3>
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="https://www.alxafrica.com/software-engineering-2022/?utm_source=Google&utm_medium=cpc&utm_campaign=gt-ke-search-lead-gen-se&gclid=CjwKCAiAh9qdBhAOEiwAvxIokzrcGvELUDpF0aGG7zyyY-Bc77I7HeHJzHHHXrluQwpdfr8NN3h-FBoCvcsQAvD_BwE">
                      Alx Africa
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-legal text-center">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Task-Station</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed with <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
