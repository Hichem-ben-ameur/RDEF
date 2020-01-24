import * as mongoose from 'mongoose';

export const ProjetSchema = new mongoose.Schema({
    nom_projet: String,
    details: String,
    recherche: String,
    adresse: String,
    id_auteur: String,
});
