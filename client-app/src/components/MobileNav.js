import { Link } from 'react-router-dom';

const MobileNav = () => { 
    return(
        <nav style={styles.navContainer} className='nav-container'>
            <div id="nav-container">
                <div className="bg"></div>
                    <div className="button" tabIndex="0">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </div>
                <div id="nav-content" tabIndex="0">
                    <ul>
                        <Link to="/home" style={styles.link}>HOME</Link> 
                        <Link to="/about" style={styles.link}>ABOUT</Link> 
                        <Link to="/contact" style={styles.link}>CONTACT</Link>
                        <Link to="/store" style={styles.link}>STORE</Link>
                        <Link to="/social" style={styles.link}>SOCIAL</Link>
                    </ul>
                    <p style={styles.navCopyright}>&copy; 2023 Thistle Photography.<br></br> All Rights Reserved</p>
                </div>
            </div>
        </nav>
    )
}

export default MobileNav

const styles = {
    navContainer: {
        display: 'none'
    },
    link:{
        color: 'black',
        textDecoration: 'none',
        letterSpacing: '-0.045em',
        fontWeight: '600',
        cursor: 'pointer',
        fontSize: '1.8rem',
        paddingBottom: '2rem'
    },
    navCopyright:{
        position: 'absolute',
        bottom: '1rem',
        color: '#757575',
        fontSize: 'px',
        textAlign: 'end'
    }
}