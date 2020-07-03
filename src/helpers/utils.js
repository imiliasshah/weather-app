import moment from "moment";

export const APP_ID = "31011df46e7338553fd0cf847d0e9ccc";
export const unit = 'metric';

export const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return hours + ':' + minutes + ' ' + ampm;
}

export const timeStampToFormatDate = (timeStamp, format) => {
  return moment(timeStamp * 1000).format(format);
}

export const arrayToGroupArray = (arr, chunk) => {
  let i, tempArray = [];
  for (i = 0; i < arr.length; i += chunk) {
    tempArray.push(arr.slice(i, i + chunk));
  }
  return tempArray;
}
