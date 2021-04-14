import { A, navigate } from "hookrouter";
import { useState } from 'react'; 
import { read, write } from "../utilities/hooks/utils"

function LoginForm(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorLoginEmail, setErrorLoginEmail] = useState('')
    const [errorClassInput, setErrorClassInput] = useState('')

    const emailHandler = ev => setEmail(ev.target.value)
    const passwordHandler = ev => setPassword(ev.target.value)

    const users = {
        email, 
        password
    }

    const submitHandler = () => {
        // 1. comprobaciones
        // 2. comprobar que el usuario y la contraseña coinciden con lo que hay en el local storage
        
        const users = read("users") ? read("users") : []
    
        const validation = users.filter(user => user.email === email && user.password === password)

        if(validation.length > 0){
        //3. navigation
            navigate("/")
        } else {
            console.log('¡Esta cuenta no existe!')
            setErrorLoginEmail(<span className="input__text-help">¡Esta cuenta ya existe!</span>)
            setErrorClassInput('input--error')
        }
    
    }

    return(
        <div>
            <div className="page-register__box-logo">
            <span className="page-register__logo">Movia</span>
            </div>

            <div className="page-register__box-content">

                <div className="page-register__title">
                <h2 className="page-register__welcome">¡Bienvenido!</h2>
                <p className="page-register__session">Por favor, inicia sesión con tu cuenta.</p>
            </div>

            <div className="register-login">
                <div className="register-login__email"> 
                    <input className={`input ${errorClassInput}`} type="text" placeholder="Correo Electrónico" onChange={emailHandler} />
                    {errorLoginEmail}
                </div>
                
                <div className="register-login__box-password">

                <div className="register-login__box-input-pass">
                    <input id="password-input" className="input register-login__password" type="password" placeholder="Contraseña" onChange={passwordHandler}/>
                    <button id="password-button" className="register-login__eye far fa-eye"></button>
                </div>

                <div className="register-login__box-help">
                    <div className="register-login__checkbox">
                    <input className="register-login__save" type="checkbox" id="label-checkbox"/>
                    <label className="register-login__label" for="label-checkbox">Recordar</label>
                    </div>
                    <span className="register-login__help">¿Necesitas ayuda?</span>
                </div>

                </div>

                <button type="button" className="button button--big button--blue" onClick={() => navigate('/registro')}>Crear Cuenta</button>
                <button onClick={submitHandler} className="button button--big button--offline" type="button">Iniciar Sesión</button>
            </div>

            </div>

        </div>
    )
}

function Login(){
    return(
        <div className="page-register">
            <div className="page-register__column-left">
            <LoginForm/>
            </div>
            <div className="page-register__column-right"></div>
        </div>
    )
}

export default Login; 