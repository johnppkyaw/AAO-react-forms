import { useState, useEffect } from 'react';

const ContactUs = () => {
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');

  // useEffect(()=>{
  //   console.log(email);
  // },[email])

  const onSubmit = (e) => {
    e.preventDefault();

    const contactInfo = {
      name,
      phone,
      email,
      submittedOn: new Date()
    }

    console.log(contactInfo);

    setName('');
    setPhone('');
    setEmail('');
  }


  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input id='phone' type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
