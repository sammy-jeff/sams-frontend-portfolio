import React, { useMemo, useRef, useState } from 'react'
import emailSetup from '../../emailKey'
import { sendForm } from '@emailjs/browser'
import styles from '../../Css/contact.module.css'
import { useAnimation, motion } from 'framer-motion'
import useAnimateComponent from '../../customs/useAnimateComponent'
const formVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
    ease: 'easeIn',
  },
  visible: {
    opacity: 1,
    scale: 1,
    ease: 'easeOut',
    transition: { duration: 1.5 },
  },
}
function ContactForm() {
  const [loading, setLoading] = useState(false)
  const formRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const target = useRef()
  const control = useAnimation()
  const controlMemo = useMemo(() => control, [control])
  useAnimateComponent(target, controlMemo)
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
      emailSetup.serviceId,
      emailSetup.templateId,
      formRef.current,
      'O9rBTGukJBAqfX8vY'
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
    <motion.div
      ref={target}
      variants={formVariant}
      initial='hidden'
      animate={control}>
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
    </motion.div>
  )
}

export default ContactForm
