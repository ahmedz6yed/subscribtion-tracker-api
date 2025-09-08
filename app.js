import express from "express";
import { PORT } from "./config/env.js";
const app = express();
console.log(PORT);
import routerUser from "./routes/user.routes.js";
import routerAuth from "./routes/auth.routes.js";
import routerSubscribtions from "./routes/subscribtions.routes.js";

app.use(express.json());
app.use("/api/users", routerUser);
app.use("/api/auth", routerAuth);
app.use("/api/subscribtions", routerSubscribtions);
app.get("/", (req, res) => {
  res.status(200).send({ content: "high" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
