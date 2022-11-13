import {Request, Response} from "express";
import UsersServices from "../services/users.services";
import * as HttpStatus from 'http-status';

class UsersController {

 public home(req: Request, res: Response) {
    const users = UsersServices.home();
    return res.json({error: false, status: HttpStatus.OK, data: users});
 }

}

export default new UsersController();