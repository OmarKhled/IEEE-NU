import { spawn } from "child_process";

export default function handler(req, res) {
  if (req.method == "POST") {
    res.status(500).json({ msg: "Can't handle this method" });
  }
  res.end();
}
