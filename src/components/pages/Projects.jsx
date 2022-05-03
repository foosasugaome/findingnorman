import { motion } from "framer-motion"
import { useState, useEffect } from "react"
export default function Projects () {
  const [githubData, setGithubData] = useState([])
  const [githubDataRepo, setGithubDataRepo] = useState([])

  const fetchData = () => {
    return fetch(`https://api.github.com/users/foosasugaome`)
      .then(response => response.json())
      .then(data => setGithubData(data))
  }
  const fetchDataRepo = () => {
    return fetch(`https://api.github.com/users/foosasugaome/starred?sort:updated`)
      .then(response => response.json())
      .then(data => setGithubDataRepo(data))
  }

  useEffect(() => {
    fetchDataRepo()      
    fetchData()
  }, [])
  const listRepos = githubDataRepo.map((e, idx) => {    
      return (
        <>        
        <li key={`repo-key${idx}`}>
          <p>
        <a href={e.homepage} target='_blank' rel='noreferrer'> {e.description} </a> ( <a href={e.html_url} target='_blank' rel='noreferrer'><small>View in Github</small></a> )
        </p>
        </li>
        </>
      )
  })      
  return (
    <>
      <motion.div initial={{ x: '100vw'}} animate={{ x:20 }} transition={{ type: 'spring', delay: 0, duration: 0.8}} className='flex-container-project'>        
        {/* start of github card */}
        <a href={githubData.html_url} target='_blank' rel='noreferrer'>
        <div className='github-card center'>
          <div className='card-cover center'>
            <div className='social-logo'>
              <img src='github-logo.png' alt='github' />
            </div>
            <div className='avatar'>              
                <img src={githubData.avatar_url} alt='Avatar' />
            </div>
          </div>
          <div className='info-text center'>
            <p className='name'>{githubData.name}</p>
            <p>
              @{githubData.login}
            </p>
            <p>
              <small>{githubData.location}</small>
            </p>
          </div>

          <div className='card-text-container'>
            <div className='center'>
              <p className='subtext'>Repositories</p>
              <p className='score'>{githubData.public_repos}</p>
            </div>
            <div className='center'>
              <p className='subtext'>Followers</p>
              <p>{githubData.followers}</p>
            </div>
            <div className='center'>
              <p className='subtext'>Following</p>
              <p className='score'>{githubData.following}</p>
            </div>
          </div>        
        </div>
        </a>
        {/* end of github card */}

        <div className="card-project">
        <h2>Projects</h2>
        <p><small>Almost all my projects are in Github. You can view them below.</small></p>
        <br />
        <ul>
          {listRepos}
        </ul>
        </div>
      </motion.div>
      <div className='circle50'></div>
        <div className='circle60'></div>
    </>
  )
}
