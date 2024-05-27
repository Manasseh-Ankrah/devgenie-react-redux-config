import moment from "moment";

export const formatAsTime = (time) => {
  const t = time.toFixed(2);
  const hours = Math.floor(t);
  const minutes = Math.round(((t - hours) * 60) / 15) * 15;
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
};

export const getReadableDate = (date) => {
  return moment(date).format("DD MMMM YYYY");
};

export const getSystemTimeFormat = (time) => {
  const t = moment(time).format("HH:MM");
  return moment.duration(t).asHours();
};

export const setAsSystemTime = (time) => {
  const dd = time.split(":");
  const hh = dd[0].trim();
  const mm = dd[1].trim();
  const d = moment({
    hour: hh,
    minute: mm,
  });

  return getSystemTimeFormat(d);
};
