import { useState } from 'react'
import { HashRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './app/components/header.jsx'
import Footer from './app/components/footer.jsx'
import SafetyRoutes from './app/safetyRoutes/safetyRoutes.jsx'
import Home from './app/home/home.jsx'
import GuardianMode from './app/guardiaMode/guardianMode.jsx'
import Emergency from './app/emergency/emergency.jsx'
import MentalSupport from './app/mentalSupport/mentalSupport.jsx'
import Login from './app/login/login.jsx'
import SignUp from './app/signUp/signUp.jsx'

import './App.css'

function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col w-full'>
      <Header/>
      hiii
        <main className='flex-grow w-full'>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/safetyRoutes' element = {<SafetyRoutes/>}/>
            <Route path='/guardianMode' element = {<GuardianMode/>}/>
            <Route path='/emergency' element = {<Emergency/>}/>
            <Route path='/mentalSupport' element = {<MentalSupport/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/signUp' element = {<SignUp/>}/>
          </Routes>
        </main>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
