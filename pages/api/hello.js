// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { spawn } from "child_process";

export default function handler(req, res) {
  if (req.method == "POST") {
    try {
      const py = spawn("python3", ["ml.py"]);

      py.stdin.write(
        '{"interactionLevel":0,"offlineDays":1,"academicLifeImportantance":1,"age":0,"year":1,"transportationTime":4,"school": 0,"credits":2,"friends":2,"studentActivities":1}'
      );
      py.stdin.end();

      py.stdout.on("data", (data) => {
        res.status(200).json(JSON.parse(data.toString()));
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "Internal Error" });
    }
  } else {
    res.status(500).json({ msg: "Can't handle this method" });
  }
}
