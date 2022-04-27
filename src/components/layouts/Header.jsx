import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Header () {
  return (
    <>
      <motion.header
        initial={{ opacity: 0.5, y: -250 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className='flex-container-header'>
          <div className='logo'></div>
          <div className='menu-items'>
            <Link to='/'>about</Link> 
            <Link to='/projects'>projects</Link>
            {/* <Link to='/socials'>socials</Link>  */}
            <Link to='/contact'>contact</Link>
            {/* <a href='mailto:normanteodoro@hotmail.com'>contact</a> */}
            <a href='Norman_Teodoro.pdf' target='_blank' rel='noreferrer' >résumé</a>
            {/* <Link to='/resume'>résumé</Link> */}            
          </div>
        </div>
        {/* <div className="max-width"></div> */}
      </motion.header>
    </>
  )
}
