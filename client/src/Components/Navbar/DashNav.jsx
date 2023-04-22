import { useAuthDispatch, useAuthState } from "../../Context/context";
import { LOGOUT } from "../../Context/actions";
import { useNavigate } from "react-router-dom";
export default function DashNav() {
  const dispatch = useAuthDispatch();
  const state = useAuthState();
  const navigate = useNavigate();
  console.log(state);
  function editClick() {
    navigate("/edituser");
  }
  function dashClick() {
    navigate("/dashboard");
  }
  function logoutClick() {
    dispatch({ type: LOGOUT });
  }
  return (
    <>
      <ul className="navbar-nav">
        <a className="btn text-white me-2" onClick={dashClick}>
          Dashboard
        </a>
        <div className="dropdown-center">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Account Details
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" onClick={editClick}>
                Edit User
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" onClick={logoutClick} href="/">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </>
  );
}
