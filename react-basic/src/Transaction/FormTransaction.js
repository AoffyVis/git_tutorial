import './FormTransaction.css';
import {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormTransaction = (props) => {
    const [item, setItem] = useState('')
    const [amount, setAmount] = useState('')
    const [itemValid, setItemValid] = useState(false)
    
    const inputItem = (e) => {
        // console.log(e.target.value)
        setItem(e.target.value)
    }

    const inputAmount = (e) => {
        // console.log(e.target.value)
        setAmount(e.target.value)
    }

    const saveItem = (e) => {
        e.preventDefault();
        // console.log("Message already send!")
        const storeItem = {
            id: uuidv4(),
            item:item,
            amount:Number(amount),
        }
        // console.log(storeItem)
        props.onAddItem(storeItem)
        setItem('') 
        setAmount('')
    }

    useEffect(() => {
        const checItemInput = item.trim().length>0 && amount!==0
        setItemValid(checItemInput)
    }, [item, amount])
    return (
        <div className='FormTransaction'>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>Item: </label>
                    <input type="text" placeholder="Item name" onChange={inputItem} value={item}></input>
                </div>
                <div className="form-control">
                    <label>Amount: </label>
                    <input type="text" placeholder="(+ income: - expense)" onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                    <button type="submit" className='sendBtn' disabled={!itemValid}>SAVE</button>
                </div>
            </form>
        </div>
    )
}

export default FormTransaction