import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { validate } from "class-validator";
import { Strategy,ExtractJwt } from "passport-jwt";
import { JwtPayload } from "./jwt.payload";
import { UserRepository } from "./user.repository";

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ){

        //get toke from incoming req and validate it using secret
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret',
        });
    }


async validate(payload: JwtPayload){
const user=this.userRepository.findOne({id:payload.id});

if(!user){
    throw new UnauthorizedException();
}
return user;
}
}