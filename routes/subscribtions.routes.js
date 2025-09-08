import { Router } from "express";

const routerSubscribtions = Router();

routerSubscribtions.get("/", (req, res) => {
  res.status(200).send({ message: "GET All Subscribtions" });
});

routerSubscribtions.get("/:id", (req, res) => {
  res.status(200).send({ message: "GET Subscribtion by ID" });
});
routerSubscribtions.post("/", (req, res) => {
  res.status(201).send({ message: "New Subscribtion have created" });
});
routerSubscribtions.put("/:id", (req, res) => {
  res.status(200).send({ message: "UPDATE Subscribtion by ID" });
});
routerSubscribtions.delete("/:id", (req, res) => {
  res.status(200).send({ message: "DELETE Subscribtion by ID" });
});
routerSubscribtions.get("/user/:id", (req, res) => {
  res
    .status(200)
    .send({ message: "GET All Subscribtions of a User by User ID" });
});
routerSubscribtions.put("/:id/cancel", (req, res) => {
  res.status(200).send({ message: "CANCEL Subscribtion " });
});
routerSubscribtions.get("/upcoming-renewals", (req, res) => {
  res.status(200).send({ message: "GET All Upcoming Renewals" });
});
export default routerSubscribtions;
