import { useSelector, useDispatch } from "react-redux"
import EmptyCartIcon from "../assets/images/illustration-empty-cart.svg"
import "../assets/styles/cart-container.scss"
import { removeToCart } from "../redux/productSlice"
import CarbonNeutralIcon from "../assets/images/icon-carbon-neutral.svg"
import PropTypes from "prop-types"

const CartContainer = ({ toggleModal }) => {
  const state = useSelector((state) => state.product)
  const dispatch = useDispatch()

  const totalItems = state.reduce((acc, item) => acc + item.count, 0)

  const totalPrice = state.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  )

  return (
    <div className="cart">
      <h2 className="cart-title">Your Cart ({totalItems})</h2>
      {state.length === 0 ? (
        <>
          <img
            src={EmptyCartIcon}
            alt="Your cart is empty"
            className="cart-empty-img"
          />
          <p className="cart-empty-msg">Your added items will appear here</p>
        </>
      ) : (
        <div className="cart-item">
          {state.map((item, index) => (
            <div key={index} className="cart-item-container">
              <div className="cart-item-group">
                <p className="cart-item-title">{item.name}</p>
                <div className="cart-item-infos">
                  <p className="cart-item-count">{item.count}x</p>
                  <p className="cart-item-price">@ ${item.price.toFixed(2)}</p>
                  <p className="cart-item-total">
                    ${(item.price * item.count).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeToCart(item))}
                className="cart-remove-item-btn"
              >
                &times;
              </button>
            </div>
          ))}
          <div className="cart-total-container">
            <p>Order Total</p>
            <p className="cart-total">$ {totalPrice.toFixed(2)}</p>
          </div>
          <div className="cart-carbon-neutral-container">
            <img src={CarbonNeutralIcon} alt="carbon neutral icon" />
            <p>This is a carbon neutral delivery</p>
          </div>
          <button className="cart-order-btn" onClick={() => toggleModal()}>
            Confirm Order
          </button>
        </div>
      )}
    </div>
  )
}
export default CartContainer

CartContainer.propTypes = {
  toggleModal: PropTypes.func.isRequired,
}
