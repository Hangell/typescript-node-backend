import { Request, Response, Router } from 'express';
import User from "./user.route";

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World 3!' });
});

router.use('/users', User);

export default router;