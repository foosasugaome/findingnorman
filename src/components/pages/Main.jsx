import '@rocktimsaikia/github-card'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import Socials from './Socials'

export default function Main () {    
    
  return (
    <>
    <Home />
      <div className='expandable' id='about'>
        {' '}
        This is the about me page{' '}
      </div>
        <Projects />      
        <Socials />
        <Resume />
    </>
  )
}
