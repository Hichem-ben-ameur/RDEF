import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { type } from 'os';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
 
  constructor(private readonly authService: AuthService) {
    super();
  }
  
  async validate(username: string, password: string): Promise<any> {
 // type:string=username;
    //console.log(username.substring(username.indexOf("?type"), 4));
    
 //  console.log(username.substring(username.indexOf("?type=")+6,username.length));
 if(username.substring(username.indexOf("?type=")+6,username.length)==="visiteur")
 { username= username.substring(0,username.indexOf("?type=")); 
   console.log("Entreprise: "+username); 
     const user = await this.authService.validateUser(username, password);
  if (!user) {
    throw new UnauthorizedException();
  }
  return user;}
  if(username.substring(username.indexOf("?type=")+6,username.length)==="dev")
  { username= username.substring(0,username.indexOf("?type=")); 
    console.log("Développeur: "+username); 
      const user = await this.authService.validateUser2(username, password);
   if (!user) {
     throw new UnauthorizedException();
   }
   return user;}


  }
}