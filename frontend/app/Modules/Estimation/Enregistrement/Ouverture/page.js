'use client'
import React, { useState ,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, Input, Textarea , Select } from 'react-daisyui';
import esimationServices  from '@/services/estimation'
import axios from 'axios';
import Layout from '@/app/layoutUser';
import './ouverture.css'
const NextPage = () => {
 

 const [formData, setFormData] = useState([]);
 const [Selected, setSelected] = useState();
 const [date_Ouverture,   setDate_Ouverture] = useState();
 const [filepath,   setFilepath] = useState();
 const [champ_remarque,   setChamp_remarque] = useState();
 const [Id,setId]= useState();
 const router = useRouter();
 const [EstimationData, setEstimationData] = useState(null);

 useEffect(() => {
   const data = localStorage.getItem('Estimation');
   if (data) {
     const parsedData = JSON.parse(data);
     setEstimationData(parsedData);
   }
 }, []);


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
  const handleInputChange = (e) => {
   
    setSelected((e) => e.target.value);
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
      if(EstimationData){ 
      var data ={
      id :EstimationData.id_register,
      date_Ouverture:date_Ouverture,
      resultat:Selected,
      champ_remarque:champ_remarque,
      etatduprojet:'Ouverture'
    }
 
    console.log('Form data submitted:', data);
    esimationServices.updateOuverture(data).then(res => {

      setId(res.data);
      setDate_Ouverture('');
      setFilepath('');
      setChamp_remarque('');
      //router.push(`/Ouverture`);
      router.push('/Etapes');
      localStorage.removeItem('Estimation');
      })}
      setFormData([]);
  } catch (error) {
    console.error(error);
    // Handle error
  } 
  };
  return (<Layout>
   <div className="bg-gray-100  flex items-center justify-center ">
  <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
    <h2 className="text-2xl font-bold mb-4 text-center">Ouverture</h2>
    <Card className="p-6 space-y-4">
    <div className="mb-4 flex justify-between items-center">
  <h3 className="text-lg font-bold text-gray-800 ml-20 ">N° d'affaire :<p style={{ color:  '#045b9b' , display: 'inline-block'}}> {EstimationData ? EstimationData.numero_affaire :'' }</p></h3>
  <h3 className="text-lg font-bold text-gray-800 mr-20 ">Code client : <p style={{ color:  '#045b9b' , display: 'inline-block'}}>{EstimationData ? EstimationData.code_client :'' }</p></h3>
</div>



      <div className="mb-4">
        <label htmlFor="dateOuverture" className="block text-gray-700 text-sm font-bold mb-2">
          Date d'ouverture
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="date"
            id="dateOuverture"
            name="dateOuverture"
            value={date_Ouverture}
            onChange={(e) => setDate_Ouverture(e.target.value)}
            className="block w-full pr-10 ring-blue-200 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
        
        </div>
      </div>
    </div>
  
      <div className="mb-4">
        <label htmlFor="role" className="block text-sm font-bold text-gray-700">
          Resultat
        </label>
        <Select
          id="role"
          name="role"
          value={Selected}
          onChange={(e) => setSelected(e.target.value)}
          className="block w-full mt-1 rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option value="" disabled>
            Sélectionner le Resultat
          </option>
          <option value="Retenue">Retenue</option>
          <option value="NON_Retenue">NON_Retenue</option>
          {/* Add more roles as needed */}
        </Select>
      </div>
   
      
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Remarque</h3>
        <Textarea
          name="remarque"
          
          placeholder="Entrez le champ de remarque"
          onChange={(e) => setChamp_remarque(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
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
   
      <Button
        onClick={handleFileUpload} // Include your file upload handler here
        className="bg-blue-500 text-white  w-full  rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Soumettre
      </Button>
    </Card>
  </div>
</div>
</Layout>
  );
};

export default NextPage;
