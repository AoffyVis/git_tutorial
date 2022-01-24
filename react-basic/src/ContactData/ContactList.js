import PropTypes from 'prop-types'; // ES6

const ContactList = ({id, email, message}) => {
    return (
        <div>
            <p>{email}</p>
            <p>{message}</p>
        </div>
    );
}

ContactList.propTypes = {
    id:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    message:PropTypes.string.isRequired,
}

export default ContactList