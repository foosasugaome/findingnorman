import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import './App.css'
import Main from './components/pages/Main'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'

export default function App () {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Main />} />                                    
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

