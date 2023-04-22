import "./sidenav.css";

export default function SideNav() {
  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white vh-100"
    >
      <div className="position-static">
        <div className="list-group list-group-flush mx-3 mt-4">
          <a
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>Work Boards</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fa-solid fa-plus me-3"></i>
            <span>Add Board</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-money-bill fa-fw me-3"></i>
            <span>Sales</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
