import React from "react"
import { StyledLink } from "../styled-components/components"

export default function CountryElement({country}){
    return(
        <div  className="col-lg-3">
            <StyledLink to={'/'+country.cca3} className="card nav-link px-0">
                <img className="card-img-top img-fluid" loading="lazy" src={country.flags.svg} alt={country.cca3} />
                <div className="card-body py-4">
                    <h2 className="card-title fw-bolder fs-5 ">{country.name.common}</h2>
                    <p className="card-text mb-0 fs-6"><span className="fw-semibold">Population</span>: {country.population}</p>
                    <p className="card-text mb-0 fs-6"><span className="fw-semibold">Region</span>: {country.region} </p>
                    <p className="card-text mb-0 fs-6"><span className="fw-semibold">Capital</span>: {country.capital && country.capital[0]} </p>
                </div>
            </StyledLink>
        </div>
    )
}