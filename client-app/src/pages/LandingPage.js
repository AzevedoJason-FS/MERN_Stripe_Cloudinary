import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return(
            <div style={styles.main}>
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
                            <Link to="/home" style={styles.link} className="link">HOME</Link> 
                            <Link to="/about" style={styles.link} className="link">ABOUT</Link> 
                            <Link to="/contact" style={styles.link} className="link">CONTACT</Link>
                            <Link to="/gear" style={styles.link} className="link">GEAR</Link>
                            <div style={styles.social}>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/thistlephotography98/" style={styles.socialLinkFace}><BsFacebook /></a>
                                <Link to="/social" style={styles.socialLinkInst}><BsInstagram /></Link>
                            </div>
                        </div>
                </div>       
            </div>
    )
}

export default LandingPage;

const styles = {
    main: {
        backgroundColor: 'rgb(30 30 30)',
        height: 'inherit',
        position: 'relative',
        overflow: 'hidden',
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
    image:{
        objectFit: 'cover',
    },
    rightbox:{
        display: 'flex',
        flexDirection: 'column',
        marginLeft:'-4rem'
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
        color: 'white',
        fontWeight: '700',
        fontSize: '84px',
        padding: '10px',
        position: 'relative'
    },
    social:{
        display: 'flex',
        flexDirection:'row',
        padding: '10px',
    },
    socialLinkFace:{
        fontSize:'62px',
        color: 'white',
        paddingRight:'20px',
        display: 'flex',
        alignItems: 'center'
    },
    socialLinkInst:{
        fontSize:'62px',
        color: 'white',
        paddingLeft: '20px',
        display: 'flex',
        alignItems: 'center'
    }
} 