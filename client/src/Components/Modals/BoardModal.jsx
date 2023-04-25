import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useAuthDispatch, useAuthState } from "../../Context/context";
import axios from "axios";
import { DONE } from "../../Context/actions";
export default function BoardModal() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [boards, setBoards] = useState([]);
  const [boardId, setBoardId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const appState = useAuthState();
  const appDispatch = useAuthDispatch();

  const token = appState.token;
  useEffect(() => {
    async function getBoards() {
      try {
        const url = "http://127.0.0.1:8000/api/boards";
        const response = await axios.get(url);
        const data = await response.data;
        setBoards(data);
      } catch (error) {}
    }
    getBoards();
  }, []);
  useEffect(() => {
    async function getUser() {
      try {
        const url = "http://127.0.0.1:8000/api/users/me";
        const config = {
          headers: { "x-auth-token": token },
        };
        const response = await axios.get(url, config);
        const data = await response.data;
        setUser(data.user);
      } catch (error) {}
    }
    getUser();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (e) => {
    e.preventDefault();

    const url = "http://127.0.0.1:8000/api/boards";
    const data = {
      userId: user._id,
      name,
      description,
    };
    const req = async () => {
      await axios.post(url, data);
    };
    req();
    appDispatch({ type: DONE });
    setShow(false);
  };
  const handleOnchange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <>
      <Button className="btn" onClick={handleShow}>
        <i className="fa-solid fa-plus me-3"></i>
        Add Board
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Work Board</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="name" className="form-label">
            <span className="fs-4">Board Name</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleOnchange}
            className="form-control form-control-lg"
          />
          <label htmlFor="name" className="form-label">
            <span className="fs-4">Description</span>
          </label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleDescriptionChange}
            className="form-control form-control-lg"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
