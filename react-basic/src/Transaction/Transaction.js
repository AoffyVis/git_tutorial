import './Transaction.css';
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';

const Transaction = ({items}) => {
    return (
        <div className='transactionData'>
        <ul className='item-list'>
            {items.map((element) => {
                return <Item {...element} key={uuidv4()}/>
            })}
        </ul>
        </div>
    );
}

export default Transaction