import { BsHouse, BsPerson, BsChatSquare, BsCamera } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from 'react-router-dom'
import logo from '../static/logo.svg'

const Nav = () => {
    return(
        <nav style={styles.nav} className='nav'>
            {/* <img src={logo} style={styles.navLogo} alt='Thistle Photography Logo'/> */}
            <h2 style={styles.navTitle}>Thistle Photography</h2>
                <div style={styles.icons}>
                    <Link to="/home"><BsHouse style={styles.icon}/></Link> 
                    <Link to="/about"><BsPerson style={styles.icon}/></Link> 
                    <Link to="/contact"><BsChatSquare style={styles.icon}/></Link>
                    <Link to="/gear"><BsCamera style={styles.icon}/></Link>
                    <Link to="/social"><IoLogoInstagram style={styles.icon}/></Link>
                </div>
                <p style={styles.navCopyright}>&copy; 2023 Thistle Photography.<br></br> All Rights Reserved</p>
        </nav>
    )
}

export default Nav

const styles = {
    nav: {
        width: '6rem',
        // borderRight: '1px solid rgba(230, 230, 230, 1)',
        padding: '0 20px 0 6rem',
        display: 'flex',
        float: 'left',
        height: '100%',
        position: 'fixed',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        zIndex: '100',
        background: 'white'
    },
    navLogo: {
        position: 'absolute',
        top: '20px',
        color: 'rgba(41, 41, 41, 1)',
        letterSpacing: '-0.045em',
        textAlign: 'right',
        width: '100px'
    },
    navTitle: {
        position: 'absolute',
        top: '0px',
        color: '#333',
        letterSpacing: '-0.045em',
        textAlign: 'right',
        fontSize: '24px'
    },
    icons:{
        display: 'flex',
        flexDirection: 'column'
    },
    icon:{
        color: 'rgba(117, 117, 117, 1)',
        cursor: 'pointer',
        fontSize: '1.2rem',
        paddingBottom: '2rem'
    },
    navCopyright:{
        position: 'absolute',
        bottom: '1rem',
        color: 'rgba(117, 117, 117, 1)',
        fontSize: '8px',
        textAlign: 'end'
    }
}