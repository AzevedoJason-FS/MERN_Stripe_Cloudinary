import axios from 'axios';
import { React, useRef, useState, useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AdminNav from '../components/AdminNav';
import { useNavigate } from "react-router-dom";

const StoreManagement = () =>{

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
    const jwt = localStorage.getItem("jwt")
    if(jwt && isLoggedIn){
        // try{
        //     const res = await axios('/api/all')
        //     setItems(res.data.Images)
        // }catch(err){
        //     console.log(err)
        // }
    }
}
  getData();
  loggedin();
}, [isLoggedIn, navigate])

const imageUpload = async (e) => {
    e.preventDefault();
    try {
    const jwt = localStorage.getItem("jwt")
        if(jwt && isLoggedIn){
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
                        return toast.success("Uploading", {
                          className: "bg-upload",
                          bodyClassName: "bg-upload",
                          autoClose: 5000,
                          theme: "colored",
                        });
                    },
                });
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
        const jwt = localStorage.getItem("jwt")
        if(jwt && isLoggedIn){
            await axios.post('/api/auth/access', null)
            .then(token => {
                axios.delete(`/api/auth/delete`,{
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
        <div>
        <AdminNav 
            handleLogout={handleLogout}
            inputFile={inputFile}
            imageUpload={imageUpload}
        />
        </div>
    )
}

export default StoreManagement;
