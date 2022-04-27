import { motion } from "framer-motion"
export default function Resume () {
  return (
    <>
      <motion.div initial={{ x: '100vw'}} animate={{ x:0 }} transition={{ type: 'spring', delay: 0, duration: 0.8}}>
        <p><a href='https://docs.google.com/document/d/1vuCw1H6KEAeg8AzxdtXq8df65u625-mYbxSJ8BKHcqI/edit?usp=sharing' target='_blank' rel='noreferrer'>Download a copy here</a></p>
        <iframe
          src='https://docs.google.com/document/d/e/2PACX-1vQMXRLsf-xWAvjco_lPJQUcTocZ8oTFaiT_LlCffv86qTvNwSJM2BfP2G8X7F31JBQHSb7XHo4zMOtV/pub?embedded=true'
          title='Résumé'             
        />
      </motion.div>
    </>
  )
}
