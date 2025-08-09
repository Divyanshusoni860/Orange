const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  { username: "harsh@gmail.com", password: "123", name: "Harsh Shakya" },
  { username: "dida@gmail.com", password: "123321", name: "Harsh Soni" },
  { username: "ayush@gmail.com", password: "123321", name: "Ayush Nagar" },
];

function userExists(username, password) {
  return ALL_USERS.some(user => user.username === username && user.password === password);
}

app.post("/sign-in", function (req, res) {
  const { username, password } = req.body;

  if (!userExists(username, password)) {
    return res.status(403).json({ msg: "User does not exist in DB" });
  }

  const token = jwt.sign({ username }, jwtPassword);
  res.json({ token });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization?.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    const filteredUsers = ALL_USERS.filter(user => user.username !== username);

    res.json({ users: filteredUsers });
  } catch (err) {
    res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
