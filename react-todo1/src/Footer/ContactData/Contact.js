import './Contact.css';
import ContactList from './ContactList'
import { v4 as uuidv4 } from 'uuid';

const Contact = ({contacts}) => {
    // console.log({contacts});
    return (
        <div>
            {contacts.map((element) => {
                return <ContactList {...element} key={uuidv4()}/>
            })}
        </div>
    );
}

export default Contact