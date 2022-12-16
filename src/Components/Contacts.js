import React, { useState } from 'react'
import styles from '../Css/contact.module.css'
function Contacts() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <section id='contact' className={styles.contact}>
      <img src='wave.svg' alt='wave' />
      <h2>Contacts</h2>
      <p>Have a question or want to work together?</p>
      <form
        action='mailto:okoyechibuike048@gmail.com'
        method='POST'
        enctype='multipart/form-data'
        className={styles.form}>
        <input
          type='name'
          name={name}
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          name={email}
          value={email}
          placeholder='Enter email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          value={message}
          placeholder='your message'
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Contacts
