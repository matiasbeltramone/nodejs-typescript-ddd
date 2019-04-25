import { Router } from "express";
import users from "./users";

const router = Router();

/* Users Routes */
router.use('/users', users);

export default router;
