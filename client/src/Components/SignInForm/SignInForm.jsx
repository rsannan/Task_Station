import { useReducer } from "react";
import logo from "../../assets/logo.png";
import siginimg from "../../assets/signin1.jpg";
import reducer from "../../Context/reducer";
import { LOGIN, ON_CHANGE } from "../../Context/actions";
import { useAuthDispatch } from "../../Context/context";

const defaultState = {
  user: { firstName: "", lastName: "", email: "", password: "" },
};
export default function SignInForm() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const appDispatch = useAuthDispatch();
  function onChange(e) {
    dispatch({ type: ON_CHANGE, payload: { e } });
  }

  function onSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const token = "123456";
    const data = { email, token };
    appDispatch({ type: LOGIN, payload: { data } });
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
                    src={siginimg}
                    alt="Login Img"
                    className="img-fluid"
                    id="siginimg"
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
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <label htmlFor="siemail" className="form-label">
                          <span className="fs-4">Email</span>
                        </label>
                        <input
                          type="email"
                          id="siemail"
                          value={state.user.email}
                          name="email"
                          className="form-control form-control-lg"
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label htmlFor="sipassword" className="form-label">
                          <span className="fs-4">Password</span>
                        </label>
                        <input
                          type="password"
                          id="sipassword"
                          value={state.user.password}
                          name="password"
                          className="form-control form-control-lg"
                          onChange={onChange}
                        />
                      </div>
                      <div className="pt-1 mb-4 d-grid gap-2">
                        <button
                          className="btn btn-dark btn-lg d-block"
                          id="signinbtn"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?
                        <a href="#" style={{ color: "#393f81" }}>
                          Register here
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
