import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { bazarList, mealList, members, users } from "./demoData.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server on running... ");
});

app.get("/members", (req, res) => {
  res.send(members);
});
app.post("/member", (req, res) => {
  const body = req.body;

  console.log({body})

  members.push(body);

  res.send("members created successfully!");
});

app.get("/bazar-list", (req, res) => {
  res.send(bazarList);
});
app.get("/meal-list", (req, res) => {
  res.send(mealList);
});

app.get("/users-list", (req, res) => {
  res.send(users);
});

app.post("/user", (req, res) => {
  const body = req.body;

  users.push(body);

  res.send("User created successfully!");
});

app.listen(5000, () => {
  console.log("Server on running...");
});
