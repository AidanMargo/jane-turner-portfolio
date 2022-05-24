import { useState } from "react"
import '../styles/contactStyle.css'
function Contact() {

  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault()
    console.log(contactData)
  }

  return(
    <div className='form'>
      <form onSubmit= {(e) => submitForm(e)} className='contact-form'>
        <label htmlFor="name">Name *</label>
        <div className="name-fields" name="name">
          <input onChange={(e) => handleChange(e)} placeholder="First" value={contactData.firstName} name ="firstName" required/>
          <input onChange={(e) => handleChange(e)} placeholder="Last" value={contactData.lastName} name="lastName" required/>
        </div>
        <label htmlFor="email">Email Address *</label>
        <input onChange={(e) => handleChange(e)} placeholder="JohnDoe@email.com" value={contactData.email} name="email"/>
        <label htmlFor="message">Message *</label>
        <textarea onChange={(e) => handleChange(e)} value={contactData.message} name="message"/>
      </form>
    </div>
  )
}

export default Contact