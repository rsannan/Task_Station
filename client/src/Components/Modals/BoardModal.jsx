import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function BoardModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <label htmlFor="sufname" className="form-label">
            <span className="fs-4">Board Name</span>
          </label>
          <input
            type="text"
            id="sufname"
            name="firstName"
            className="form-control form-control-lg"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
