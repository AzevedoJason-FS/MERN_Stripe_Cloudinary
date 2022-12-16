import axios from 'axios';
import React from 'react';
import Nav from "../components/Nav";
import MobileNav from '../components/MobileNav';
import loadingLogo from'../static/rolling.svg';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'animate.css';

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
        <MobileNav />
        <div style={styles.main} className="main">
          <p style={styles.title} className="title">ABOUT</p>
            {item && item.length > 0 ? (
                    item.map((bio) => {
                        return (
                            <div key={bio._id} style={styles.mainBox} className="mainBox">
                                <div className="bioBox">
                              <LazyLoadImage src={bio.bio_image}
                                width={'100%'} 
                                alt="Portfolio Image by Matt Thistle"
                                style={styles.bioImage}
                                id="bioImage"
                                className="animate__animated animate__fadeInLeft"
                              />
                              <div style={styles.rightBox} className="rightBox">
                              <h2 id="rightBoxTitle" className="animate__animated animate__fadeInRight animate__delay-1s">I'm Matt Thistle,</h2>
                              <p style={styles.bioDetail} className="animate__animated animate__fadeInUp animate__delay-1s">{bio.bio_detail}</p>
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
    margin: '4rem 4rem auto'
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem'
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