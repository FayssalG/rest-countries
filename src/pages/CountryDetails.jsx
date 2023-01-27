import React, { useEffect, useReducer } from "react";
import { useNavigate, useParams  } from "react-router-dom";


import { StyledLink , Section} from '../styled-components/components'
import reducer from "../utils/reducer";
import { fetchData } from "../utils/fuctions";
import Border from "../components/Border";

export default function CountryDetails(){
    const query = useParams()
    const [state , dispatch ] = useReducer(reducer , {status:'idle' , data:null , error:null})
    const navigate = useNavigate()
        
    
    useEffect(()=>{
        const url = 'https://restcountries.com/v3.1/alpha/'
        const params = '?fields=name,capital,currencies,flags,population,region,subregion,tld,languages,borders'
        dispatch({type : 'pending'})
        fetchData(url , query.cca ,params)
        .then((data)=>{
            //wrapping data in an array to filter it
            dispatch({type:'resolved' , payload:[data]})
            
        })
        .catch((error)=>{
            dispatch({type:'rejected' , payload:error})
            

        })

           
    },[query])

    
    if (state.status ==='pending' || state.status ==='idle') return <h1 className="text-center mt-5">Loading...</h1>
    if (state.status ==='rejected') {
        navigate('/404')    
    }

    // All of these are variables representing the informations  about the country    
    console.log(state)
    const country = state.data[0]
    const name = country.name.common
    const flag = country.flags.svg
    
    const nativeNameKey = Object.keys(country.name.nativeName)[0]
    const nativeName = country.name.nativeName[nativeNameKey].common

    const population = country.population
    const region = country.region
    const subRegion = country.subregion
    const capital = country.capital.length>0? country.capital[0] : null
    const tld = country.tld[0]

    const currencyKey =  Object.keys(country.currencies) 
    const currencies = currencyKey.length > 0 ? country.currencies[currencyKey[0]].name : null
    
    const langs = Object.values(country.languages).join(' ')
    console.log(langs)

    const borders = country.borders
   
    return(
        <Section className="container">
                
                <div className="d-flex  text-center">
                    <StyledLink to='/' className=" nav-link  my-4 px-3 py-2 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        <span className="ms-2">Back</span>
                    </StyledLink>
                </div>

                <div className="row g-4">
                    {/* Flag */}
                    <div className="col-lg ">
                        <img className="w-100" src={flag} alt="" />
                    </div>
                    {/* ------------------------------------ */}

                    {/* Details */}
                    <div className="col-lg">
                        <h1>{name}</h1>

                        <div className="row gy-5">
                            <div className="col-md">
                                <p><span className="fw-bold">Native Name</span> {nativeName}</p>
                                <p><span className="fw-bold">Population</span> {population}</p>
                                <p><span className="fw-bold">Region</span> {region}</p>
                                <p><span className="fw-bold">Sub Region</span> {subRegion}</p>
                                <p><span className="fw-bold">Capital</span> {capital }</p>

                            </div>
                            <div className="col-md">
                                <p><span className="fw-bold">Top Level Domains</span> {tld}</p>
                                <p><span className="fw-bold">Currencies</span> {currencies}</p>
                                <p><span className="fw-bold">Languages</span> {langs}</p>
                            </div>
                        </div>

                        <div className="row align-items-center g-2">
                            <span className="col-lg-4 ">Border Countries </span>
                            <div className="col-lg d-flex flex-wrap gap-4 align-items-center">
                                {borders && borders.map((border)=>{
                                    if (border === 'ISR' || border==='ESH') return null
                                    return <Border key={border} border={border} />
                                }) }
                            </div>
                        
                        </div>

                    </div>
                    {/* --------End Details --------------------- */}
                </div>
    

        </Section>
    )
}