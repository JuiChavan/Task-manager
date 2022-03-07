import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDTO } from "./dto/auth.credentials.dto";
import { UserEntity } from "./user.entity";
import * as crypto from 'crypto-js';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{
async signup(authCredentialsDTO: AuthCredentialsDTO){
    //create row for user table
    const user=new UserEntity();
    user.username=authCredentialsDTO.username;

    user.password=`${crypto.MD5(authCredentialsDTO.password)}`;

    await user.save();
    return user;
}

async signin(authCredentialsDTO: AuthCredentialsDTO){
    const {username,password}=authCredentialsDTO;
    
    const user =await this.findOne({username});
    
    if(!user) {
        return null;
    }
    const passportValidation =user.validatePassword(password);
    if(!passportValidation )
    {
        return null; 
    }
    return user;
    
}
}