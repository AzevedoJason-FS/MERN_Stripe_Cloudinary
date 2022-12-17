import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return(
            <div style={styles.main}>
                {/* <h2 style={styles.navTitle}>THISTLE PHOTOGRAPHY</h2> */}
                <div style={styles.box}>
                    <div style={styles.imageBox} className="imageBox">
                        <LazyLoadImage src="https://res.cloudinary.com/dlc61c1om/image/upload/v1671319002/images/banner_ejkmp7.jpg"
                                width={'100%'} 
                                height={'100%'}
                                alt="Portfolio Image by Matt Thistle"
                                style={styles.image}
                        />
                    </div>
                        <div style={styles.rightbox}>
                            <Link to="/home" style={styles.link}>HOME</Link> 
                            <Link to="/about" style={styles.link}>ABOUT</Link> 
                            <Link to="/contact" style={styles.link}>CONTACT</Link>
                            <Link to="/gear" style={styles.link}>GEAR</Link>
                            <Link to="/social" style={styles.link}>SOCIAL</Link>
                        </div>
                </div>       
            </div>
    )
}

export default LandingPage;

const styles = {
    main: {
        background: 'white',
        height: 'inherit',
        position: 'relative'
    },
    box:{
        display: 'flex',
        height: '100%',
        maxWidth: '1200px',
        padding: '0',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBox:{
        width:'455px',
        height: '655px',
    },
    image:{
        borderRadius: '10px',
    },
    rightbox:{
        display: 'flex',
        flexDirection: 'column',
        marginLeft:'2rem'
    },
    navTitle: {
        color: 'white',
        margin: '0',
        letterSpacing: '0.045em',
        textAlign: 'left',
        fontSize: '42px',
        position: 'absolute',
        top: '2rem'
    },
    link:{
        textDecoration: 'none',
        color: '#333',
        fontWeight: '700',
        fontSize: '92px',
        padding: '10px'
    }
} 