import "./title.css";
import img1 from "../../assets/signin1.jpg";
export default function Title() {
  return (
    <div
      className="vw-100"
      style={{ background: "linear-gradient(#0B2447, #DDFFBB)" }}
    >
      <div className="container row ms-auto me-auto">
        <div className="col-md-6">
          <h1 className="title">
            Task-Station brings all your organizational needs to your doorstep
          </h1>
          <p className="fs-4 fw-medium">
            Keep Track of all your tasks. Never forget the little things
            anymore.
          </p>
          <a
            data-aos="fade-up"
            data-aos-delay="200"
            href="#"
            className="btn-get-started"
          >
            Get Started
          </a>
        </div>
        <div className="col-md-6">
          <img src={img1} alt="title image" className="w-75 h-75 titleimg" />
        </div>
      </div>
    </div>
  );
}
