import { connect } from "react-redux"
import { addToCart } from "../../redux/actions"

function ProductList({products, addToCartComponent}){
    return(
        <div>
            <h2>Products</h2>
            <div>
                {products.map((product) => (
                    <div key={product.id} > 
                        <span>{product.name} - {product.price}$ </span>
                        <button onClick={() => addToCartComponent(product)}>Add To Cart</button>
                    </div>
                ))}
            </div>  
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCartComponent: data => dispatch(addToCart(data)) 
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (ProductList)

// export default connect (mapStateToProps, {addToCart}) (ProductList)
// short version (but you need to change back the name of functions from 'addToCartComponent' to 'addToCart' in ProductList func)