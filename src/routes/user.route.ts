import { Router } from 'express';
import UsersController from "../controllers/users.controller";
const router: Router = Router();

router.get('/', UsersController.home);

export default router;