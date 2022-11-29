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
        borderRadius: '6px'
    },
    formTitle:{
        fontSize: '30px',
        textTransform: 'uppercase',
        marginTop: 0
    },
    inputField:{
        padding:'10px',
        fontSize: '16px',
        width: '200px',
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
    inputFieldPass:{
        padding:'10px',
        fontSize: '16px',
        width: '200px',
        fontWeight: '400'
    },
    login_btn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#025de4',
        border: 0,
        padding: '12px',
        fontSize: '18px',
        color: 'white',

        textTransform: 'uppercase',
        cursor: 'pointer',
    },

}