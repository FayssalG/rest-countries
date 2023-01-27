import { createContext, useContext, useEffect, useState } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import CountriesList from './components/CountriesList'
import Header from "./components/Header";
import NotFound from './pages/NotFound';

import { ThemeProvider } from 'styled-components';
import CountryDetails from './pages/CountryDetails';

import { Wrapper , Darktheme , LighTheme } from './styled-components/components';


function App() {
  const [theme , setTheme] = useState(()=>window.localStorage.getItem('theme') ||  'dark')
  useEffect(()=>{
    window.localStorage.setItem('theme' , theme)
  },[theme])

  const handleTheme = ()=>{
      if(theme === 'dark') setTheme('light')
      else setTheme('dark') 
  }

  return (
    <BrowserRouter>
        <ThemeProvider theme={theme==='dark'?Darktheme:LighTheme}>
          <Wrapper className='min-vh-100'>
            <Header handleTheme={handleTheme} />  
            <Routes>
                <Route path='/' element={<CountriesList/>}/>
                <Route path='/:cca' element={<CountryDetails/>}/>
                <Route path='/404' element={<NotFound/>}/>
            </Routes>
            
          </Wrapper>
        </ThemeProvider> 
    </BrowserRouter>
       
  )
}

export default App
