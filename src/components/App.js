import React from 'react'
import { CssBaseline } from '@mui/material';
import { Route,Routes } from 'react-router-dom';

import {Actors,MovieInformation,Movies,NavBar,Profile} from './Index.js'



const App = () => {
 
 

  return (
   <div >
    <CssBaseline/>
    <NavBar/>
    <main>
    
        <Routes>
            <Route path='/' element={<Movies/>}> 
            </Route>
            <Route path='/profile/:id' element={<Profile/>}>
            </Route>
            <Route path='/movies/:id' element={<MovieInformation/>}>
            </Route>
            <Route path='/actors/:id' element={<Actors/>}>
            </Route>
        </Routes>
    </main>
  </div>
  )
}

export default App;
