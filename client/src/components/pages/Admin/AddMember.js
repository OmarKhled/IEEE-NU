import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Alert } from "reactstrap";
import LoadingComponent from "../../Loading";

import {
  addMembers,
  setAlerts,
} from "../../../redux/members/singleMembersActions";

const AddMembers = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, alerts } = useSelector((state) => state.singleMember);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [faculty, setFaculty] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");

  const changeFile = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    } else {
      setFile("");
      setFilename("");
    }
  };

  const add = () => {
    // console.log(!title || !date || !place || !file || !filename);
    if (!name || !role || !faculty || !facebook || !linkedin || !position || !description || !file || !filename) {
      dispatch(setAlerts("Please Fill all the fields"));
    } else {
      dispatch(
        addMembers({
          name,
          role,
          faculty,
          facebook,
          linkedin,
          position,
          description,
          img: filename !== "" ? `/images/${filename}` : null,
          file: file !== "" ? file : null,
        })
      );
      setTimeout(() => {
        history.push("/admin/dashboard");
      }, 300);
    }
  };

  return (
    <div
      className="px-5"
      style={{ minHeight: "70vh", maxWidth: "65.125rem", margin: "auto" }}
    >
      <h1>Add Member</h1>

      {alerts.length > 0 &&
        alerts.map((alert) => <Alert color="danger">{alert}</Alert>)}

      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="mt-3 space-even">
          <Input
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            value={role}
            placeholder="Role"
            onChange={(e) => setRole(e.target.value)}
          />
          <Input
            value={position}
            placeholder="Position"
            onChange={(e) => setRole(e.target.value)}
          />
          <Input
            value={description}
            placeholder="Description"
            onChange={(e) => setRole(e.target.value)}
          />
          <Input
            value={faculty}
            placeholder="Faculty"
            onChange={(e) => setFaculty(e.target.value)}
          />
          <Input
            value={facebook}
            placeholder="Facebook"
            onChange={(e) => setFacebook(e.target.value)}
          />
          <Input
            value={linkedin}
            placeholder="Linkedin"
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <Input type="file" onChange={changeFile} />
          <Button color="primary" onClick={add}>
            Add
          </Button>
        </div>
      )}
    </div>
  );
};

export default withRouter(AddMembers);
