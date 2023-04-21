import "./sidenav.css";

export default function SideNav() {
  return (
    <nav
      id="sidebarMenu"
      class="collapse d-lg-block sidebar collapse bg-white vh-100"
    >
      <div class="position-static">
        <div class="list-group list-group-flush mx-3 mt-4">
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>Work Boards</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
          >
            <i class="fa-solid fa-plus me-3"></i>
            <span>Add Board</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
          >
            <i class="fas fa-money-bill fa-fw me-3"></i>
            <span>Sales</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
