import "../assets/styles/cards-container.scss"
import { getAllDatas } from "../utils/apiFunctions"
import { useEffect, useState } from "react"
import Card from "../components/Card"

const CardsContainer = () => {
  const [responseData, setResponseData] = useState()
  const [dataIsEmpty, setDataIsEmpty] = useState(true)

  const getDatas = async () => {
    let response = await getAllDatas()
    if (response.status === 200 && dataIsEmpty) {
      setResponseData(response.data)
      setDataIsEmpty(false)
    }
  }

  useEffect(() => {
    getDatas()
  }, [responseData])

  return (
    <div>
      <h1>Desserts</h1>
      <div className="cards-container">
        {responseData?.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  )
}
export default CardsContainer
