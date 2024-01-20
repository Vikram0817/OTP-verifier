import { useState } from 'react'
import GetOTP from './components/GetOTP'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'

function App() {

  return (
    <div className='app-card'>
      <h1>Log via OTP</h1>
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={
          <GetOTP></GetOTP>
        }></Route>

        <Route path='/Login' element={
          <Login></Login>
        }></Route>
      
      </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </div>
  )
}

export default App
