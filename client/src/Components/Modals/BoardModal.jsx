import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useAuthState } from "../../Context/context";
import axios from "axios";
export default function BoardModal() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [boards, setBoards] = useState([]);
  const [boardId, setBoardId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const appState = useAuthState();
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
  async function getBoardId(name) {
    for (let board of boards) {
      console.log(board);
      if (board.name === name) {
        console.log(board._id);
        setBoardId(board._id);
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const createLists = (boardId) => {
    const lists = [
      "Proposed",
      "Approved",
      "In Progress",
      "Completed",
      "Tested",
      "Deployed",
    ];
    let position = 0;
    for (let list of lists) {
      const url = "http://127.0.0.1:8000/api/lists";
      const data = {
        name: list,
        boardId,
        position,
      };
      const req = async () => {
        await axios.post(url, data);
      };
      req();
      position += 1;
    }
  };
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

    getBoardId(name);
    console.log(boardId);
    createLists(boardId);
    // setShow(false);
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
