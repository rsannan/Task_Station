import { useReducer } from "react";
import logo from "../../assets/logo.png";
import img from "../../assets/signup.jpg";
import reducer from "../../Context/reducer";
import { ON_CHANGE, SIGN_UP } from "../../Context/actions";
import { useNavigate } from "react-router-dom";

const defaultState = {
  user: { firstName: "", lastName: "", email: "", password: "" },
};

export default function SignUpForm() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const navigate = useNavigate;

  function onChange(e) {
    dispatch({ type: ON_CHANGE, payload: { e } });
  }
  async function onSubmit(e) {
    await dispatch({ type: SIGN_UP, payload: { e } }).then(() => {
      navigate("/login");
    });
  }
  return (
    <section className="vh-100" style={{ backgroundColor: "#fff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={img}
                    alt="Sign Up Img"
                    className="img-fluid"
                    id="signupimg"
                    style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-7 d-flex align-items-center"
                  style={{ backgroundColor: "#9A616D" }}
                >
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={onSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img src={logo} />
                        <span className="h1 fw-bold mb-0">Task-Station</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign Up For an Account
                      </h5>
                      <div className="form-outline mb-4">
                        <label htmlFor="sufname" className="form-label">
                          <span className="fs-4">First Name</span>
                        </label>
                        <input
                          type="text"
                          id="sufname"
                          value={state.user.firstName}
                          name="firstName"
                          className="form-control form-control-lg"
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label htmlFor="sulname" className="form-label">
                          <span className="fs-4">Last Name</span>
                        </label>
                        <input
                          type="text"
                          id="sulname"
                          value={state.user.lastName}
                          name="lastName"
                          className="form-control form-control-lg"
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label htmlFor="suemail" className="form-label">
                          <span className="fs-4">Email</span>
                        </label>
                        <input
                          type="email"
                          id="suemail"
                          value={state.user.email}
                          name="email"
                          className="form-control form-control-lg"
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label htmlFor="supassword" className="form-label">
                          <span className="fs-4">Password</span>
                        </label>
                        <input
                          type="password"
                          id="supassword"
                          value={state.user.password}
                          name="password"
                          className="form-control form-control-lg"
                          onChange={onChange}
                        />
                      </div>
                      <div className="pt-1 mb-4 d-grid gap-2">
                        <button
                          className="btn btn-dark btn-lg d-block"
                          id="signupbtn"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Already have an account?
                        <a href="#" style={{ color: "#393f81" }}>
                          Sign In here
                        </a>
                      </p>
                    </form>
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
