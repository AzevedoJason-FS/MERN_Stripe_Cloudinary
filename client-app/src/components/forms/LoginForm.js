import { useState } from "react";
import { MdVisibility } from "react-icons/md";

const LoginForm = (prop) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    }

    return(
        <form style={styles.form} onSubmit={prop.onSubmit}>
            <h2 style={styles.formTitle}>{prop.Title}</h2>
                <input type='text' style={styles.inputField} placeholder='Email' autoComplete='off' name='email' onChange={prop.onChange}/>
                <div style={styles.visible}>
                    <MdVisibility onClick={handleClick} style={styles.icon}/>
                    <input type={visible ? 'text' : 'password'} style={styles.inputFieldPass} placeholder='Password' autoComplete='off' name="password" onChange={prop.onChange}/>
                </div>
            <div style={styles.login_btn}>
                <button style={styles.btn} type='submit'>login</button>
            </div>
        </form>
    )
}

export default LoginForm;

const styles = {
    form:{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        width: '380px',
        maxWidth: '380px',
        height: '450px',
        background: 'white',
        border: '1px solid #edeced',
        borderRadius: '12px'
    },
    formTitle:{
        fontSize: '30px',
        textTransform: 'uppercase',
        marginTop: 0,
        letterSpacing: '-0.045em',
    },
    inputField:{
        padding:'10px',
        fontSize: '16px',
        width: '200px',
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
    inputFieldPass:{
        padding:'10px',
        fontSize: '16px',
        width: '200px',
    },
    login_btn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn:{
        display: 'block',
        position: 'relative',
        cursor: 'pointer',
        background: '#0066ff',
        color: 'white',
        width: '200px',
        fontSize:'16px',
        borderRadius: '10px',
        padding: '0 21px',
        height: '46px',
        fontWeight: '600',
        fontFamily: 'Inter,sans-serif',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        border: 'none',
        textDecoration: 'none',
    },

}