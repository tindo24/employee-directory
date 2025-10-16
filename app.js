import express from "express";
const app = express();

export default app;

//bring the employee database

import employees from "#db/employees";

// DEFINE API
app.route("/").get((req, res) => {
  res.send("HELLO EMPLOYEES ");
});
// route to get all employees
app.route("/employees").get((req, res) => {
  res.send(employees);
});

// Route to get a random employee
app.route("/employees/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.send(randomEmployee);
});

// route to get employees by index
app.route("/employees/:index").get((req, res) => {
  const { index } = req.params;
  const user = employees[index];
  if (!user) return res.status(404).send(" Employee not in our system");
  res.send(user);
});
