import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login'
import { Products } from './pages/Products'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Shopping } from './pages/Shopping'
import { useState } from 'react'

function App() {
    const [loading, setLoading] = useState(false)
    const [popupOpen,setPopupOpen] = useState(false)
    const [searchValue,setSearchValue] = useState('')
    const [warning, setWarning] = useState(false)




  return (
    <BrowserRouter>
      <Routes >

      <Route path='/' element={<Login loading={loading} setLoading={setLoading}/>} />
      <Route path='/Products' element={
        <ProtectedRoute>
          <Products loading={loading} setLoading={setLoading} popupOpen={popupOpen} setPopupOpen={setPopupOpen} searchValue={searchValue} setSearchValue={setSearchValue} warning={warning} setWarning={setWarning}/>          
        </ProtectedRoute>
        } />
      <Route path='/Shopping' element={
        <ProtectedRoute>
          <Shopping loading={loading} setLoading={setLoading} popupOpen={popupOpen} setPopupOpen={setPopupOpen} searchValue={searchValue} setSearchValue={setSearchValue} warning={warning} setWarning={setWarning}/>          
        </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
