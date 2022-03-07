import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './jwt.strategy';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports:[
    //for jwt-json web token
    JwtModule.register({
      secret:'secret',
      signOptions:{
        expiresIn:3600,
      },
    }),
    
    //for passport authentication &authorization
    PassportModule.register({
      defaultStrategy:'jwt',
    }),

  TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  providers: [UserService,JwtStrategy],
  exports:[JwtStrategy,PassportModule],
})
export class UserModule {}
