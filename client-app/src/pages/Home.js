import axios from 'axios';
import React from 'react';
import Nav from '../components/Nav';
import loadingLogo from'../static/rolling.svg';
import { LazyLoadImage } from "react-lazy-load-image-component";
import MobileNav from '../components/MobileNav';

const Home = () => {
  const [item, setItems] = React.useState('')
  
  React.useEffect(() => {
    const getData = async () => {
      try{
      const res = await axios('/api/all')
        setItems(res.data.Images)

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
        <div style={styles.main} className='main'>
              <div style={styles.cards} className='cards'>
            {item && item.length > 0 ? (
                    item.map((image) => {
                        return (
                            <div key={image._id} style={styles.imageBox}>
                              <LazyLoadImage src={image.image}
                                width={'100%'} 
                                height={'100%'}
                                alt="Portfolio Image by Matt Thistle"
                                style={styles.bioImage}
                              />
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

export default Home;

const styles = {
container: {

},
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
cards: {
    maxWidth: '1200px',
    width: 'fit-content',
    margin: '0 auto',
    display: 'grid',
    gap: '5px',
},
bioImage:{
  borderRadius: 'max(0px, min(10px, calc((100vw - 4px - 100%) * 9999))) / 10px'
}
}


