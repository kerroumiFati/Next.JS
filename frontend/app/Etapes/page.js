'use client'
// Etapes.js
import React, { useState, useEffect } from 'react';
import { Button, Card, Input,Table} from 'react-daisyui';
import EstimationService from '../../services/estimation';
import Layout from '../layoutUser';
import Link from 'next/link';

const PhaseCircle = ({ phaseName, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer rounded-full h-30 w-30  flex items-center justify-center text-sm ${
      isActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
    }`}
  >
    {phaseName}
  </div>
);

const Etapes = () => {
  const [projectByState, setProjectByState] = useState([]);
    const phases = ['1', '2', '3']; // Define your phases here or get them from props/state
  const [currentPhase, setCurrentPhase] = useState(0);

  const handleNextPhase = () => {
    if (currentPhase < phases.length - 1) {
      setCurrentPhase(currentPhase + 1);
    }
  };

  const handleCircleClick = (index) => {
    setCurrentPhase(index);
  };
  const handleRowClick= (EstimationData) => {
   // console.log(id);
    localStorage.setItem ('Estimation',JSON.stringify(EstimationData));


  }
  function formatDate(dateString) {
    const date = new Date(dateString);
    
    const day = date.getDate().toString().padStart(2, '0'); // Get day with leading zero if needed
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  }
console.log(currentPhase)
  useEffect(() => {
    const fetchEstimations = async () => {
      try { 
        let state; 
     currentPhase+1 ===1 ?    state = 'Saisie' :  currentPhase+1 ===2 ?    state = 'Sortie'  :  state = 'Ouverture'// Replace with the desired state value
        const fetchedEstimations = await EstimationService.getEstimationsByState(state);
        console.log(fetchedEstimations.data.estimations[0]);
        setProjectByState(fetchedEstimations.data.estimations);
       
      } catch (error) {
        console.error('Error fetching estimations:', error);
      }
    };  fetchEstimations();
  }, [currentPhase]);
  const renderCurrentPhase = () => {
    // You can add logic to render the components for different phases
    // based on the currentPhase state
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">  Phase {currentPhase + 1}</h2>
        {/* Include the form fields or content for the current phase */}
      </div>
    );
  };

  return (<Layout>
    <div className="flex flex-col items-center  justify-start max-w-2xl w-full p-8 border-collapse bg-gray-100 mt-10">
      <div className="flex items-center space-x-4 mb-4">
        {phases.map((phase, index) => (
          <PhaseCircle
            key={index}
            phaseName={phase}
            isActive={index === currentPhase}
            onClick={() => handleCircleClick(index)}
          />
        ))}
      </div>
      <div className="overflow-x-auto w-15000">
     
<table className="table w-full  border-collapse p-8">
  <thead>
    <tr className="bg-gray-100">
      <th className="border px-4 py-2"></th>
      <th className="border px-4 py-2">Numero affaire</th>
      <th className="border px-4 py-2">Code</th>
      <th className="border px-4 py-2">Secteur</th>
      <th className="border px-4 py-2">Date</th>
      <th className="border px-4 py-2">Heure</th>
      <th className="border px-4 py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {projectByState.map((estimation) => (
      <tr key={estimation.id} className="hover:bg-gray-50">
        <td className="border px-4 py-2"></td>
        <td className="border px-4 py-2">{estimation.numero_affaire}</td>
        <td className="border px-4 py-2">{estimation.code_client}</td>
        <td className="border px-4 py-2">{estimation.secteur_client}</td>
        <td className="border px-4 py-2">{formatDate(estimation.date)}</td>
        <td className="border px-4 py-2">{estimation.heure}</td>
        <td className="border px-4 py-2">
          <Link
            href={
              currentPhase + 1 === 1
                ? '/Modules/Estimation/Enregistrement/Sortie'
                : currentPhase + 1 === 2
                ? '/Modules/Estimation/Enregistrement/Ouverture'
                : currentPhase + 1 === 3
                ? '/Modules/Estimation/Enregistrement/Ouverture'
                : '/Modules/Estimation/Enregistrement/Saisie'
            }
            onClick={() => handleRowClick(estimation)}
            className="text-blue-500 hover:underline"
          >
            Click Me
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>


</div>
      <div className="mt-6">{renderCurrentPhase()}</div>
    </div></Layout>
  );
};

export default Etapes;
