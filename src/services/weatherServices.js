import axios from "axios";
import {BASE_API_URL} from "../helpers/env";
import {APP_ID, GOOGLE_KEY, unit} from "../helpers/utils";

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

export const getGeoLocation = (lat, lng) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_KEY}`)
      .then(res => {
        resolve(res.data.plus_code)
      })
      .catch(err => {
        reject(err.message)
      })
  })
}
