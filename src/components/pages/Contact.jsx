import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
export default function Contact () {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [serverMessage, setServerMessage] = useState({})

  const submitForm = e => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_SERVER_URL}/messages`, {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
      .then(response => response.json())
      .then(data => {
        setServerMessage(data)
        setForm({name: '',
        email: '',
        message: ''})
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }
  return (
    <>  
      <motion.div className='forms' initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', delay: 0, duration: 1 }}>
        <div className='hello'>
        <h1><strong>Say hello!</strong></h1>
        </div>
      <motion.div initial={{ x: '100vw'}} animate={{ x:20 }} transition={{ type: 'spring', delay: 0, duration: 0.8}} className='form-container'>
      <form onSubmit={submitForm}>
        <label htmlFor='name'></label>
        <input
          type='text'
          id='name'
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder='name'
          required
        />
        <label htmlFor='email'></label>
        <input
          type='email'
          id='email'
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          placeholder='email'
          required
        />
        <label htmlFor='message'></label>
        <textarea
          id='message'
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          placeholder='message'
        />
        <button type='submit'>Send</button>
      </form>
      <p>
        {JSON.stringify(serverMessage) ? serverMessage.msg : null}
      </p>
      </motion.div>
      </motion.div>
      <div className='circle50'></div>
        <div className='circle60'></div>
    </>
  )
}
