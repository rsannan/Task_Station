import { useReducer } from "react";
import reducer from "../../Context/reducer";
import { ON_CHANGE, EDIT_USER } from "../../Context/actions";

const defaultState = {
  user: { firstName: "", lastName: "", email: "", password: "" },
};
export default function EditUser() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  function onChange(e) {
    dispatch({ type: ON_CHANGE, payload: { e } });
  }

  function onSubmit(e) {
    dispatch({ type: EDIT_USER, payload: { e } });
  }
  return (
    <div
      className="container rounded mt-5 mb-5"
      style={{ backgroundColor: "#579BB1" }}
    >
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">
              {state.user.firstName} {state.user.lastName}
            </span>
            <span className="text-black-50">{state.user.email}</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Edit User</h4>
            </div>
            <form onSubmit={onSubmit}>
              <div className="row mt-2">
                <div className="col-md-10">
                  <label className="labels">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={state.user.firstName}
                    id="edfname"
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-10">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={state.user.lastName}
                    id="edfname"
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-10">
                  <label className="labels">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={state.user.email}
                    id="edemail"
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="submit"
                  id="acbtn"
                >
                  <i className="fa-solid fa-floppy-disk"></i> Edit User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
