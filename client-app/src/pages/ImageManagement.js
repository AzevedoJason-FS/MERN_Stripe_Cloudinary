import axios from 'axios';
import { React, useRef, useState, useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AdminNav from '../components/AdminNav';
import { useNavigate } from "react-router-dom";

const ImageManagement = () =>{

let navigate = useNavigate();

const inputFile = useRef(null)
const [ items, setItems ] = useState()
const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            const res = await axios('/api/all')
            setItems(res.data.Images)
        }catch(err){
            console.log(err)
        }
    }
}
  getData();
  loggedin();
}, [isLoggedIn, navigate])
    
    const imageUpload = async (e) => {
        e.preventDefault();
        try {
            if(isLoggedIn){
                // get file
                const file = e.target.files[0];
                let formData = new FormData();
                formData.append("image", file);

                await axios.post('/api/auth/access', null)
                .then(token => {
                    axios.post("/api/auth/upload", formData, {
                        headers: {
                          'Content-Type': undefined,
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
          toast.error(err.response.data.msg, {
            theme: "colored",
            className: "toast-failed",
            bodyClassName: "toast-failed",
          });
        }
      };   

    const handleDelete = async (public_id) => {
        try{
            if(isLoggedIn){
                await axios.post('/api/auth/access', null)
                .then(token => {
                    axios.delete(`/api/auth/remove-image`,{
                        headers: {
                            Authorization: token.data.access_token,
                        },
                        data:{
                            "public_id": public_id
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
            window.location.reload();
        } catch (err) {
            console.log(err.response.data)
        }
    }
    
    return(
        <div style={styles.container}>
        <ToastContainer />
        <AdminNav 
            handleLogout={handleLogout}
            inputFile={inputFile}
            imageUpload={imageUpload}
        />
        <div style={styles.main}>
        <h2 style={styles.title}>Manage Images</h2>
            <div style={styles.content}>
                
            {items && items.length > 0 ? (
                    items.map((image) => {
                        return (
                            <div key={image._id} style={styles.imageBox}>
                                <div>
                                    <img src={image.image} alt={image._id} style={styles.img}/>
                                </div>
                                <div>
                                    <button onClick={(e) => handleDelete(image.public_id, e)} style={styles.btnReset}><RiDeleteBinFill style={styles.icon} /></button>
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

export default ImageManagement;

const styles = {
    img:{
        width: '90px',
        height: '120px',
        objectFit: 'cover',
        borderRadius: '2px'
    },
    container: {
        display: 'flex',
        height: '100%',
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
    icon:{
        color: '#ff5150',
        fontSize: '1.2rem',
        cursor: 'pointer',
        border: '1px dashed #ff5150',
        padding: '4px',
        borderRadius: '3px'
    }
}