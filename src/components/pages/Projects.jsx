import { motion } from "framer-motion"
import { useState, useEffect } from "react"
export default function Projects () {
  const [githubData, setGithubData] = useState([])

  const fetchData = () => {
    return fetch(`https://api.github.com/users/foosasugaome/starred?sort:updated`)
      .then(response => response.json())
      .then(data => setGithubData(data))
  }

  useEffect(() => {
    fetchData()      
  }, [])
  const listRepos = githubData.map((e, idx) => {    
      return (
        <>
        <p>
        <a href={e.homepage} target='_blank' rel='noreferrer'> {e.description} </a> ( <a href={e.html_url} target='_blank' rel='noreferrer'>Github</a> )
        </p>
        </>
      )
  })      
  return (
    <>
      <motion.div initial={{ x: '100vw'}} animate={{ x:0 }} transition={{ type: 'spring', delay: 0, duration: 0.8}}>
        <h2>Projects</h2>
        {listRepos}
      </motion.div>
    </>
  )
}
