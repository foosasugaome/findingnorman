import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import './App.css'
import Header from './components/layouts/Header'
import Projects from './components/pages/Projects'
import Socials from './components/pages/Socials'
import Resume from './components/pages/Resume'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'

export default function App () {
  const [ selectedComponent, setSelectedComponent ] = useState('0')
  return (
    <>
      <BrowserRouter>
      <Header selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent}/>
        <Layout>          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/socials' element={<Socials />} />
            <Route path='/resume' element={<Resume />} />
            
          </Routes>          
        </Layout>
      </BrowserRouter>
    </>
  )
}

