import { BsPower, BsHouse } from "react-icons/bs";
import { Link } from 'react-router-dom'

const AdminNavDash = (prop) => {
    return(
        <nav style={styles.nav}>
                <div style={styles.icons}>
                    <div style={styles.iconDiv}>
                        <Link to="/admin"><BsHouse style={styles.icon}/></Link> 
                        <button onClick={prop.handleLogout} style={styles.btnReset}><BsPower style={styles.icon}/></button>
                    </div>
                </div>
                <p style={styles.navCopyright}>&copy; 2023 Thistle Photography.<br></br> All Rights Reserved</p>
        </nav>
    )
}

export default AdminNavDash

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
    iconDiv: {
        display: 'flex',
        flexDirection: 'column',
    },
    icons:{
        display: 'flex',
        flexDirection: 'column'
    },
    icon:{
        color: '#757575',
        cursor: 'pointer',
        fontSize: '1.4rem',
        paddingBottom: '2rem'
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
    navCopyright:{
        position: 'absolute',
        bottom: '1rem',
        color: '#757575',
        fontSize: '8px',
        textAlign: 'end'
    }
}