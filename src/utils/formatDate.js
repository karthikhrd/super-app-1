export const formatDate = (dateString) => {
  return {
    date:
      dateString.substr(8, 2) +
      "-" +
      dateString.substr(5, 2) +
      "-" +
      dateString.substr(0, 4),
    time: (function () {
      const hours = parseInt(dateString.substr(11, 2));
      const minutes = dateString.substr(14, 2);
      if (hours >= 12) {
        return (hours - 12).toString() + ":" + minutes + " PM";
      } else {
        return hours.toString() + ":" + minutes + " AM";
      }
    })(),
  };
};
