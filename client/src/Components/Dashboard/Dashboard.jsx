import "./dashboard.css";
import logo from "../../assets/addtask1.png";
import { useNavigate } from "react-router-dom";
import CardModal from "../Modals/CardModal";
export default function Dashboard() {
  const navigate = useNavigate();
  function editTaskClick() {}
  function removeTaskClick() {}
  function addTaskClick() {
    navigate("/addtask");
  }
  return (
    <div className="dashcon">
      <div className="dashboard">
        <div>
          <div className="dashcard">
            <div className="dashtitle">
              <h5>Proposed</h5>
            </div>
            <CardModal />
          </div>
        </div>
        <div>
          <div className="dashcard">
            <div className="dashtitle">
              <h5>Approved</h5>
            </div>
            <CardModal />
          </div>
        </div>
        <div>
          <div className="dashcard">
            <div className="dashtitle">
              <h5>In Progress</h5>
            </div>
            <CardModal />
          </div>
        </div>
        <div>
          <div className="dashcard">
            <div className="dashtitle">
              <h5>Completed</h5>
            </div>
            <CardModal />
          </div>
        </div>
        <div>
          <div className="dashcard">
            <div className="dashtitle">
              <h5>Tested</h5>
            </div>
            <CardModal />
          </div>
        </div>
        <div>
          <div className="dashcard">
            <div className="dashtitle">
              <h5>Deployed</h5>
            </div>
            <CardModal />
          </div>
        </div>
      </div>
    </div>
  );
}
