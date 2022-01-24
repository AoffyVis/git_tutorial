import './FormComponent.css';
import {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {
    const [email, setEmail] = useState('')
    const [msg, setMSG] = useState('')
    const [formValid, setFormValid] = useState(false)
    
    const inputEmail = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    const inputMsg = (e) => {
        // console.log(e.target.value)
        setMSG(e.target.value)
    }

    const sendMSG = (e) => {
        e.preventDefault();
        // console.log("Message already send!")
        const msgStoreData = {
            id: uuidv4(),
            email:email,
            message:msg,
        }
        // console.log(msgStoreData)
        props.onAddContact(msgStoreData)
        setEmail('') 
        setMSG('')
    }

    useEffect(() => {
        const checkTxtOnInput = email.trim().length>0 && msg.trim().length>0
        setFormValid(checkTxtOnInput)
    }, [email, msg])
    
    return (
        <div>
            <form onSubmit={sendMSG}>
                <div className="form-control">
                    <label>Email: </label>
                    <input type="text" placeholder="Email Address" onChange={inputEmail} value={email}></input>
                </div>
                <div className="form-control">
                    <label>Message: </label>
                    <input type="text" placeholder="type message here!" onChange={inputMsg} value={msg}></input>
                </div>
                <div>
                    <button type="submit" className='sendBtn' disabled={!formValid}>Send me!</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent