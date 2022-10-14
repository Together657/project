import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import {
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Table,
  Grid,
  TextField,
  List,
} from "@material-ui/core";
import UserModal from "../crud/UserModal";

function Home() {
  const [savedUsers, setSavedUsers] = useState([]);
  const [showEditInputField, setShowEditInputField] = useState(false);
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editKey, setEditKey] = useState("");
  const [show, setShow] = useState(false);

  const handleDelete = (key) => {
    let tempDataArray = savedUsers;
    let a = tempDataArray?.slice(0, key);
    let b = tempDataArray?.slice(key + 1);
    setSavedUsers([...a, ...b]);
  };
  const handleSave = (key) => {
    if (editFirstName !== "" && editLastName !== "" && editEmail !== "") {
      let a = {
        first_name: editFirstName,
        last_name: editLastName,
        email: editEmail,
      };
      let b = savedUsers;
      b[key] = a;
      setSavedUsers(b);
      setShowEditInputField(false);
    }
  };
  const handleEdit = (key) => {
    setEditKey(key);
    setShowEditInputField(true);
  };

  return (
    <div className="form-wrapper">
      {/* <div>
        <div className="d-flex align-item-center justify-content-evenly m-5">
          <div>
            <label>First Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div>
            <label>E-Mail</label>
            <input type="text" />
          </div>
        </div>
      </div> */}
      <button onClick={() => setShow(true)}>Create new user</button>
      <UserModal
        show={show}
        setShow={setShow}
        savedUser={savedUsers}
        setSavedUsers={setSavedUsers}
      />
      <Table>
        <TableHead>
          <TableCell>FirstName</TableCell>
          <TableCell>LastName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          {/* <TableCell>
            Action
          </TableCell> */}
        </TableHead>
        {savedUsers.map((user, key) => {
          return (
            <TableRow key={key}>
              <TableCell>
                {showEditInputField && editKey === key ? (
                  <input onChange={(e) => setEditFirstName(e.target.value)} />
                ) : (
                  user.first_name
                )}
              </TableCell>
              <TableCell>
                {showEditInputField && editKey === key ? (
                  <input onChange={(e) => setEditLastName(e.target.value)} />
                ) : (
                  user.last_name
                )}
              </TableCell>

              <TableCell>
                {showEditInputField && editKey === key ? (
                  <input onChange={(e) => setEditEmail(e.target.value)} />
                ) : (
                  user.email
                )}
              </TableCell>
              <TableCell>
                {showEditInputField && key === editKey ? (
                  <button
                    onClick={() => handleSave(key)}
                    disabled={
                      editFirstName === "" ||
                      editLastName === "" ||
                      editEmail === ""
                    }
                  >
                    Save
                  </button>
                ) : (
                  <button onClick={(e) => handleEdit(key)}>Edit</button>
                )}
              </TableCell>
              <TableCell>
                {showEditInputField && key === editKey ? (
                  <button onClick={() => setShowEditInputField(false)}>
                    Cancel
                  </button>
                ) : (
                  <button onClick={() => handleDelete(key)}>Delete</button>
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
}

export default Home;
