import axios from 'axios';
import { React, useState, useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { BsPower, BsHouse, BsPencilFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import BioForm from '../components/forms/BioForm';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const BioManagement = () =>{

let navigate = useNavigate();

const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const [ items, setItems ] = useState()
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [formValue, setformValue] = useState({
    image: '',
    bio_detail: ''
});

useEffect(() => {
    const loggedin = () => {
        const jwt = localStorage.getItem("jwt")
        
            if(jwt){
                setIsLoggedIn(true)
            }else{
                return navigate("/admin");
            }
}   

    const getData = async () => {
        if(isLoggedIn){
            try{
                const res = await axios('/api/all-bio')
                setItems(res.data.Bio)
            }catch(err){
                console.log(err)
            }
        }
    }
  getData();
  loggedin();
}, [isLoggedIn, navigate])

const handleChange = (e) => {
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
}

const handlePhoto = (e) => {
    setformValue({...formValue, image: e.target.files[0]});
}

const bioUpload = async (e) => {
    e.preventDefault();
    if( !formValue.image ) {
        return toast.warn("Please include an Image", {className: 'toast-failed', bodyClassName: 'toast-failed', theme: "colored",})
    }
    if( !formValue.bio_detail ) {
        return toast.warn("Please fill in Bio Details field", {className: 'toast-failed', bodyClassName: 'toast-failed', theme: "colored",})
    }
    try {
        if(isLoggedIn){
            // get file and detail
            const { bio_detail, image } = formValue;

            let formData = new FormData();
            formData.append("image", image);
            formData.append('bio_detail', bio_detail);

            await axios.post('/api/auth/access', null)
            .then(token => {
                axios.post("/api/auth/upload-bio", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: token.data.access_token,
                    },
                    onUploadProgress: (x) => {
                        if (x.total < 1024000)
                            return toast.success("Uploading..", {
                            className: "bg-upload",
                            bodyClassName: "bg-upload",
                            autoClose: 4000,
                            theme: "colored",
                        });
                    },
                })
                setTimeout(() => {
                    window.location.reload();
                }, "4000")
            })
        }
    } catch (err) {
        toast.error(err.response.data.message, {className: 'toast-failed', bodyClassName: 'toast-failed', theme: "colored",})
        }
};   

const handleDelete = async (_id) => {
    try{
        if(isLoggedIn){
            await axios.post('/api/auth/access', null)
            .then(token => {
                axios.delete(`/api/auth/remove-bio`,{
                    headers: {
                        Authorization: token.data.access_token,
                    },
                    data:{
                        "_id": _id
                    }
                })
            })
        }
            window.location.reload();
    } catch (err) {
        console.log(err.response.data)
    }
}

const handleLogout = async (e) => {
    e.preventDefault()
    try{
        await axios.get('/api/signout')
        localStorage.removeItem('jwt')
        return navigate("/admin");
    } catch (err) {
        console.log(err.response.data)
    }
}
    
    return(
        <div style={styles.container}>
        <ToastContainer />
        <nav style={styles.nav}>
                <div style={styles.icons}>
                    <div style={styles.iconDiv}>
                        <Link to="/admin"><BsHouse style={styles.icon}/></Link> 
                        <button onClick={handleLogout} style={styles.btnReset}><BsPower style={styles.icon}/></button>
                    </div>
                        <button onClick={handleOpen} style={styles.btnReset}><BsPencilFill style={styles.iconUpld} /></button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styles.modalDiv}>
                        <BioForm 
                            handleSubmit={bioUpload}
                            handlePhoto={handlePhoto}
                            onChange={handleChange}
                            valueDetail={formValue.bio_detail}
                        />
                    </Box>
                </Modal>
                </div>
                <p style={styles.navCopyright}>&copy; 2023 Thistle Photography.<br></br> All Rights Reserved</p>
        </nav>
        <div style={styles.main}>
        <h2 style={styles.title}>Manage Bio</h2>
            <div style={styles.content}>
            {items && items.length > 0 ? (
                    items.map((bio) => {
                        return (
                            <div key={bio._id} style={styles.imageBox}>
                                <div>
                                    <img src={bio.bio_image} alt={bio._id} style={styles.img}/>
                                </div>
                                <div>
                                    <p>{bio.bio_detail}</p>
                                </div>
                                <div>
                                    <button onClick={(e) => handleDelete(bio._id, e)} style={styles.btnReset}><RiDeleteBinFill style={styles.iconDelete} /></button>
                                </div>
                            </div>
                        )
                    })
            ) : (
                    <h2>Database Empty</h2>
                )
            }
             </div>
        </div>
        </div>
    )
}

export default BioManagement;

const styles = {
    img:{
        width: '90px',
        height: '120px',
        objectFit: 'cover',
        borderRadius: '2px'
    },
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
        border: '1px solid #edeced',
        borderRadius: '8px',
        marginTop: '2rem',
        padding: '2rem',
        backgroundColor: 'white'
    },
    title: {
        textAlign: 'initial',
        fontSize: '2rem',
        margin: '0',
        padding: '2rem',
        borderBottom: '1px solid #edeced',
        backgroundColor: 'white'
    },
    imageBox:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: '1rem',
        marginBottom: '1rem',
        borderBottom: '1px solid #edeced',
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
    iconDelete:{
        color: '#ff5150',
        fontSize: '1.2rem',
        cursor: 'pointer',
        border: '1px dashed #ff5150',
        padding: '4px',
        borderRadius: '3px'
    },

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