import React, { useEffect, useReducer, useRef, useState } from "react";

import {Form , Select} from '../styled-components/components'
import CountryElement from "./CountryElement";
import reducer from "../utils/reducer"; 
import { fetchData } from "../utils/fuctions";        


export default function CountriesList(){
    const [state , dispatch] = useReducer(reducer,{status:'idle' , data:null , error:null})


    const [filter , setFilter] = useState('all')
    const [search , setSearch] = useState(/ */)
    const SearchRef = useRef(null)



    const handleFilter = (e)=>{
        setFilter(e.target.value)
    }

    const handleSearch = (e)=>{
        e.preventDefault()
        let regEx
        if (SearchRef.current.value.trim() === '') regEx = / */ 
        else regEx = new RegExp(SearchRef.current.value.toLowerCase().trim() , 'g')
        setSearch(regEx)
    }

    
    useEffect(()=>{
        const url = 'https://restcountries.com/v3.1/all'
        dispatch({type : 'pending'})
        fetchData(url)
        .then((data)=>{
            dispatch({type:'resolved' , payload:data})
        })
        .catch((error)=>{
            dispatch({type:'rejected' , payload:error})
        })
    },[])
    

    if (state.status === 'pending' || state.status === 'idle') return <h1 className="text-center my-5">Loading...</h1>

    // Filtering Data then searching the Filtered array 
    let filtered = filter ==='all' ? state.data : state.data.filter((c)=>c.continents.includes(filter))
    let searched = filtered.filter((c)=>{
        return (search.test(c.name.common.toLowerCase()) || search.test(c.cca3.toLowerCase()) ) 
        
    })
    
    return(
        <>
            <main className="pt-4 container">
              
                {/* SeaarchBar and Filtering select */}
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-between ">
                    <div className="">
                        <Form onSubmit={handleSearch} className="input-group rounded">
                            <button  className="input-group-text  border-0 bg-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> </button>
                            <input ref={SearchRef} className="form-control border-0 bg-transparent" placeholder="Search..." type="text" />
                        </Form>
                    </div>
                    

                    <div className="">
                        <Select onChange={handleFilter}  className="form-select  border-0  " name="" >
                            <option value="all">All</option>
                            <option value="Europe">Europe</option>
                            <option value='Asia'>Asia</option>
                            <option value="Africa">Africa</option>
                        </Select>
                    </div>        
                </div>
                {/* ---------END---------------- */}

                {/* Countries ----------------- */}
                    {searched.length === 0 && <div className="mt-5 text-center"><h1>No Country Found </h1></div>}            
                    
                    <div className=" mt-4 row gy-5 gx-5">
                        {
                            searched.map((country)=>{
                                return(
                                    <CountryElement key={country.cca2}  country={country} />
                                )
                            })
                        }
                                            
                    </div>

        </main>
            
        </>
    )
}