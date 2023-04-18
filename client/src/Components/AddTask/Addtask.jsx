import { useReducer } from "react";
import logo from "../../assets/logo.png";
import "./Addtask.css";
import reducer from "../../Pages/reducer";
import { ON_CHANGE } from "../../Pages/actions";
const defaultState = {
  user: { firstName: "", lastName: "", email: "", password: "" },
  task: { title: "", description: "", date: "", time: "", urgency: "" },
};
export default function AddTask() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  function onChange(e) {
    dispatch({ type: ON_CHANGE, payload: { e } });
  }
  return (
    <div
      className="container rounded mt-5 mb-5"
      style={{ backgroundColor: "#97dece" }}
    >
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">
              {state.user.firstName} {state.user.lastName}
            </span>
            <span className="text-black-50">{state.user.email}</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Add Task</h4>
            </div>
            <form>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={state.task.title}
                    id="attitle"
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={state.task.description}
                    id="atdescription"
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Date due</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={onChange}
                    value={state.task.value}
                    name="date"
                    id="atdate"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Time due</label>
                  <input
                    type="time"
                    className="form-control"
                    name="time"
                    value={state.task.time}
                    id="attime"
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Urgency</label>
                  <select
                    className="form-control"
                    id="urgencysel"
                    defaultValue={0}
                    name="urgency"
                    onChange={onChange}
                  >
                    <option value="0" disabled hidden>
                      Choose a Level
                    </option>
                    <option value="Low Priority">Low Priority</option>
                    <option value="Mid-level Priority">
                      Mid-level Priority
                    </option>
                    <option value="High Priority">High Priority</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 text-center">
                <button
                  className="btn btn-outline-primary profile-button"
                  type="submit"
                  id="acbtn"
                >
                  <i className="fa-solid fa-floppy-disk"></i> Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
