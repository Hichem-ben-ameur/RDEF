import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DeveloppersController } from './developpers/developpers.controller';
import { DeveloppersService } from './developpers/developpers.service';
import { DevsModule } from './developpers/developpers.module';
import { VisiteursController } from './visiteurs/visiteurs.controller';
import { VisiteursService } from './visiteurs/visiteurs.service';
import { VisiteursModule } from './visiteurs/visiteurs.module';
import { ProjetsController } from './projets/projets.controller';
import { ProjetsService } from './projets/projets.service';
import { ProjetsModule } from './projets/projets.module';
import { AuthModule } from './auth/auth.module';
//import { AuthModule1 } from './auth1/auth.module';
import { UsersModule } from './users/users.module';
//import { UsersModule1 } from './users1/users.module';
import { NotificationProjetModule } from './notification-projet/notification-projet.module';
import { NotificationProfilController } from './notification-profil/notification-profil.controller';
import { NotificationProfilService } from './notification-profil/notification-profil.service';
import { NotificationProfilModule } from './notification-profil/notification-profil.module';
import config from './config/keys';

@Module({
  imports: [AuthModule,ProjetsModule,VisiteursModule,DevsModule,ItemsModule, MongooseModule.forRoot(config.mongoURI, {useNewUrlParser: true , useUnifiedTopology: true }),  UsersModule, NotificationProjetModule, NotificationProfilModule/*,AuthModule1,UsersModule1*/],
  controllers: [AppController, ItemsController, DeveloppersController, VisiteursController, ProjetsController, NotificationProfilController],
  providers: [AppService, ItemsService, DeveloppersService, VisiteursService, ProjetsService, NotificationProfilService],
})
export class AppModule {}
