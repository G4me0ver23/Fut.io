import "./styles/index.css";
import MainTela from "./pages/MainTela";
import PriTela from "./pages/PriTela";
import CadastroTela from "./pages/CadastroTela";
import LoginTela from "./pages/LoginTela";
import PsicoTela from "./pages/PsicoTela";
import NutriTela from "./pages/NutriTela";
import TaticTela from "./pages/TaticTela";
import HelpTela from "./pages/HelpTela";
import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={ <PriTela /> }/>
          <Route path='/pritela' element={ <PriTela /> } />
          <Route path='/cadastrotela' element={<CadastroTela />} />
          <Route path='/logintela' element={ <LoginTela /> } />
          <Route path='/maintela' element={<MainTela />} />
          <Route path='psicotela' element={ <PsicoTela /> } />
          <Route path='/tatictela' element={<TaticTela />} />
          <Route path='/nutritela' element={ <NutriTela /> } />
          <Route path='/helptela' element={<HelpTela />} />
      </Routes>
    </Router>
  )
}
