import './FormComponent.css';
import {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import Swal from 'sweetalert2'

const FormComponent = (props) => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [formValid, setFormValid] = useState(false)

    // contact to google sheet

    // contact to google sheet
    
    const inputEmail = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    const inputPhone = (e) => {
        // console.log(e.target.value)
        setPhone(e.target.value)
    }

    //Post input value to contactComponent
    const sendMSG = (e) => {
        e.preventDefault();
        // console.log("Message already send!")
        const msgStoreData = {
            id: uuidv4(),
            email:email,
            phone:Number(phone),
        }

        const contactData = {
            Email:email,
            TelNo:phone,
            TimeStamp: new Date().toLocaleString(),
        }
        //console.log(msgStoreData)
        props.onAddContact(msgStoreData)
        setEmail('') 
        setPhone('')

        //Post Google spreadsheet API
        axios.post('https://sheet.best/api/sheets/c7154c86-1afe-4075-8abd-4404ed7fb599', contactData)
            .then (res => {
                //console.log(res)
                Swal.fire({
                    text:'We already heard your message!',
                    confirmButtonText: "Close",
                    confirmButtonColor:"#e14232",
                })
            })
    }

    useEffect(() => {
        const checkTxtOnInput = email.trim().length>0 && phone.trim().length>0
        setFormValid(checkTxtOnInput)
    }, [email, phone])
    
    return (
        <div className='formComponent'>
            <div>
                <form onSubmit={sendMSG}>
                    <div className="form-control">
                        <label>Email: </label>
                        <input type="text" placeholder="Email Address" onChange={inputEmail} value={email}></input>
                    </div>
                    <div className="form-control">
                        <label>Phone: </label>
                        <input type="text" placeholder="type message here!" onChange={inputPhone} value={phone}></input>
                    </div>
                    <div>
                        <button type="submit" className='sendBtn' disabled={!formValid}>Send me!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormComponent