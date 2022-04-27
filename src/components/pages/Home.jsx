import {  motion } from 'framer-motion'
export default function Home () {
  return (
    <>
  
        <motion.div className='home' animate={{ opacity: [0, 1] }}>
          <p className='aboutme'>
            Hello, my name is Norman Teodoro. I am based in British Columbia,
            Canada. I have been in the IT industry for quite a while. Recently,
            I have been teaching myself to build websites. This is my website
            and it's built using React. It's probably one of my favorite
            languages to build apps. Reach out to me if you want to collaborate.{' '}
          </p>
          <p className='aboutme'>Here are some of the stuff I know :</p>
        </motion.div>
        <motion.div className='flex-container-icons' initial={{ x: '-100vw', opacity:0 }} animate={{ x: 0, opacity:1 }} transition={{ delay:0.5, duration: 0.8 }}>
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg'
              alt='Javascript'
            />
          </a>
          <a
            href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg'
              alt='HTML5'
            />
          </a>
          <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg'
              alt='React'
            />
          </a>
          <a href='https://nodejs.org/en/' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg'
              alt='NodeJS'
            />
          </a>
          <a href='https://www.python.org/' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg'
              alt='Python'
            />
          </a>
          <a href='https://nextjs.org/docs' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg'
              alt='NextJs'
            />
          </a>
          <a
            href='https://www.w3.org/TR/CSS/#css'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg'
              alt='CSS3'
            />
          </a>
          <a href='https://getbootstrap.com/' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg'
              alt='Bootstrap'
            />
          </a>
          <a href='https://expressjs.com/' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg'
              alt='Express'
            />
          </a>
          <a href='https://www.mongodb.com/' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg'
              alt='MongoDB'
            />
          </a>
          <a
            href='https://www.postgresql.org/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg'
              alt='PostgreSQL'
            />
          </a>
          <a href='https://www.heroku.com/' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg'
              alt='Heroku'
            />
          </a>
          <a
            href='https://dotnet.microsoft.com/en-us/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg'
              alt='.NET'
            />
          </a>
          <a
            href='https://www.djangoproject.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg'
              alt='Django'
            />
          </a>
        </motion.div>
        <motion.div className='bigpicture' animate={{ opacity: [0, 0.25, 0.5, 0.75, 1] }}>
          <img src='normanbwstanding2.png' alt='norman' />
        </motion.div>
    </>
  )
}
