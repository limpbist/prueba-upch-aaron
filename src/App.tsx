import './App.css'

import { Route, Routes } from 'react-router-dom'
import ListadoComponent from './modules/usuarios/components/listado/ListadoComponent'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element= { <ListadoComponent/>}/>
    </Routes>
    </>
  )
}

export default App
