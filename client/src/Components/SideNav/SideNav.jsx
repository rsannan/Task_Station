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
            <a
              class="btn btn-outline-secondary"
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              Work Boards
            </a>
          </a>
          <ul class="collapse multi-collapse" id="multiCollapseExample1">
            <li>Add board</li>
            <li>test 1</li>
            <li>test 1</li>
            <li>test 1</li>
          </ul>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fa-solid fa-plus me-3"></i>
            <span>Lists</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
