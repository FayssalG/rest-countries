import React, { useEffect, useState } from "react";

import { StyledLink } from "../styled-components/components";
import { fetchData } from "../utils/fuctions";

export default function Border({border}){
    const [name , setName] = useState('')

    useEffect(()=>{
        const url = 'https://restcountries.com/v3.1/alpha/';
        fetchData(url , border , '?fields=name')
        .then((data)=>{
            
            setName(data.name.common)
        })
        .catch((error)=>{
            setName('None')   
        })

    },[])

    return <StyledLink to={'/'+border} className="nav-link border p-1 px-2 rounded ">{name}</StyledLink>
}