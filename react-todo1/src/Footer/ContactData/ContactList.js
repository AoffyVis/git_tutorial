import PropTypes from 'prop-types'; // ES6

const ContactList = ({id, email, phone}) => {
    return (
        <div>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}

ContactList.propTypes = {
    id:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    phone:PropTypes.number.isRequired,
}

export default ContactList