import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg">
        <div className="container-fluid fw-semibold">
          <a className="navbar-brand text-white " href="#">
            <img src={logo} alt="logo" className="w-25" />
            Task-Station
          </a>
          <ul className="navbar-nav">
            <li className="navbar-item">
              <a href="/addtask" className="nav-link active text-white">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
