import axios from 'axios';
import React from 'react';
import Nav from '../components/Nav';
import loadingLogo from'../static/rolling.svg';

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
        <div style={styles.main}>
            <div style={styles.content}>
            {item && item.length > 0 ? (
                    item.map((image) => {
                        return (
                            <div key={image._id} style={styles.imageBox}>
                              <img src={image.image} alt={image._id} style={styles.img}/>
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
  img:{
    width: '400px',
    height: '600px',
    objectFit: 'cover'
  },
  container: {
    display: 'flex',
    position: 'relative'
},
main: {
    textAlign: 'center',
    marginLeft: '14rem',
    padding: '10px',
    width: '-webkit-fill-available'
},
content: {
    display: 'grid',
    justifyContent: 'center'
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


