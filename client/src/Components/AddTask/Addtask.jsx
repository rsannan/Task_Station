import logo from "../../assets/logo.png";
import "./Addtask.css";
export default function AddTask() {
  return (
    <div
      className="container rounded mt-5 mb-5"
      style={{ backgroundColor: "#97dece" }}
    >
      <div className="row">
        <div className="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span class="font-weight-bold" id="acname">
              Name Place holder
            </span>
            <span class="text-black-50" id="acemail">
              email Placeholder
            </span>
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
                  <label class="labels">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Title"
                    id="actitle"
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-12">
                  <label class="labels">Description</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Title"
                    id="actitle"
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6">
                  <label class="labels">Date due</label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Title"
                    id="actitle"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label class="labels">Time due</label>
                  <input
                    type="time"
                    class="form-control"
                    placeholder="Title"
                    id="actitle"
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Urgency</label>
                  <select class="form-control methoddp" id="methodsel">
                    <option value="0" disabled selected hidden>
                      Choose a Level
                    </option>
                    <option value="1">Low Priority</option>
                    <option value="2">Mid-level Priority</option>
                    <option value="3">High Priority</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 text-center">
                <button
                  className="btn btn-outline-primary profile-button"
                  type="submit"
                  id="acbtn"
                >
                  <i class="fa-solid fa-floppy-disk"></i> Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
