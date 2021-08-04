import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.header("auth");

  if (!token) {
    res.status(401).json({ msg: "Not authorized" });
  }
  try {
    const user = jwt.verify(token, process.env.SECRET);
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: "Invalid token" });
  }
};
