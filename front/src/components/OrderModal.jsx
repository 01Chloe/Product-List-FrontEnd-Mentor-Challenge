import { useDispatch, useSelector } from "react-redux"
import "../assets/styles/order-modal.scss"
import PropTypes from "prop-types"
import OrderConfirmIcon from "../../public/images/icon-order-confirmed.svg"
import { resetOrder } from "../redux/productSlice"

const OrderModal = ({ toggleModal, setModalIsOpen }) => {
  const state = useSelector((state) => state.product)
  const dispatch = useDispatch()

  const totalPrice = state.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  )

  const resteOderFunc = () => {
    dispatch(resetOrder())
    setModalIsOpen(false)
  }
  return (
    <div className="order-modal" onClick={() => toggleModal()}>
      <div
        className="order-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={OrderConfirmIcon} alt="" />
        <h1>Order Confirmed</h1>
        <p className="order-modal-txt">We hope you enjoy your food!</p>
        <div className="order-modal-card-container">
          {state.map((data, index) => (
            <div key={index} className="order-modal-card-content">
              <img
                src={data.image.thumbnail}
                alt={data.name}
                className="order-modal-card-img"
              />
              <div className="order-modal-card">
                <p className="order-modal-card-title">{data.name}</p>
                <div className="order-modal-card-infos">
                  <p className="order-modal-card-count">{data.count}x</p>
                  <p className="oder-modal-card-price">
                    @ ${data.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <p className="order-modal-card-total-price">
                ${(data.price * data.count).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="order-modal-total">
            <p>Order Total</p>
            <p className="order-modal-total-price">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <button className="order-modal-btn" onClick={() => resteOderFunc()}>
          Start New Order
        </button>
      </div>
    </div>
  )
}
export default OrderModal

OrderModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
}
