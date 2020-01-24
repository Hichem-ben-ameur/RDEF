import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { VisiteursService } from '../visiteurs/visiteurs.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
   
    private readonly jwtService: JwtService,
   //private readonly visiteursService: VisiteursService
     private readonly usersService: UsersService
    
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    /*if(type==="developper")
    {
      const user = await this.usersService.findOneDev(username);
      //const user = await this.visiteursService.findOne(username);
     
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
    }*/
const user = await this.usersService.findOneVisiteur(username);
    //const user = await this.visiteursService.findOne(username);
   
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateUser2(username: string, pass: string): Promise<any> {
    /*if(type==="developper")
    {
      const user = await this.usersService.findOneDev(username);
      //const user = await this.visiteursService.findOne(username);
     
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
    }*/
const user = await this.usersService.findOneDev(username);
    //const user = await this.visiteursService.findOne(username);
   
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      id:user._doc._id,
      username:user._doc.mail,
      firstName:user._doc.nom,
      lastName:user._doc.prenom,
      access_token: this.jwtService.sign(payload),
    };
  }
}