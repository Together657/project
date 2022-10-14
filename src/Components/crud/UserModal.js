import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./UserModal.css";

export default function UserModal({ show, setShow, savedUser, setSavedUsers }) {
  const handleClose = () => {
    setShow(false);
    setFirstName("");
    setLastName("");
    setEmail("");
  };
  const handleShow = () => setShow(true);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = () => {
    let a = {
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    if (firstName !== "" || lastName !== "" || email !== "") {
      setSavedUsers([...savedUser, a]);
      handleClose();
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new user</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex flex-column">
            <input
              type="text"
              placeholder="First Name"
              className="mt-2 input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Last Name"
              className="mt-2 input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              className="mt-2 input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
