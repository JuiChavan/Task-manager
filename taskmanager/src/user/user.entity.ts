import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as crypto from 'crypto-js';
import { type } from "os";
import { TaskEntity } from "src/task/task.entity";

@Entity('User')
@Unique(['username'])
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn() 
    id:number;
    
    @Column()
    username:string;

    @Column()
    password:string;

   
    @OneToMany((type) => TaskEntity,(task) => task.user, {eager:true})
    tasks:TaskEntity[];
    
    validatePassword(password:string){
       
        const encrypted = `${crypto.MD5(password)}`;
        console.log(`encrypted: ${encrypted}, user: ${this.password}`);
        return encrypted == this.password;
    }

}