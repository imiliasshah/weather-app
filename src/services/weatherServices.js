import axios from "axios";
import {BASE_API_URL} from "../helpers/env";
import {APP_ID, unit} from "../helpers/utils";

export const getCurrentWeather = (city) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_API_URL}/weather?q=${city}&appid=${APP_ID}&units=${unit}`)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.message)
      })
  })
}

export const getBulkWeatherForecast = (city) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_API_URL}forecast?q=${city}&appid=${APP_ID}&units=${unit}`)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.message)
      })
  })
}
