import React from 'react';

const BioForm = (props) => {
  
  return (
    <form style={styles.form} onSubmit={props.handleSubmit}>
      <h2>Create bio</h2>
      <input 
        type="file" 
        style={styles.imgInput} 
        name="image"
        onChange={props.handlePhoto}
      />
      <input
        type="text"
        value={props.valueDetail}
        name="bio_detail"
        placeholder="Bio Detail"
        onChange={props.onChange}
        style={styles.inputText}
      />
      <button type="submit" style={styles.Button} >Create Bio</button>
    </form>
  )
};

export default BioForm;

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
    inputText: {
      marginBottom: '1rem',
      
      padding: '8px'
    }
}