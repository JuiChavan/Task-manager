import { IsNotEmpty, MinLength } from "class-validator";


export class AuthCredentialsDTO{
    @IsNotEmpty()
    //@MinLength(2)
    username: string;

    @IsNotEmpty()
    password:string;
}