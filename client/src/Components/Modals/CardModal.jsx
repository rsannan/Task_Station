import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./cardmodal.css";
import axios from "axios";
import { useAuthState, useAuthDispatch } from "../../Context/context";
import { DONE } from "../../Context/actions";

export default function CardModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { listId, position } = props;
  const appState = useAuthState();
  const appDispatch = useAuthDispatch();
  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "http://127.0.0.1:8000/api/cards";
    const name = e.target.title.value;
    const description = e.target.description.value;
    const dueDate = e.target.date.value + "T" + e.target.time.value;
    const config = {
      headers: {
        "x-auth-token": appState.token,
      },
    };
    const data = {
      name,
      description,
      position,
      listId,
      dueDate,
    };
    const req = async () => {
      await axios.post(url, data, config);
    };
    req();
    setShow(false);
    appDispatch({ type: DONE });
  }
  return (
    <>
      <div className="modaldiv">
        <a className="cardlink" role="button" onClick={handleShow}>
          <i className="fa-solid fa-plus me-3"></i>
          Add Card
        </a>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleOnSubmit}>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    id="attitle"
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
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Date due</label>
                  <input
                    className="form-control"
                    type="date"
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
                    id="attime"
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
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
