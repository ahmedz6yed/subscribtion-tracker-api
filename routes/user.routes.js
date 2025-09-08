//user routes create
import { Router } from "express";
const routerUser = Router();
routerUser.get("/", (req, res) => {
  res.status(200).send({ message: "GET All Users" });
});
routerUser.get("/:id", (req, res) => {
  res.status(200).send({ message: "GET User by ID" });
});
routerUser.post("/", (req, res) => {
  res.status(201).send({ message: "New user have created" });
});

routerUser.put("/:id", (req, res) => {
  res.status(200).send({ message: "UPDATE User by ID" });
});
routerUser.delete("/:id", (req, res) => {
  res.status(200).send({ message: "DELETE User by ID" });
});
export default routerUser;
