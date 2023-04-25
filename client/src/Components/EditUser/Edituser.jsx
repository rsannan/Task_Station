import { useEffect, useReducer, useState } from "react";
import reducer from "../../Context/reducer";
import axios from "axios";
import { ON_CHANGE, EDIT_USER } from "../../Context/actions";
import { useAuthState } from "../../Context/context";
import { useNavigate } from "react-router-dom";
export default function EditUser() {
  const [user, setUser] = useState({});
  const appState = useAuthState();
  const navigate = useNavigate();
  const token = appState.token;
  useEffect(() => {
    async function getUser() {
      try {
        const url = "http://127.0.0.1:8000/api/users/me";
        const config = {
          headers: { "x-auth-token": token },
        };
        const response = await axios.get(url, config);
        const data = await response.data;
        setUser(data.user);
      } catch (error) {}
    }
    getUser();
  }, []);
  function onSubmit(e) {
    e.preventDefault();
    const url = "http://127.0.0.1:8000/api/users/update";
    const data = {
      firstname: e.target.firstName.value,
      lastname: e.target.lastName.value,
    };
    if (data.firstname === "") {
      alert("firstname cannot be empty");
      return;
    }
    if (data.lastname === "") {
      alert("lastname cannot be empty");
      return;
    }
    const config = {
      headers: { "x-auth-token": token, "Content-Type": "application/json" },
    };
    const req = async () => {
      await axios.patch(url, data, config);
    };
    try {
      req();
      // navigate("/dahboard");
    } catch (error) {
      alert(error.data);
    }
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
              {user.firstname} {user.lastname}
            </span>
            <span className="text-black-50">{user.username}</span>
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
                    placeholder={user.firstname}
                    id="edfname"
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
                    placeholder={user.lastname}
                    id="edfname"
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
