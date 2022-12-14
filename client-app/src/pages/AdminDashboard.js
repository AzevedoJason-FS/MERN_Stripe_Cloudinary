import { React } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { BsImageFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import AdminNavDash from "../components/AdminNavDash";

const AdminDashboard = () => {
    let navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault()
        try{
            await axios.get('/api/signout')
            localStorage.removeItem('jwt')
            return navigate("/home");
        } catch (err) {
            console.log(err.response.data)
        }
    }
    
    return(
        <div style={styles.container}>
        <AdminNavDash
            handleLogout={handleLogout}
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
                <Link to="/admin/bio-management" style={styles.link}>
                    <div style={styles.box}>
                        <div style={styles.detailBox}>
                            <FaUserEdit style={styles.icon}/>
                            <p style={styles.boxTitle}>Manage Bio</p>
                        </div>
                    </div>
                </Link>
                <Link to="/admin/contact-management" style={styles.link}>
                    <div style={styles.box}>
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
        backgroundColor: 'white',
        letterSpacing: '-0.045em',
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
    detailBox:{
        display: 'flex',
        alignItems: 'center'
    },
    boxTitle:{
        fontSize: '16px',
        fontWeight: '500'
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