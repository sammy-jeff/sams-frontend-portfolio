import { sendForm } from '@emailjs/browser'
import React, { useRef, useState } from 'react'
import styles from '../Css/contact.module.css'
import emailSetup from '../emailKey'

function Contacts() {
  const [loading, setLoading] = useState(false)
  const formRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !messageRef.current.value
    )
      return
    setLoading(true)
    sendForm(
      emailSetup.SERVICE_ID,
      emailSetup.TEMPLATE_ID,
      formRef.current,
      '2t8PbpSN2tiEiqO4t'
    ).then(
      (res) => {
        setLoading(false)
        alert(`Message Sent`)
        nameRef.current.value = ''
        emailRef.current.value = ''
        messageRef.current.value = ''
      },
      (err) => {
        setLoading(false)
        alert('Error')
        nameRef.current.value = ''
        emailRef.current.value = ''
        messageRef.current.value = ''
      }
    )
  }
  return (
    <section id='contact' className={styles.contact}>
      <img src='wave.svg' alt='wave' />
      <h2>Contacts</h2>
      <p>Have a question or want to work together?</p>
      <form
        className={styles.form}
        ref={formRef}
        onSubmit={(e) => handleSubmit(e)}>
        <input
          ref={nameRef}
          type='name'
          name='user_name'
          placeholder='Name'
          required
        />
        <input
          ref={emailRef}
          type='email'
          name='user_email'
          placeholder='Enter email'
          required
        />
        <textarea
          ref={messageRef}
          placeholder='your message'
          name='message'
          required
        />
        <button type='submit' disabled={loading ? true : false}>
          {loading ? `Submitting...` : `Submit`}
        </button>
      </form>
    </section>
  )
}

export default Contacts
