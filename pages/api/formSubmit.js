import Pageclip from "pageclip";
// const pageclip = new Pageclip("api_enM7l7GWwLLzJvrkRfESsfSdte5N3Zrt");
const pageclip = new Pageclip("api_lUPpJXjlkLY3kbt6p65DdUMUrhMg3lKd");

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(process.env.NODE_ENV, "node_env");
    const pageclipForm =
      process.env.NODE_ENV == "development" ? "test" : req.body.form;
    pageclip
      .send(pageclipForm, req.body.data)
      .then(async (response) => {
        console.log(response);
        console.log(response.status, response.data, response.form);
        res.send({ success: response.status == 200 ? true : false });
        res.end();
      })
      .catch(async (error) => {
        res.send({ success: false });
        console.log(error, "error");
      });
  }
}
