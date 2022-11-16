import React from 'react';

const ContactForm = (props) => {
  
  return (
    <form  onSubmit={props.handleSubmit} style={styles.form}>
      <h2>Create Contact</h2>
      <input
        className='m-2'
        type="text"
        value={props.valueName}
        name="contact_name"
        placeholder="Contact Name"
        onChange={props.onChange}
        style={styles.input}
      />
      <input
        className='m-2'
        type="text"
        value={props.valueDetail}
        name="contact_detail"
        placeholder="Contact Link (www.link.com)"
        onChange={props.onChange}
        style={styles.input}
      />
      <button type="submit" style={styles.Button}>Create Contact</button>
    </form>
  )
};

export default ContactForm;

const styles = {
    Button: {
      background: '#FF5454',
      margin: '1rem 0 0 0',
      padding: '10px',
      border: 'none',
      cursor: 'pointer',
      color: 'white'
    },
    form:{
      margin: '16rem auto',
      background: 'white',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      alignItems: 'center',
      borderRadius: '6px'
    },
    input: {
      marginBottom: '1rem',
      padding: '8px'
    }
}