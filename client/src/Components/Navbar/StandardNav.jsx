export default function StandardNav() {
  return (
    <>
      <ul className="navbar-nav">
        <li className="navbar-item ms-4">
          <a href="/" className="nav-link active text-white">
            Home
          </a>
        </li>
        <li className="navbar-item ms-4">
          <a href="/login" className="nav-link active text-white">
            Sign-In
          </a>
        </li>
      </ul>
    </>
  );
}
