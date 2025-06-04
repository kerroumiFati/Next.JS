// SaisiePhase.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, Input, Textarea } from 'react-daisyui';
import esimationServices  from '@/services/estimation'
import axios from 'axios';
import Layout from '@/app/layoutUser';
const SaisiePhase = ({ onNextPhase  }) => {

  const [formData, setFormData] = useState([]);
  const [isAppelOffreChecked, setIsAppelOffreChecked] = useState(false);
  const [isConsultationChecked, setIsConsultationChecked] = useState(false);
    // State to track the user's choice

 const [numero_affaire,  setnumero_affaire] = useState();
 const [nom_client,  setNom_client] = useState();
 const [code_client,  setCode_client] = useState();
 const [secteur_client,  setSecteur_client] = useState();
 const [email_client, setEmail_client] = useState();
 const [adresse_client,  setAdresse_client] = useState();
 const [fax_client,   setFax_client] = useState();
 const [num_teleph_client,   setNum_teleph_client] = useState();
 const [date_entree,   setDate_entree] = useState();
 const [date_butoir,   setDate_butoir] = useState();
 const [date_depot,   setDate_depot] = useState();
 const [appeloffre,   setAppeloffre] = useState(false);
 const [filepath,   setFilepath] = useState();
 const [champ_remarque,   setChamp_remarque] = useState();
const [Id,setId]= useState();
const router = useRouter();
    // Function to toggle the checkbox
    const handleAppelOffreChange = () => {
      setIsAppelOffreChecked(!isAppelOffreChecked);
      setIsConsultationChecked(false);
    };
  
    // Function to handle changes in the Consultation checkbox
    const handleConsultationChange = () => {
      setIsConsultationChecked(!isConsultationChecked);
      setIsAppelOffreChecked(false);
    };
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFilepath (file);
    
    setFormData({ ...formData, fichierProforma: file });
   // setBonScanner
    console.log('setBonScanner'+file);
    console.log('Selected file:', file.name);
  };



  const saveFileOnServer = (file) => {
    // Use FormData to send the file
    const formData = new FormData();
    formData.append('bonScanner', file);

    // Send the file content to the server for saving
    axios.post('http://localhost:4000/api/upload', formData)
      .then(response => {
        handleSubmit();
        console.log('File saved on the server:', response.data);
      })
      .catch(error => {
        console.error('Error saving the file on the server:', error);
      });
  };

  const handleFileUpload = () => {
    if (filepath) { // Check if a file has been selected
      const reader = new FileReader();
  
      reader.onload = () => {
        const fileContent = reader.result;
        console.log('fileContent: ', fileContent);
  
        // Modify this function to accept the file directly
        saveFileOnServer(filepath);
      };
  
      reader.onerror = (error) => {
        console.error('Error reading the file:', error);
      };
  
      // Read the file as text
      reader.readAsText(filepath); // Passing the selected file directly to readAsText
    } else {
      console.warn('No file selected.');
    }
  };


  const handleSubmit =async () => {
    try {
   
        var data ={
      numero_affaire:numero_affaire,//8888
      nom_client:nom_client,
      code_client:code_client,
      secteur_client:secteur_client,
      email_client:email_client,
      adresse_client:adresse_client,
      fax_client:fax_client,
      num_teleph_client:num_teleph_client,
      date_entree:date_entree,
      date_butoir:date_butoir,
      date_depot:date_depot,
      appeloffre:appeloffre,/**** */
      champ_remarque:champ_remarque,
      etatduprojet:'Saisie'
    }
 
    console.log('Form data submitted:', data);
    esimationServices.Insert_Estimation(data).then(res => {

      setId(res.data);
      setnumero_affaire('');
      setNom_client('');
      setCode_client('');
      setSecteur_client('');
      setEmail_client('');
      setAdresse_client('');
      setFax_client('');
      setNum_teleph_client('');
      setDate_entree('');
      setDate_butoir('');
      setDate_depot('');
      setAppeloffre(false);
      setFilepath('');
      setChamp_remarque('');
      router.push('/Etapes');
  
      })
      setFormData([]);
    // You can add your logic to handle the form data submission
    // and navigate to the next phase if needed
  } catch (error) {
    console.error(error);
    // Handle error
  } 
  };

  return (<Layout>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center max-w-2xl">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">Saisie </h2>
        <Card className="p-6 space-y-4">
        <div className="mb-4">
            <label htmlFor="numeroAffaire" className="block text-gray-700 text-sm font-bold mb-2">
              N° d'affaire
            </label>
            <Input
              type="text"
              id="numeroAffaire"
              name="numeroAffaire"
              onChange={(e) => setnumero_affaire(e.target.value)}
              placeholder="Entrez le N° d'affaire"
              className="w-full"
            />
          </div>
          <div className="flex mb-4">
            {/* Checkbox for Appel d'offre */}
            <div className="mr-4">
              <label htmlFor="appelOffreCheckbox" className="block text-gray-700 text-sm font-bold mb-2">
                Appel d'offre
              </label>
              <input
                type="checkbox"
                id="appelOffreCheckbox"
                name="appelOffreCheckbox"
                checked={isAppelOffreChecked}
                onChange={handleAppelOffreChange}
                className="mr-2"
              />
            </div>
            {/* Checkbox for Consultation */}
            <div>
              <label htmlFor="consultationCheckbox" className="block text-gray-700 text-sm font-bold mb-2">
                Consultation
              </label>
              <input
                type="checkbox"
                id="consultationCheckbox"
                name="consultationCheckbox"
                checked={isConsultationChecked}
                onChange={handleConsultationChange}
                className="mr-2"
              />
            </div>
          </div>
          {/* Date field conditionally rendered based on checkbox state */}
          {isAppelOffreChecked && (
            <div className="mb-4">
              <label htmlFor="dateEntreeAO" className="block text-gray-700 text-sm font-bold mb-2">
                Date entrée Appel Offre
              </label>
              <Input
                type="date"
                id="dateEntreeAO"
                name="dateEntreeAO"
                onChange={(e) => {setAppeloffre(isAppelOffreChecked) ,setDate_entree(e.target.value)}}
                className="w-full"
              />
            </div>
          )}
          {isConsultationChecked && (
            <div className="mb-4">
              <label htmlFor="dateEntreeConsultation" className="block text-gray-700 text-sm font-bold mb-2">
                Date entrée consultation
              </label>
              <Input
                type="date"
                id="dateEntreeConsultation"
                name="dateEntreeConsultation"
                onChange={(e) => {setAppeloffre(isAppelOffreChecked) ,setDate_entree(e.target.value)}}
                className="w-full"
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="adresseClient" className="block text-gray-700 text-sm font-bold mb-2">
              Adresse client
            </label>
            <Input
              type="text"
              id="adresseClient"
              name="adresseClient"
              onChange={(e) => setAdresse_client(e.target.value)}
              placeholder="Entrez l'adresse du client"
              className="w-full"
            />
          </div>
         
          <div className="mb-4">
            <label htmlFor="dateButoir" className="block text-gray-700 text-sm font-bold mb-2">
              Date de butoir
            </label>
            <Input
              type="date"
              id="dateButoir"
              name="dateButoir"
              onChange={(e) => setDate_butoir(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateDepot" className="block text-gray-700 text-sm font-bold mb-2">
              Date de dépôt
            </label>
            <Input
              type="date"
              id="dateDepot"
              name="dateDepot"
              onChange={(e) => setDate_depot(e.target.value)}
              placeholder="Entrez la date de dépôt"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nomClient" className="block text-gray-700 text-sm font-bold mb-2">
              Nom du client
            </label>
            <Input
              type="text"
              id="nomClient"
              name="nomClient"
              onChange={(e) => setNom_client(e.target.value)}
              placeholder="Entrez le nom du client"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="secteurClient" className="block text-gray-700 text-sm font-bold mb-2">
              Secteur du client
            </label>
            <Input
              type="text"
              id="secteurClient"
              name="secteurClient"
              onChange={(e) => setSecteur_client(e.target.value)}
              placeholder="Entrez le secteur du client"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="codeClient" className="block text-gray-700 text-sm font-bold mb-2">
              Code client
            </label>
            <Input
              type="text"
              id="codeClient"
              name="codeClient"
              onChange={(e) => setCode_client(e.target.value)}
              placeholder="Entrez le code client"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="emailClient" className="block text-gray-700 text-sm font-bold mb-2">
              Email client
            </label>
            <Input
              type="email"
              id="emailClient"
              name="emailClient"
              onChange={(e) => setEmail_client(e.target.value)}
              placeholder="Entrez l'email du client"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telephoneClient" className="block text-gray-700 text-sm font-bold mb-2">
              N° de téléphone client
            </label>
            <Input
              type="tel"
              id="telephoneClient"
              name="telephoneClient"
              onChange={(e) => setNum_teleph_client(e.target.value)}
              placeholder="Entrez le numéro de téléphone du client"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="faxClient" className="block text-gray-700 text-sm font-bold mb-2">
              Fax client
            </label>
            <Input
              type="tel"
              id="faxClient"
              name="faxClient"
              onChange={(e) => setFax_client(e.target.value)}
              placeholder="Entrez le fax du client"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="remarque" className="block text-gray-700 text-sm font-bold mb-2">
              Remarque
            </label>
            <Textarea
              name="remarque"
              onChange={(e) => setChamp_remarque(e.target.value)}
              placeholder="Entrez le champ de remarque"
              className="w-full border-green-500"
            />
          </div>
          <div className="p-6  w-full py-2  bg-white rounded-xl shadow-md flex flex-col items-start space-y-2">
      <label htmlFor="fileInput" className="w-full flex items-center">
        <input
          type="file"
          id="fileInput"
          name="fileInput"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="bg-blue-500 text-white rounded-md py-2 px-4 cursor-pointer mr-2">
        Choisir un fichier
        </div>
        {filepath && (
          <span className="text-gray-700 text-sm">
            Fichier sélectionné : <span className="font-bold">{filepath.name}</span>
          </span>
        )}
      </label>
    </div>
          <Button onClick={handleFileUpload} className="bg-blue-500 text-white   w-full py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            Soumettre 
          </Button>
        </Card>
      </div>
    </div></Layout>
  );
};

export default SaisiePhase;



