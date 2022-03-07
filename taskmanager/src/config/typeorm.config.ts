//DB connection

import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeORMConfiguration: TypeOrmModuleOptions= {
    username: 'root',
    password:'password',
    port:3306,
    host: 'localhost',
    type:'mysql',
    database:'taskmanager',
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
   //synchronize:true,

}