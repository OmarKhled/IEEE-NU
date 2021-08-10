import { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Alert } from "reactstrap";
import LoadingComponent from "../../Loading";

import {
  updateMember,
  getSingleMembers,
} from "../../../redux/members/singleMembersActions";

const EditMembers = ({
  match: {
    params: { id },
  },
  history,
}) => {
  const dispatch = useDispatch();
  const { members, loading, alerts } = useSelector((state) => state.singleMember);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [faculty, setFaculty] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
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

  useEffect(() => {
    setTimeout(dispatch(getSingleMembers(id)));
  }, []);

  useEffect(() => {
    setName(members.name);
    setRole(members.role);
    setFaculty(members.faculty);
    setFacebook(members.facebook);
    setLinkedin(members.linkedin);
  }, [members]);

  const update = () => {
    dispatch(
      updateMember(id, {
        name,
        role,
        faculty,
        facebook,
        linkedin,
        img: filename !== "" ? `/images/${filename}` : null,
        file: file !== "" ? file : null,
      })
    );
    setTimeout(() => {
      history.push("/admin/dashboard");
    }, 300);
  };

  return (
    <div
      className="px-5"
      style={{ minHeight: "70vh", maxWidth: "65.125rem", margin: "auto" }}
    >
      <h1>Edit members</h1>

      {loading ? (
        <LoadingComponent />
      ) : alerts.length > 0 ? (
        alerts.map((alert) => <Alert color="danger">{alert}</Alert>)
      ) : (
        <div className="mt-3 space-even">
          <Input
            value={name ? name : members.name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            value={role ? role : members.role}
            placeholder="Role"
            onChange={(e) => setRole(e.target.value)}
          />
           <Input
            value={faculty ? faculty : members.faculty}
            placeholder="Faculty"
            onChange={(e) => setFaculty(e.target.value)}
          />
           <Input
            value={facebook ? facebook : members.facebook}
            placeholder="Facebook"
            onChange={(e) => setFacebook(e.target.value)}
          />
           <Input
            value={linkedin ? linkedin : members.linkedin}
            placeholder="Linkedin"
            onChange={(e) => setLinkedin(e.target.value)}
          />
         
          <Input type="file" onChange={changeFile} />
          <Button color="primary" onClick={update}>
            Update
          </Button>
        </div>
      )}
    </div>
  );
};

export default withRouter(EditMembers);