import styled from "styled-components";
import { Link } from "react-router-dom";


const Wrapper=styled.div`
  background-color: ${props=>props.theme.bg};
  color:${props=>props.theme.text};
  font-family: 'Nunito Sans', sans-serif !important; 
`


const  StyledHeader = styled.header`
    background-color:${props=>props.theme.headerBg};
    color : ${props=>props.theme.text};
    span{
        cursor:pointer;
        user-select:none;
    }
`



const Form = styled.form`
    background-color: ${props=>props.theme.elementBg};
    color: ${props=>props.theme.text};
    input{
      color: inherit !important;
    }
    svg{
        stroke : ${props=>props.theme.text} !important;
    }
`

const StyledLink = styled(Link)`
    background-color: ${props=>props.theme.elementBg};
    color: ${props=>props.theme.text};
    
    @media (min-width : 992px){
      img{
        object-fit: cover;
        height: 150px;
      }  
    }
    
    svg{
        stroke : ${props=>props.theme.text} !important;
    }

`

const Select = styled.select`
    background-color: ${props=>props.theme.elementBg};
    color: ${props=>props.theme.text}
`

const Section = styled.section`
    background-color: ${props=>props.theme.bg};
    color: ${props=>props.theme.text};
`


//Themes
const Darktheme={
  value:'dark',
  headerBg : 'var(--dark-blue)',
  bg : 'var(--very-dark-blue)',
  text : 'white',
  elementBg : 'var(--dark-blue)'
}

const LighTheme={
  value:'light',
  headerBg : 'white',
  text : 'var(--very-dark-blue)',
  bg : 'var(--very-light-gray)',
  elementBg : 'white'
}


export {LighTheme , Darktheme , Wrapper  ,Form  ,Select, Section ,StyledLink, StyledHeader}