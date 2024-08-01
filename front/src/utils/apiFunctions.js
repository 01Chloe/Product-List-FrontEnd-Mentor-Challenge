import axios from "axios"

export const getAllDatas = async () => {
  return axios
    .get("./datas/data.json")
    .then((res) => {
      return res
    })
    .catch((error) => {
      console.error(error.message)
    })
}
