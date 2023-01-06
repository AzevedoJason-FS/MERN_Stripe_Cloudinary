import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom'
import 'animate.css';

const LandingPage = () => {
    return(
            <div style={styles.main}>
                <div style={styles.box}>
                    <div style={styles.imageBox} className="animate__animated animate__fadeIn">
                        <LazyLoadImage src="https://res.cloudinary.com/dlc61c1om/image/upload/v1671425168/images/275496029_1074361166480228_4108135781107918881_n_mmo3pv.jpg"
                                width={'100%'} 
                                height={'100%'}
                                alt="Portfolio Image by Matt Thistle"
                                style={styles.image}
                        />
                    </div>
                        <div style={styles.rightbox} className="animate__animated animate__fadeInRight animate__delay-.5s">
                            <Link to="/home" style={styles.link} className="link">HOME</Link> 
                            <Link to="/about" style={styles.link} className="link">ABOUT</Link> 
                            <Link to="/contact" style={styles.link} className="link">CONTACT</Link>
                            <Link to="/gear" style={styles.link} className="link">GEAR</Link>
                            <div style={styles.social}>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/thistlephotography98/" style={styles.socialLinkFace}><BsFacebook /></a>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/thistlephotography98/" style={styles.socialLinkFace}><BsInstagram /></a>
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
        padding: '0',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    imageBox:{
        height:'100%',
        width:'70%'
    },
    image:{
        objectFit: 'cover',
    },
    rightbox:{
        display: 'flex',
        flexDirection: 'column',
        marginLeft:'-4rem',
        backgroundColor: 'white',
        padding:'30px',
        width: '100%',
        borderTopLeftRadius:'6px',
        borderBottomLeftRadius:'6px',
        height: '60%',
        justifyContent: 'center',
        boxShadow: '#222 0px 8px 30px',
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
        fontSize: '84px',
        padding: '10px',
        position: 'relative',
        width: 'fit-content',
        letterSpacing: '-1.5px'
    },
    social:{
        display: 'flex',
        flexDirection:'row',
        padding: '10px',
        marginTop: '2rem',
    },
    socialLinkFace:{
        fontSize:'32px',
        color: '#333',
        paddingRight:'20px',
        display: 'flex',
        alignItems: 'center'
    },
    socialLinkInst:{
        fontSize:'32px',
        color: '#333',
        paddingLeft: '20px',
        display: 'flex',
        alignItems: 'center'
    }
} 