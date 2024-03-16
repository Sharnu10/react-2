import { Router } from "express";

const router = Router();

router.get("/123", (req, res) => {
  res.json("Server is up! 2");
});

export default router;
