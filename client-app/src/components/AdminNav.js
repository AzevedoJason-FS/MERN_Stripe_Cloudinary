import { BsPower, BsHouse, BsCloudUploadFill } from "react-icons/bs";
import { Link } from 'react-router-dom'

const AdminNav = (props) => {
    return(
        <nav style={styles.nav}>
                <div style={styles.icons}>
                    <div style={styles.iconDiv}>
                        <Link to="/admin"><BsHouse style={styles.icon}/></Link> 
                        <button onClick={props.handleLogout} style={styles.btnReset}><BsPower style={styles.icon}/></button>
                    </div>
                    <label>
                        <input type="file" ref={props.inputFile} style={styles.imgInput} onChange={props.imageUpload}/>
                        <BsCloudUploadFill style={styles.iconUpld}/>
                    </label>
                </div>
                <p style={styles.navCopyright}>&copy; 2023 Thistle Photography.<br></br> All Rights Reserved</p>
        </nav>
    )
}

export default AdminNav

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
        borderBottom: '1px solid #edeced'
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
    iconUpld:{
        color: '#025de4',
        cursor: 'pointer',
        fontSize: '1.4rem',
        paddingTop: '1.8rem'
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
    imgInput:{
        display: 'none'
    },
    navCopyright:{
        position: 'absolute',
        bottom: '1rem',
        color: '#757575',
        fontSize: '10px',
        textAlign: 'end'
    }
}