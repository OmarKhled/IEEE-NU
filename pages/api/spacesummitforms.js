import { spawn } from "child_process";
import Pageclip from "pageclip";
const pageclip = new Pageclip("api_enM7l7GWwLLzJvrkRfESsfSdte5N3Zrt");

export default function handler(req, res) {
  if (req.method == "POST") {
    pageclip
      .send("egyptianSpaceSummitSecondEditionEventDay", req.body)
      .then((response) => {
        res.send({ success: response.status == 200 ? true : false });
        res.end();
        console.log(response.status, response.data, response.form); // => 200, [Item, Item]
      });
  }
}
