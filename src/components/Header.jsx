import React from "react";
import styled from "styled-components";

const  StyledHeader = styled.header`
    background-color:${props=>props.theme.headerBg};
    color : ${props=>props.theme.text};
    span{
        cursor:pointer;
        user-select:none;
    }
`
export default function Header({handleTheme}){
    return(

        <StyledHeader className="">          
            <div className=" container d-flex align-items-center py-3  justify-content-between">
                <h1 className='fs-3 '>Where in the world</h1>
                <span  onClick={handleTheme} >Dark Mode</span>        

            </div>
        </StyledHeader>
    
    )
}