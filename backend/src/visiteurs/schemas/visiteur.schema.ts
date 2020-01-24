import * as mongoose from 'mongoose';

export const VisiteurSchema = new mongoose.Schema({
   type: String, 
   nom: String,
   prenom: String,
   nom_entreprise: String,
   responsable_rh: String,
   mail: String,
   password: String,
   telephone: String,
});
