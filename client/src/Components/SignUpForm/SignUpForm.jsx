import { useReducer } from "react";
import logo from "../../assets/logo.png";
import reducer from "../../Context/reducer";
import { ON_CHANGE, SIGN_UP } from "../../Context/actions";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";

const defaultState = {
  user: { firstName: "", lastName: "", email: "", password: "" },
};

export default function SignUpForm() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const navigate = useNavigate();
  async function postData(url, data) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(url, data, { headers });
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  function onChange(e) {
    dispatch({ type: ON_CHANGE, payload: { e } });
  }
  async function onSubmit(e) {
    const event = e;
    event.preventDefault();
    const data = {
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      username: event.target[2].value,
      password: event.target[3].value,
      confirmPassword: event.target[3].value,
    };
    postData("http://127.0.0.1:8000/api/users/register", data);
  }
  return (
    <section className="vh-100 signupimg">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-7">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="d-flex align-items-center">
                  <div
                    className="card-body p-4 p-lg-5 text-black"
                    style={{ backgroundColor: "#DDFFBB" }}
                  >
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
                      <div className="form-outline mb-4 col-8">
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
                      <div className="form-outline mb-4 col-8">
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
                      <div className="form-outline mb-4 ">
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
                        <a href="/login" style={{ color: "#393f81" }}>
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
