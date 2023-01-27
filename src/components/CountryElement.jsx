import React from "react"
import { StyledLink } from "../styled-components/components"

export default function CountryElement({country}){
    return(
        <div  className="col-lg-3 ">
            <StyledLink to={'/'+country.cca3} className="card nav-link px-0">
                <img className="card-img-top img-fluid" src={country.flags.svg} alt="" />
                <div className="card-body">
                    <h2 className="card-title fw-bold fs-5">{country.name.common}</h2>
                    <p className="card-text mb-0 fs-6"><span className="">Population {country.population}</span>  </p>
                    <p className="card-text mb-0 fs-6"><span className="">Region {country.region}</span> </p>
                    <p className="card-text mb-0 fs-6"><span className="">Capital {country.capital && country.capital[0]}</span> </p>
                </div>
            </StyledLink>
        </div>
    )
}