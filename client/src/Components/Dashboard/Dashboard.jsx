import "./dashboard.css";
import logo from "../../assets/addtask1.png";
export default function Dashboard() {
  return (
    <div className="dashcon">
      <div className="dashboard">
        <div className="dashcard">
          <div className="d-inline-block col-6 mx-auto h-100 w-100 addtask">
            <a
              className="btn btn-outline-info h-100 w-100"
              role="button"
              href="/addtask"
            >
              <img
                src={logo}
                width="50%"
                alt="Add task img"
                style={{ marginTop: "102px" }}
              />
              <h3>Add Task</h3>
            </a>
          </div>
        </div>
        <div className="dashcard">
          <div className="d-flex flex-row-reverse">
            <button
              className="btn btn-danger btn-sm rounded-0 p-2"
              type="button"
              data-toggle="tooltip"
              title="Delete"
            >
              <i className="fa fa-trash"></i>
            </button>
            <button
              className="btn btn-success btn-sm rounded-0 p-2"
              type="button"
              data-toggle="tooltip"
              title="Edit"
            >
              <i className="fa fa-edit"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
