import config from '../config/config';
import { ErrorCodes } from '../objects/errorCodes';
import { SuccessResult } from '../objects/result';
import { UserService } from '../services/user-service';

export class UserController{
    async login(req,res){
        if(!req.body && !req.body.email && !req.body.password){
            res.status(404).json({},ErrorCodes.MISSING_PARAMATERS);
        }
        const userService = new UserService();
        const result = await userService.loginUser(req.body.email,req.body.password);
        res.status(200).json(new SuccessResult(result));
    };
    
    async signup(req,res){
        if(!req.body && !req.body.email && !req.body.password){
            res.status(404).json({},ErrorCodes.MISSING_PARAMATERS);
        }
        const userService = new UserService();
        const result = await userService.createUser(req.body.email,req.body.password);
        res.status(200).json(new SuccessResult(result));
    };
}

