import * as mongoose from 'mongoose';

export const DevSchema = new mongoose.Schema({
   nom: String,
   prenom: String,
   domaine_developpement: String,
   niveau_etude: String,
   technologies: String,
   environement: String,
   mail: String,
   password: String,
   telephone: String,
   grade: String,
});
