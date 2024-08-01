import PropTypes from "prop-types"
import "../assets/styles/card.scss"
import CartIcon from "../assets/images/icon-add-to-cart.svg"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeOneToCart } from "../redux/productSlice"
import { useEffect, useState } from "react"

const Card = ({ data }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) =>
    state.product.find((item) => item.name === data.name)
  )

  const [windowSize, setWindowSize] = useState()

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  let imageSize
  if (windowSize < 595) {
    imageSize = data.image.mobile
  } else if (windowSize < 1024) {
    imageSize = data.image.tablet
  } else {
    imageSize = data.image.desktop
  }
  return (
    <article className="card">
      <img src={imageSize} alt={data.name} className="card-img" />
      {!state?.isSelect ? (
        <button
          className="card-btn"
          onClick={() => {
            dispatch(addToCart(data))
          }}
        >
          <img src={CartIcon} alt="add to cart" />
          Add to cart
        </button>
      ) : (
        <div className="card-selected-btn">
          <button
            className="count-btn"
            onClick={() => dispatch(removeOneToCart(data))}
          >
            -
          </button>
          <p>{state?.count}</p>
          <button
            className="count-btn"
            onClick={() => dispatch(addToCart(data))}
          >
            +
          </button>
        </div>
      )}
      <div className="card-content">
        <p className="card-category">{data.category}</p>
        <p className="card-name">{data.name}</p>
        <p className="card-price">${data.price.toFixed(2)}</p>
      </div>
    </article>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
}
export default Card
