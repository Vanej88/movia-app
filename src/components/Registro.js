
import { useState } from 'react';
import { navigate } from "hookrouter";
import { write, read } from '../utilities/hooks/utils'; 

function ColumnLeft(){

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPass, setErrorPass] = useState('');
    const [errorRepeat, setErrorRepeat] = useState('');
    const [classErrorInput, setClassErrorInput] = useState('');

    const nameHandler = ev => setName(ev.target.value);
    const lastnameHandler = ev => setLastname(ev.target.value);
    const emailHandler = ev => setEmail(ev.target.value);
    const passwordHandler = ev => setPassword(ev.target.value);
    const repeatHandler = ev => setRepeat(ev.target.value);
    const loginBtn = ev => navigate('/login');

    const validate = () => {
        let nameIsValid = false;
        let emailIsValid = false;
        let passIsValid = false;

        //name
        if(!name.trim()){
            console.log("este campo es obligatorio")
            setErrorName(<span className="input__text-help">Este campo es obligatorio</span>)
            setClassErrorInput('input--error')
        } else if(name.length <= 2){
            console.log("mas de 2")
            setErrorName(<span className="input__text-help">Este campo debe contener más de 2 caracteres</span>)
            setClassErrorInput('input--error')
        } else {
            setErrorName('')
            setClassErrorInput('')
            nameIsValid = true
        }

        //email
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        // const emailError = !email.includes("@")
        if(!email.trim()){
            console.log("este campo es obligatorio")
            setErrorEmail(<span className="input__text-help">Este campo es obligatorio</span>)
            setClassErrorInput('input--error')
        } else if(!emailRegex.test(email)){
            console.log("introduce un correo válido")
            setErrorEmail(<span className="input__text-help">Introduce un correo válido</span>)
            setClassErrorInput('input--error')
        } else {
            setErrorEmail('')
            setClassErrorInput('')
            emailIsValid = true
        }

        //password
        if(!password.trim()){
            console.log("este campo es obligatorio")
            setErrorPass(<span className="input__text-help">Este campo es obligatorio</span>)
            setClassErrorInput('input--error')
        } else if(password.length >= 8){
            console.log("más de 8 caracteres")
            setErrorPass(<span className="input__text-help">Este campo debe contener más de 8 caracteres</span>)
            setClassErrorInput('input--error')
        } else {
            setErrorPass('')
            setClassErrorInput('')
            passIsValid = true
        }

        //repeat
        if(!repeat.trim()){
            console.log("este campo es obligatorio")
            setErrorRepeat(<span className="input__text-help">Este campo es obligatorio</span>)
            setClassErrorInput('input--error')
        } else if(repeat !== password){
            console.log("No coinciden")
            setErrorRepeat(<span className="input__text-help">Este campo no coincide con el anterior</span>)
            setClassErrorInput('input--error')
        } else {
            setErrorRepeat('')
            setClassErrorInput('')
        }

        return nameIsValid && emailIsValid && passIsValid

    }

    // ten en cuenta que en local storage los usuarios seran un ARRAY
    // - cuando creemos uno nuevo, tendremos que hacer un push a ese array y volver a meter ese array en el localStorage

    function submitHandler(){
       
        const isValid = validate()

        if(isValid){
            const users = read("users") ? read("users") : []
    
            const user = {
               name: name,
               lastname: lastname, 
               email: email,
               password: password
            }
            
            const validateData = users.filter(user => user.email === email)
            
            if(validateData.length > 0){
                console.log("este email existe")
                setErrorEmail(<span className="input__text-help">Este correo ya existe</span>)
                setClassErrorInput('input--error')
    
            } else {
                users.push(user)
                write("users", users)
                navigate("/login")
            }
        }
            
    }


    return(
        <div>
            <div className="page-register__box-logo">
            <span className="page-register__logo">Movia</span>
            </div>

            <div className="page-register__box-content"> 

            <div className="page-register__title">
                <h2 className="page-register__create">Crear Cuenta</h2>
                <p className="page-register__instruction">Por favor, rellena los siguientes campos de texto.</p>
            </div> 

            <div className="register-form">

                <div className="register-form__name">
                    <input className={`input ${classErrorInput}`} type="text" placeholder="Nombre" value={name} onChange={nameHandler}/>
                    {errorName}
                </div>

                <input className="input register-form__last-name" type="text" placeholder="Apellidos" value={lastname} onChange={lastnameHandler}/>

                <div className="register-form__email">
                    <input className={`input ${classErrorInput}`}  type="email" placeholder="Correo Electrónico" value={email} onChange={emailHandler}/>
                    {errorEmail}
                </div>

                <div className="register-form__password">
                    <input className={`input ${classErrorInput}`} type="password" placeholder="Contraseña" value={password} onChange={passwordHandler}/>
                    {errorPass}
                </div>

                <div className="register-form__repeat">
                    <input className={`input ${classErrorInput}`}  type="password" placeholder="Repetir contraseña" value={repeat} onChange={repeatHandler}/>
                    {errorRepeat}
                </div>

                <button type="button" className="button button--big button--blue" onClick={submitHandler}>Crear cuenta</button>
                <button type="button" className="button button--big button--offline" onClick={loginBtn}>Iniciar sesión</button>

            </div>
            </div>
        </div>
    )
}

function Registro(){

    return(
        <div className="page-register">
            <div className="page-register__column-left">
                <ColumnLeft/>
            </div>
            <div className="page-register__column-right"></div>
        </div>
    )
}

export default Registro; 