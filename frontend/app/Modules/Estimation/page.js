import React from 'react';

import Saisie from '@/app/Modules/Estimation/Enregistrement/Saisie/page';
import Layout from '@/app/layoutUser';
import Etapes from '@/app/Etapes/page';
const Estimation = () => {
  const estimationPhases = ['Enregistrement', 'Theorique', 'Installation et Realisation', 'Maintenance'];

  // Callback function to receive the phase index from Etapes component
  const handlePhaseClick = (index) => {
    console.log(`Clicked on phase ${index}: ${estimationPhases[index]}`);
    // Add your logic to handle the phase click in the Estimation component
  };

  return (
  
  <>
  
 <Etapes/>


  </>
  
  
  
  );
};

export default Estimation;

/* <Etape phases={estimationPhases}  /> */