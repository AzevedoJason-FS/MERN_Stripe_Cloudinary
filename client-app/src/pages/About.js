import axios from 'axios';
import React from 'react';
import Nav from "../components/Nav";
import loadingLogo from'../static/rolling.svg';
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = ( ) => {
    const [item, setItems] = React.useState('')

React.useEffect(() => {
    const getData = async () => {
        try{
            const res = await axios('/api/all-bio')
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
                {/* <p style={styles.title}>DATABASE ITEMS</p> */}
            {item && item.length > 0 ? (
                    item.map((bio) => {
                        return (
                            <div key={bio._id} style={styles.mainBox}>
                                <div style={styles.bioBox}>
                              <LazyLoadImage src={bio.bio_image}
                                width={'100%'} 
                                alt="Portfolio Image by Matt Thistle"
                                style={styles.bioImage}
                                // PlaceholderSrc={PlaceholderImage}
                              />
                              <div style={styles.rightBox}>
                              <h2 style={styles.rightBoxTitle}>I'm Matt Thistle,</h2>
                              <p style={styles.bioDetail}>{bio.bio_detail}</p>
                              </div>
                              </div>
                            </div>
                        )
                    })
            ) : (
              <img src={loadingLogo} alt='loader' style={styles.loader}/>
                )
            }
        </div>
        </div>
      );
}

export default About;

const styles = {
main: {
    marginLeft: '13.25rem',
    padding: '20px',
    width: 'inherit',
    position: 'relative',
    overflow: 'hidden',
    height: '90vh'
},
title: {
      textAlign: 'initial',
      borderBottom: '1px solid #edeced',
      fontSize: '1.6rem',
      paddingBottom: '2rem',
      marginBottom: '2rem',
  },
bioBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 'auto',
    maxWidth: '1200px'
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
  mainBox: {
    display: 'flex',
    margin: '4rem auto'
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem'
  },
  rightBoxTitle: {
    fontSize: '72px',
    letterSpacing: '-0.045em',
    margin: '0',
    color: '#333'
  },
  bioDetail: {
    marginTop: '2rem',
    maxWidth: '500px',
    color: 'rgba(117, 117, 117, 1)',
  },
  bioImage:{
    borderRadius: '73% 30% 80% 24% / 83% 58% 42% 17%',
    maxWidth: '350px'
  }
}