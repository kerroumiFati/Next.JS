CREATE DATABASE Alfec;

		

CREATE TABLE Estimation (
    id_Register SERIAL PRIMARY KEY,
    numero_Affaire  INT ,
    code_client VARCHAR (200),
    nom_client	 VARCHAR (200),
    secteur_client VARCHAR (200),
    email_client VARCHAR (200),
    adresse_client VARCHAR (200),
    fax_client INT ,
    num_teleph_client INT ,
    date_entree date ,
    date_butoir  date ,
    date_sortie date , 
    date_depot  date ,
    AppelOffre BOOLEAN ,/*si aO ou consultation*/
    filePathSaisie VARCHAR (200),
    filePathSortie VARCHAR (200),
    filePathOuverture VARCHAR (200),
    resulta VARCHAR (50), ,/*apre ouverture resultat de retenue*/
    ouverure_date date ,
    resultatPath_ouverture VARCHAR (200),
    champ_remarqueSaisie VARCHAR (200),
    champ_remarqueSortie VARCHAR (200),
    champ_remarqueOuverture VARCHAR (200),
    EtatDuProjet VARCHAR (200),
    date date,
    heure TIME
    
);

CREATE TABLE Users (
    id_Users SERIAL PRIMARY KEY,
    nom_User VARCHAR(200),
    prenom_User  VARCHAR(200),
    secteur_Users  VARCHAR(200),
    birthdate date,
    email_Users VARCHAR(200),
    num_tlf_user INT,
    num_Post INT,
    password VARCHAR(200),  
    id_Roles int 
    
);
CREATE TABLE Roles (
    id_Roles SERIAL PRIMARY KEY,
    nom_Role  VARCHAR (200)
);



