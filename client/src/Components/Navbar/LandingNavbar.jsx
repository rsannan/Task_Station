import logo from "../../assets/logo.png";
export default function LandingNavbar() {
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg">
        <div className="container-fluid fw-semibold">
          <a className="navbar-brand text-white " href="#">
            <img src={logo} alt="logo" className="w-25" />
            Task-Station
          </a>
          <ul className="navbar-nav ms-auto">
            <li className="navbar-item ms-4">
              <a href="/" className="nav-link active text-white">
                Home
              </a>
            </li>
            <li className="navbar-item ms-4">
              <a href="#about" className="nav-link  text-white">
                About
              </a>
            </li>
            <li className="navbar-item ms-4">
              <a href="#features" className="nav-link  text-white">
                Features
              </a>
            </li>
            <li className="navbar-item ms-4">
              <a href="/login" className="nav-link  text-white">
                Sign-In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
