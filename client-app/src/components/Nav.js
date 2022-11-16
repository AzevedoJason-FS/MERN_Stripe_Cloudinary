import { BsHouse, BsPerson, BsChatSquare, BsCart2 } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return(
        <nav style={styles.nav}>
                <div style={styles.icons}>
                    <Link to="/"><BsHouse style={styles.icon}/></Link> 
                    <Link to="/about"><BsPerson style={styles.icon}/></Link> 
                    <Link to="/contact"><BsChatSquare style={styles.icon}/></Link>
                    <Link to="/store"><BsCart2 style={styles.icon}/></Link>
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
        borderRight: '1px solid #edeced',
        padding: '0 20px 0 6rem',
        display: 'flex',
        height: '100vh',
        position: 'fixed',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        zIndex: '100',
        background: 'white'
    },
    icons:{
        display: 'flex',
        flexDirection: 'column'
    },
    icon:{
        color: '#757575',
        cursor: 'pointer',
        fontSize: '1.3rem',
        paddingBottom: '2rem'
    },
    navCopyright:{
        position: 'absolute',
        bottom: '1rem',
        color: '#757575',
        fontSize: '10px',
        textAlign: 'end'
    }
}