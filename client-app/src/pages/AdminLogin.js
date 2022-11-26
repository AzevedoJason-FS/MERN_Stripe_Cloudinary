import { useState } from "react";
import { MdVisibility } from "react-icons/md";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const AdminLogin = () => {

    const initialState = {
        email: '',
        passowrd: ''
    }

    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(initialState)
    const { email, password } = data

    const handleClick = () => {
        setVisible(!visible);
    }

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const login = async (e) => {
        e.preventDefault();
         //check fields
         if( !email || !password || (!email && !password)) {
            return toast.warn("Please fill in all fields", {className: 'toast-failed', bodyClassName: 'toast-failed', theme: "colored",})
        }
        try{
            await axios.post('/api/auth/signin',{ email, password })
            localStorage.setItem('jwt', true)
            window.location.reload();
        }catch(err) {
            toast.error(err.response.data.message, {className: 'toast-failed', bodyClassName: 'toast-failed', theme: "colored",})
        }
    }

    return(
        <>
        <ToastContainer />
        <form style={styles.form} onSubmit={login}>
            <h2 style={styles.formTitle}>Thistle Photography <br></br>Admin Login</h2>
            <div style={styles.inputBox}>
                    <input type='text' style={styles.inputField} placeholder="Email" autoComplete='off' name="email" onChange={handleChange}/>
                    <div style={styles.visible}>
                        <MdVisibility onClick={handleClick} style={styles.icon}/>
                        <input type={visible ? 'text' : 'password'} style={styles.inputFieldPass} placeholder="Password" autoComplete='off' name="password" onChange={handleChange}/>
                    </div>
            </div>
            <div style={styles.login_btn}>
                <button style={styles.btn} type='submit'>login</button>
            </div>
        </form>
        </>
    )
}

export default AdminLogin;

const styles = {
    form:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '120px',
        background: 'white',
        borderRadius: '15px'
    },
    formTitle:{
        fontSize: '40px',
        textTransform: 'uppercase',
        marginTop: 0
    },
    inputBox:{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '2rem',
    },
    inputField:{
        padding:'10px',
        fontSize: '24px',
        width: '200px',
        fontFamily: 'League Gothic, sans-serif',
        letterSpacing: '1px',
        marginBottom: '2rem',
        fontWeight: '400'
    },
    inputFieldPass:{
        padding:'10px',
        fontSize: '24px',
        width: '200px',
        fontFamily: 'League Gothic, sans-serif',
        letterSpacing: '1px',
        fontWeight: '400'
    },
    visible:{
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    icon:{
        position: 'absolute',
        paddingRight: '10px'
    },
    btn:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#025de4',
        border: 0,
        padding: '12px',
        fontSize: '20px',
        fontFamily: 'League Gothic, sans-serif',
        color: 'white',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        width: '80px',
        marginRight: '10px',
        borderRadius: '4px'
    },
    btnIcon:{
        fontSize:'22px'
    },
    login_btn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
}