import { useAuthState } from "../../Context/context";
import logo from "../../assets/logo.png";
import DashNav from "./DashNav";
import StandardNav from "./StandardNav";

// const state = useAuthState();
export default function Navbar() {
  // const { token } = state;
  const token = "";
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg">
        <div className="container-fluid fw-semibold">
          <a className="navbar-brand text-white " href="#">
            <img src={logo} alt="logo" className="w-25" />
            Task-Station
          </a>
          {token ? <DashNav /> : <StandardNav />}
        </div>
      </nav>
    </>
  );
}
