export default function DashNav() {
  function onClick() {
    // ADD LOGOUT HERE
  }
  return (
    <>
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
            <a className="dropdown-item" href="/edituser">
              Edit User
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="/" onClick={onClick}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
