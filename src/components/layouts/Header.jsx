import { Link } from "react-router-dom"
import { motion } from "framer-motion"
export default function Header() {
    return (
        <>   
        <motion.header initial={{ opacity:0.5, y: -250 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
        <div className="flex-container-header">
            <div className="logo"></div>          
            <div className="menu-items">
                <Link to='/'>home</Link>    <Link to='/projects'>projects</Link>  <Link to='/socials'>socials</Link>  <Link to='/resume'>résumé</Link>
                {/* <a href='/#about'>about</a> */}
            </div>
        </div>
        {/* <div className="max-width"></div> */}
        </motion.header>     
        </>
    )
}