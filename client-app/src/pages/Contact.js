import axios from 'axios';
import React from 'react';
import Nav from "../components/Nav";
import loadingLogo from'../static/rolling.svg';

const Contact = ( ) => {
    const [item, setItems] = React.useState('')
  
  React.useEffect(() => {
    const getData = async () => {
      try{
      const res = await axios('/api/all-contacts')
        setItems(res.data)

      } catch(err){
        console.log(err)
      }
    }
  getData();
  }, [])

  return (
    <div style={styles.container}>
        <Nav />
        <div style={styles.main}>
        <p style={styles.title}>CONTACTS</p>
          <div style={styles.cards}  className="animate__animated animate__fadeInRight">
            {item && item.length > 0 ? (
                    item.map((contact) => {
                        return (
                            <div key={contact._id} style={styles.contactBox}>
                              <p>{contact.contact_name}</p>
                              <a target="_blank" rel="noreferrer" href={contact.contact_detail}>Check it out!</a>
                              {/* <BsFillHeartFill style={styles.icon}/> */}
                            </div>
                        )
                    })
            ) : (
              <img src={loadingLogo} alt='loader' style={styles.loader}/>
                )
            }
             </div>
        </div>
        </div>
  );
}

export default Contact;

const styles = {
  main: {
      marginLeft: '13.25rem',
      padding: '20px',
      width: 'inherit'
  },
  title: {
      textAlign: 'initial',
      fontSize: '80px',
      marginBottom: '2rem',
      marginTop: '0',
      marginLeft: '3rem',
      color: '#333',
      fontWeight: 'bold',
      letterSpacing: '-0.045em'
},
  cards: {
      maxWidth: '1200px',
      width: 'fit-content',
      margin: '0 4rem auto',
      display: 'grid',
      gap: '5px',
  },
  contactBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'auto',
      width: '200px',
      height: '200px',
      maxWidth: '400px',
      borderRadius: 'max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px',
      boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px'
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
    },
}