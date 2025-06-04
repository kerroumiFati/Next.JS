


import axios from 'axios';
const API_INSERT = 'http://localhost:4000/api/insertData';
const API_ESTIMATIONBYSTATE = 'http://localhost:4000/api/getEstimationByState/';
const SORTIE_DATA= 'http://localhost:4000/api/SortieData';
const OUVERTURE_DATA= 'http://localhost:4000/api/OuvertureData';

class Estimation {
    Insert_Estimation(Data) {

        return axios.post(API_INSERT , Data)
    }

    getEstimationsByState(state) {
        try {
        return axios.get(API_ESTIMATIONBYSTATE + state)
    } catch (error) {
        // Handle errors or return an empty array
        console.error('Error fetching estimations by state:', error);
        return [];
    }
      }
      updateSortie(SortieData) {
     
        return axios.put(SORTIE_DATA , SortieData);
      }
      updateOuverture(OuvertureData) {
     
        return axios.put(OUVERTURE_DATA , OuvertureData);
      }
}





export default new Estimation()