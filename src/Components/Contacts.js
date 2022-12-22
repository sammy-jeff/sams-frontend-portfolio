import styles from '../Css/contact.module.css'
import ContactForm from './ContactComponents/ContactForm'
import ContactHeader from './ContactComponents/ContactHeader'

function Contacts() {
  return (
    <section id='contact' className={styles.contact}>
      <img src='wave.svg' alt='wave' />
      <ContactHeader />
      <p>Have a question or want to work together?</p>
      <ContactForm />
    </section>
  )
}

export default Contacts
