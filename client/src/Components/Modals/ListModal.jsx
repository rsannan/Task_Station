import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState, useAuthDispatch } from "../../Context/context";
import axios from "axios";
import { DONE } from "../../Context/actions";
export default function ListModal() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [lists, setLists] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const state = useAuthState();
  const appDispatch = useAuthDispatch();
  useEffect(() => {
    async function getLists() {
      try {
        const url = "http://127.0.0.1:8000/api/lists";
        const config = {
          data: { boardId: state.boardId },
        };
        const response = await axios.get(url, config);
        const data = await response.data;
        const list = data.list.filter((obj) => obj.boardId === state.boardId);
        setLists(list);
      } catch (error) {}
    }
    getLists();
  }, []);
  function onSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const url = "http://127.0.0.1:8000/api/lists";
    const position = lists?.slice(-1)[0]?.position + 1 || 0;
    const data = {
      name,
      boardId: state.boardId,
      position,
    };
    const req = async () => {
      await axios.post(url, data);
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
          Add List
        </a>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={onSubmit}>
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

              <div className="mt-5 text-center">
                <button
                  className="btn btn-outline-primary profile-button"
                  type="submit"
                  id="acbtn"
                >
                  <i className="fa-solid fa-floppy-disk"></i> Save List
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
