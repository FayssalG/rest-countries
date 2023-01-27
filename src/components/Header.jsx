import React, { useContext } from "react";
import styled , {ThemeContext} from "styled-components";
import { StyledHeader } from "../styled-components/components";

export default function Header({handleTheme}){

    let theme = useContext(ThemeContext)
    console.log(theme)
    theme = theme.value === 'dark' ? <i class="bi bi-moon-stars-fill px-1"></i> : <i class="bi bi-moon px-1"></i>

    
    return(

        <StyledHeader className="">          
            <div className=" container d-flex align-items-center py-3  justify-content-between">
                <h1 className='fs-3 '>Where in the world</h1>
                <span  onClick={handleTheme} >{theme} Dark mode</span>        

            </div>
        </StyledHeader>
    
    )
}