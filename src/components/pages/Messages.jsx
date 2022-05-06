import React from 'react'
import { useState, useEffect } from "react"

export default function Messages() {
    const [ messages, setMessages ] = useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_SERVER_URL}/messages`)
            .then(response => response.json())
            .then(data => {
              setMessages(data)
              console.log(messages)
            })
            .catch(error => {
              console.error('Error:', error)
            })
    },[])
    const listMessages = messages.map((message, index) =>{
        return(
            <>
            <p>{message.name}</p>
            <p>{message.email}</p>
            <p>{message.message}</p>
            </>
        )
    })
  return (
      <>
    <div className='forms'><h1>Messages</h1></div>
    <div className='flex-container-form'>{listMessages}</div>
      </>
  )
}
