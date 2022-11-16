import Nav from "../components/Nav";

const Contact = ( ) => {
    return (
        <div style={styles.container}>
            <Nav />
            <div style={styles.main}>
                <div style={styles.content}>
                    <h2>contact</h2>
                 </div>
            </div>
        </div>
      );
}

export default Contact;

const styles = {
    img:{
      width: '400px',
      height: '600px',
      objectFit: 'cover'
    },
    container: {
      display: 'flex'
  },
  main: {
      width: '100%',
      textAlign: 'center',
      marginLeft: '14rem',
  },
  content: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '2rem',
      marginBottom: '2rem',
      marginRight: '1rem'
  },
  title: {
      textAlign: 'initial',
      borderBottom: '1px solid #edeced',
      fontSize: '1.6rem',
      paddingBottom: '2rem',
      marginBottom: '2rem',
  },
  btnReset:{
      backgroundColor: 'transparent',
      borderWidth: '0',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontStyle: 'inherit',
      fontWeight: 'inherit',
      lineHeight: 'inherit',
      padding: '0'
  },
  icon:{
      position: 'absolute',
      top: '0',
      right: '0',
      color: '#ff5150',
      fontSize: '1.2rem',
      cursor: 'pointer',
      backgroundColor: 'white',
      borderBottomLeftRadius: '14px',
      padding: '10px',
  }
}