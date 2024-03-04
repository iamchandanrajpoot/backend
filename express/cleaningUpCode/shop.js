import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Welocome to express tutorials</h1>");
});

export default router;
