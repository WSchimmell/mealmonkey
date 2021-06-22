import {FaShoppingCart} from 'react-icons/fa';
import PropTypes from 'prop-types'
const Cart = () => {
    const onClick = (e) => {
    }
    return (
        <button onClick={onClick} className='btn'><FaShoppingCart /></button>
    );
}

Cart.propTypes = {
    onClick: PropTypes.func,
}

export default Cart

