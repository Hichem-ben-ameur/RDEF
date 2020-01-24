import * as mongoose from 'mongoose';

export const NotificationProjetSchema = new mongoose.Schema({
   id_visiteur: String,
   id_projet: String,
   id_developpeur: String,
});
