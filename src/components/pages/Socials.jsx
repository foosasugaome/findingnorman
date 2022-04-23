import { useEffect, useState } from 'react'
// import moment from 'moment'

export default function Socials () {
  const [githubData, setGithubData] = useState([])

  const fetchData = () => {
    return fetch(`https://api.github.com/users/foosasugaome`)
      .then(response => response.json())
      .then(data => setGithubData(data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='expandable' id='socials'>        
        {/* <div
          className='badge-base LI-profile-badge'
          data-locale='en_US'
          data-size='large'
          data-theme='light'
          data-type='HORIZONTAL'
          data-vanity='normanteodoro'
          data-version='v1'
        ></div> */}

        <div className='github-card center'>
          <div className='card-cover center'>
            <div className='social-logo'>
              <img src='github-logo.png' alt='github' />
            </div>
            <div className='avatar'>
              <a href={githubData.html_url}>
                <img src={githubData.avatar_url} alt='Avatar' />
              </a>
            </div>
          </div>

          <div className='info-text center'>
            <p className='name'>{githubData.name}</p>
            <p>
              <a href={githubData.html_url}>@{githubData.login}</a>
            </p>
            <p>
              <small>{githubData.location}</small>
            </p>
          </div>

          <div className='card-text-container'>
            <div className='center'>
              <p className='subtext'>Followers</p>
              <p>{githubData.followers}</p>
            </div>
            <div className='center'>
              <p className='subtext'>Following</p>
              <p className='score'>{githubData.following}</p>
            </div>
            <div className='center'>
              <p className='subtext'>Repositories</p>
              <p className='score'>{githubData.public_repos}</p>
            </div>
          </div>
          {/* <div className='card-text-container'>
            <div className='center'>
              <p className='subtext'>Joined :</p>
              <p className='subtext'>
                {moment(githubData.created_at).format('DD MMM yyyy')}
              </p>
            </div>
            <div className='center'>
              <p className='subtext'>Last update :</p>
              <p className='subtext'>
                {moment(githubData.updated_at).format('DD MMM yyyy')}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
