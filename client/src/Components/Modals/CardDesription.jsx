import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
export default function CardDescription(props) {
  const { name, dueDate, description } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="modaldiv">
        <a className="cardlink" role="button" onClick={handleShow}>
          {name}
        </a>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">
                    <h4>Title</h4>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={name}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">
                    <h4>Description</h4>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={description}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">
                    <h4>Due Date</h4>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={dueDate}
                  />
                </div>
              </div>
              <div className="mt-5 text-center"></div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
