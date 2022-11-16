import { React } from "react";
import { Link } from 'react-router-dom'
import { BsImageFill, BsCartFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import AdminNavDash from "../components/AdminNavDash";

const AdminDashboard = () =>{
    
    return(
        <div style={styles.container}>
        <AdminNavDash
            // handleLogout={handleLogout}
            // inputFile={inputFile}
            // imageUpload={imageUpload}
        />
        <div style={styles.main}>
            <h2 style={styles.title}>Admin Dashboard</h2>
            <div style={styles.content}>
                <Link to="/admin/image-management" style={styles.link}>
                    <div style={styles.box}>
                        <div style={styles.detailBox}>
                            <BsImageFill style={styles.icon}/>
                            <p style={styles.boxTitle}>Manage Images</p>
                        </div>
                    </div>
                </Link>
                <Link to="/admin/store-management" style={styles.link}>
                    <div style={styles.box}>
                        <div style={styles.detailBox}>
                            <BsCartFill style={styles.icon}/>
                            <p style={styles.boxTitle}>Manage Store</p>
                        </div>
                    </div>
                </Link>
                <Link to="/admin/bio-management" style={styles.link}>
                    <div style={styles.box}>
                        <div style={styles.detailBox}>
                            <FaUserEdit style={styles.icon}/>
                            <p style={styles.boxTitle}>Manage Bio</p>
                        </div>
                    </div>
                </Link>
                <Link to="/admin/contact-management" style={styles.linkLong}>
                    <div style={styles.boxLong}>
                        <div style={styles.detailBox}>
                            <BsFillTelephoneFill style={styles.icon}/>
                            <p style={styles.boxTitle}>Manage Contacts</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default AdminDashboard

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        backgroundColor: 'rgb(246 246 246 / 70%)'
    },
    main: {
        width: '100%',
        textAlign: 'center',
        marginLeft: '13rem',
    },
    content: {
        margin: 'auto',
        width: '70%',
        justifyContent: 'space-evenly',
        marginTop: '2rem',
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
    },
    title: {
        textAlign: 'initial',
        fontSize: '2rem',
        margin: '0',
        padding: '2rem',
        borderBottom: '1px solid #edeced',
        backgroundColor: 'white'
    },
    box:{
        padding: '4rem',
        maxWidth: '300px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        borderRadius: '8px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxLong:{
        padding: '3rem',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        borderRadius: '8px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkLong: {
        color: 'black',
        textDecoration: 'none',
        gridColumn: '1 / -1',
    },
    detailBox:{
        display: 'flex',
        alignItems: 'center'
    },
    boxTitle:{
        fontSize: '1.2rem'
    },
    icon:{
        color: '#757575',
        fontSize: '2.4rem',
        marginRight: '1rem'
    },
    link:{
        color: 'black',
        textDecoration: 'none'
    }
}