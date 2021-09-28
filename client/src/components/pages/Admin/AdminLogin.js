import logo from "../../../static/images/IEEE-NU-Logo.png";
import { Card, Input, Button } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../redux/users/usersActions";

const AdminLogin = () => {
  const dispatch = useDispatch();

  const { loading, alerts } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    dispatch(getUser({ email, password }));
  };

  return (
    <div className="admin-login" style={{ minHeight: "70vh" }}>
      <Card className="p-3 login-card">
        <div className="d-flex align-items-center gap-2 justify-content-center">
          <img src={logo} className=" logo" alt="" />
          {"  "}
          <h3>Admin Panel</h3>
        </div>
        <div className="mt-3">
          {alerts.length > 0 &&
            alerts.map((alert) => <Alert color="danger">{alert}</Alert>)}
        </div>
        <div className="space-even mt-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name="email"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            name="password"
          />
          <div className="d-flex align-items-center justify-content-center">
            <Button onClick={login} color="success">
              Login
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminLogin;
