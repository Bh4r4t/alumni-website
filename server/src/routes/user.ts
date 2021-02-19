import { Router } from "express";

const app = Router();

app.get("/45", (req, res) => {
  res.send("Welcome to profile page!");
});

export default app;
