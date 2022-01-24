import './Item.css';
import PropTypes from 'prop-types'; // ES6

const Item = ({id, item, amount}) => {
    const status = amount<0 ? "expense":"income"
    const symbol = amount<0 ? "-":"+"
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    
    return (
            <li className={status}>{item} <span>{symbol} {formatNumber(Math.abs(amount))}</span>
            </li>
    );
}

Item.propTypes = {
    id:PropTypes.string.isRequired,
    item:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired,
}

export default Item