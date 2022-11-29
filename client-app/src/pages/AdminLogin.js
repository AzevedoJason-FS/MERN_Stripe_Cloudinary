import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import LoginForm from "../components/forms/LoginForm";
import Nav from "../components/Nav"
const AdminLogin = () => {

    const initialState = {
        email: '',
        passowrd: ''
    }

    const [data, setData] = useState(initialState)
    const { email, password } = data

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
        <Nav/>
        <div style={styles.content}>
            <LoginForm
                onSubmit={login}
                Title={"Admin login"}
                onChange={handleChange}
            />
        </div>
        </>
    )
}

export default AdminLogin;

const styles = {
    content:{
        height: '100vh',
        alignItems: 'center',
        marginLeft: '14rem',
        display: 'flex',
        justifyContent: 'center'
    }
}