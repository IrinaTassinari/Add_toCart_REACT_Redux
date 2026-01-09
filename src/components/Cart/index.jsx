import {connect} from 'react-redux'
import { removeFromCart, updateCartQuantity } from '../../redux/actions'


function Cart({cart,updateCartQuantity,removeFromCart}){

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0 )

    return(
        <div>
            {cart.map((item) =>{
                return <div key={item.id}>
                    <span>{item.name} - {item.price}$ </span>
                    <input 
                        type="number"
                        min='1'
                        value={item.quantity} 
                        onChange={(event) => updateCartQuantity(item.id, Number(event.target.value))}
                    />
                    <span>Sum for product: {item.price} * {item.quantity}</span>    
                    <button onClick={() => removeFromCart(item.id)}>Delete</button>
                </div>
            })}
            <p>Total: {total}</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})


export default connect(mapStateToProps, {updateCartQuantity, removeFromCart})(Cart)