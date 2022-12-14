import Nav from "../components/Nav";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gear = ( ) => {
    return (
        <div style={styles.container}>
            <Nav />
            <div style={styles.main}>
                <p style={styles.title}>GEAR</p>
                            <div style={styles.mainBox}>
                              {/* <LazyLoadImage src={bio.bio_image}
                                width={'100%'} 
                                alt="Portfolio Image by Matt Thistle"
                                style={styles.bioImage}
                                className="animate__animated animate__fadeInLeft"
                              /> */}
                            </div>
            </div>
        </div>
      );
}

export default Gear;

const styles = {
main: {
    marginLeft: '13.25rem',
    padding: '20px',
    width: 'inherit',
    position: 'relative',
    overflow: 'hidden',
    height: '90vh'
},
img:{
    width: '400px',
    height: '600px',
    objectFit: 'cover'
},
title: {
    textAlign: 'initial',
    fontSize: '80px',
    marginBottom: '2rem',
    marginLeft: '3rem',
    marginTop: '0',
    color: '#333',
    fontWeight: 'bold',
    letterSpacing: '-0.045em'
},
bioBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
mainBox: {
    display: 'flex',
    margin: '4rem 4rem auto'
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