import axios from 'axios';
import { COUNTRY_ERROR,
     GET_ALL_COUNTRIES,
      GET_COUNTRIES_BY_POPULATION,
       GET_COUNTRY_ID, GET_COUNTRY_NAME,
        SET_CONTINENT 
    } from './action-type';

export function cambiarPagina(page){
     return{
          type: 'CHANGE_PAGE',
          payload: page
     } 
}



export function receiveCountries(countries){
     return {
          type: GET_ALL_COUNTRIES,
          payload: countries
     }
}

export function receiveCountryID(country){
     return {
          type: GET_COUNTRY_ID,
          payload: country
     }
}
export function recivePopulation(country){
     return {
          type: GET_COUNTRIES_BY_POPULATION,
          payload: country
}
}

export function receiveCountryName(country){
     return {
          type: GET_COUNTRY_NAME,
          payload: country
     }
}

export function setContinent(continent){
     return {
          type: SET_CONTINENT,
          payload: continent
     }
}

export function getCountries(order){
     if(order){
          return async function(dispatch){
               try {
                    const respuesta = await axios.get(`http://localhost:3001/countries/?order=${order}`);
                    const resultado = respuesta.data;
                    dispatch(receiveCountries(resultado));    
               } catch (error) {
                    console.log(error);
               }
                          
          }
     }else{
          return async function(dispatch){
               try {
                    const respuesta = await axios.get(`http://localhost:3001/countries/`)
                    const resultado = respuesta.data;
                    dispatch(receiveCountries(resultado));
               } catch (error) {
                    console.log(error);
               }
          }
     }
}

export function getCountryName(name){
     return async function(dispatch){
          try {
               const respuesta = await axios.get(`http://localhost:3001/countries/?name=${name}`)
               const resultado = respuesta.data;
               if(resultado === null || resultado.length > 1){
                    dispatch(receiveCountries(resultado))
               }else{
                    dispatch(receiveCountryName(resultado))
               }               
          } catch (error) {
               console.log(error);
          }
          
     }
}

export function getCountryId(id){
     return async function(dispatch){
          try {
               const respuesta = await axios.get(`http://localhost:3001/countries/${id}`)
               const resultado = respuesta.data;
               dispatch(receiveCountryID(resultado))
          } catch (error) {
               console.log(error);
          }
     }
}

export const getCountriesByPopulation = (population) =>  {
     return async (dispatch) => {
     try {
       const res =( await axios.get(`http://localhost:3001/countries/population/${population}`)).data;
       dispatch(recivePopulation(population))
     } catch (err) {
       dispatch({
         type: COUNTRY_ERROR,
         payload: { msg: err.response.statusText, status: err.response.status },
       });
     }
   };
}