import moment from "moment";

export const dateFormateWithTime = (dateString, t) => {
  const dateTime = moment(dateString);
  const day = t(dateTime.format("dddd"));
  const time = dateTime.format("hh:mm");
  const timeA = t(dateTime.format("A"));
  const date = dateTime.format("YYYY/MM/DD");
  const formattedDate = `${day} ${time} ${timeA} ${date}`;
  return formattedDate;
};

export const dateFormate = (dateString,t) => {
    const dateTime = moment(dateString);
    const day = t(dateTime.format("dddd"));
    const date = dateTime.format("YYYY/MM/DD");
    const formattedDate = `${day} ${date}`;
  return formattedDate;
};

export const dateFormateWithoutDay = (dateString) => {
  const formattedDate = moment(dateString).format("D/M/YYYY");
  return formattedDate;
};

export const getTime = (timeString, t) => {
    const dateTime = moment(timeString);
    const time = dateTime.format("hh:mm");
    const timeA = t(dateTime.format("A"));
    const timeFormate = `${time} ${timeA}`;
  return timeFormate;
};
