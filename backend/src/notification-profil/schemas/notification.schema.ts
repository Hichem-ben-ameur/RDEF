import * as mongoose from 'mongoose';

export const NotificationProfileSchema = new mongoose.Schema({
   id_visiteur: String,
   id_developpeur: String,
});
