import React,{useState,useEffect} from 'react';
import { NativeSelect,FormControl } from '@material-ui/core';
import styles from "./Country.module.css"
import { countries } from '../../api';

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries,setFetchedCountries] = useState([])
  
  useEffect(()=>{
    const fetchedCountries = async () =>{
      setFetchedCountries(await countries())
    }
    fetchedCountries()
  },[setFetchedCountries])

  return (
   <FormControl className={styles.formControl}>
   <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
   <option value="global">Global</option>
   {
    fetchedCountries.map((country,i)=>
    <option key={i} value={country}>{country}</option>
    )
   }
   </NativeSelect>
   </FormControl>
  )
}

export default CountryPicker