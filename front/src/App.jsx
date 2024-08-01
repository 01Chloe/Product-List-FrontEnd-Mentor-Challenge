import { useState } from "react"
import CardsContainer from "./components/CardsContainer"
import CartContainer from "./components/CartContainer"
import "./app.scss"
import OrderModal from "./components/OrderModal"

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }
  return (
    <div className="app">
      <CardsContainer />
      <CartContainer toggleModal={toggleModal} />
      {modalIsOpen && (
        <OrderModal toggleModal={toggleModal} setModalIsOpen={setModalIsOpen} />
      )}
    </div>
  )
}

export default App
