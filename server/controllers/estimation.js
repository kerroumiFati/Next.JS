// controllers/insertController.js
const { log } = require('console');
const pool = require('../db');
const fs = require('fs');


const HeureNow = () => {
  var today = new Date();
  heure =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log("heure " + heure);
  return heure;
};
const insertData = async (req, res) => {
  try {//console.log('req.body',req.body);

    
  const {
    numero_affaire,
    code_client,
    nom_client,
    secteur_client,
    email_client,
    adresse_client,
    fax_client,
    num_teleph_client,
    date_entree,
    date_butoir,
    date_depot,
    appeloffre,
    champ_remarque,etatduprojet,
  } = req.body;
  //const filePath = req.body.filePath;
  const filePath = global.filePath;
  var date = new Date();
  var heure = HeureNow();
  console.log(filePath);
    console.log( numero_affaire, code_client, nom_client, secteur_client, email_client, adresse_client, fax_client, num_teleph_client, date_entree, date_butoir, date_depot, appeloffre, filePath, champ_remarque,etatduprojet,date,heure);
    const result = await pool.query(
      'INSERT INTO public.estimation( numero_affaire, code_client, nom_client, secteur_client, email_client, adresse_client, fax_client, num_teleph_client, date_entree, date_butoir, date_depot, appeloffre, filePathSaisie, champ_remarqueSaisie,etatduprojet,date,heure) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14,$15,$16,$17) RETURNING id_register;',
      [
        numero_affaire,
        code_client,
        nom_client,
        secteur_client,
        email_client,
        adresse_client,
        fax_client,
        num_teleph_client,
        date_entree,
        date_butoir,
        date_depot,
        appeloffre,
        filePath,
        champ_remarque,etatduprojet,date,heure,
      ],
      (error, queryResult) => {
        if (error) {
          console.error('Error inserting data:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          console.log('Form fields inserted successfully:', queryResult.rows[0]);
          res.status(200).json(queryResult.rows[0]);
        }
      }
    );

    
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
 //----------------------------------------Get Saisie project selon état----------------------------------------------------------------------------------------
const getEstimationsByState = async (state) => {
  try {
    const query = 'SELECT * FROM public.estimation WHERE etatduprojet = $1';
    const values = [state];

    const { rows } = await pool.query(query, values);
    return rows;
  } catch (error) {
    // Handle the error appropriately, e.g., log or throw an error
    console.error('Error fetching estimations by state:', error);
    throw error;
  }
};
const modifierSortie = async (req, res) => {
  var date = new Date();
  var heure = HeureNow();
  const query = 'UPDATE public.estimation SET date_sortie=$2, filepathsortie=$3, champ_remarqueSortie=$4, etatduprojet=$5, date=$6, heure=$7 WHERE id_register=$1;';
  const filePathSortie = global.filePath;
  const {id , date_sortie,champ_remarque, etatduprojet } = req.body;
  console.log(id , date_sortie,filePathSortie,champ_remarque, etatduprojet);
  pool.query(query, [ id ,date_sortie,filePathSortie,champ_remarque, etatduprojet, date, heure], (error, result) => {
    if (error) throw error;
    res.status(200).send("process bien modifier ");
  });

};
const modifierOuverture = async (req, res) => {
  var date = new Date();
  var heure = HeureNow();
  const filePathOuverture = global.filePath;
  const {id , date_Ouverture,resultat,champ_remarque, etatduprojet } = req.body;
  const query = 'UPDATE public.estimation SET filepathouverture=$2, resulta=$3, ouverure_date=$4,  champ_remarqueouverture=$5, etatduprojet=$6, date=$7, heure=$8 WHERE id_register=$1;';


  console.log(id , date_Ouverture,filePathOuverture,champ_remarque, etatduprojet);
  pool.query(query, [ id ,filePathOuverture,resultat,date_Ouverture,champ_remarque, etatduprojet, date, heure], (error, result) => {
    if (error) throw error;
    res.status(200).send("process bien modifier ");
  });

}


module.exports = {
  modifierOuverture,
  modifierSortie,
  getEstimationsByState,
 insertData}