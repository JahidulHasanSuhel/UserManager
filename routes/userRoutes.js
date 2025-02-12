import express from "express";
import {
  createUser,
  getAllUsers,
  getAllUsersJSON,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/posts", createUser);
router.get("/users", getAllUsers);
router.get("/userall", getAllUsersJSON);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
