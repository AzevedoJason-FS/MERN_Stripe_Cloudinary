import React from 'react';

const BioForm = (props) => {
  
  return (
    <form style={styles.form} onSubmit={props.handleSubmit}>
      <h2 style={styles.formTitle}>Create bio</h2>
      <input 
        type="file" 
        style={styles.inputImg} 
        name="image"
        onChange={props.handlePhoto}
      />
      <textarea
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
      background: '#025de4',
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
    formTitle:{
      /* top | right | bottom | left */
      margin: '0 0 2rem 0'
    },
    inputText: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '16px',
      /* top | right | bottom | left */
      margin: '2rem 0 2rem 0',
      padding: '8px',
      width: '100%',
      height: '300px',
      border: '1px solid #edeced',
      borderRadius: '6px'
    }
}