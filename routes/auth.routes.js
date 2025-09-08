import { Router } from "express";

const routerAuth = Router();

routerAuth.post("/sign-up", (req, res) => {
  res.status(200).send({ message: "User signed up successfully" });
});
routerAuth.post("/sign-in", (req, res) => {
  res.status(200).send({ message: " User signed in successfully" });
});
routerAuth.post("/sign-out", (req, res) => {
  res.status(200).send({ message: " User signed out successfully" });
});

export default routerAuth;
