import "./sidenav.css";
import BoardModal from "../Modals/BoardModal";

export default function SideNav() {
  function boardOnClick() {
    return;
  }
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
              href="#workBoards"
              role="button"
              aria-expanded="false"
              aria-controls="workBoards"
            >
              Work Boards
            </a>
          </a>
          <ul class="collapse multi-collapse" id="workBoards">
            <li className="my-3">
              <BoardModal />
            </li>
            <li>test 1</li>
            <li>test 1</li>
            <li>test 1</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
