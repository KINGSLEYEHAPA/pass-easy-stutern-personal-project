const formatTime = (time) => {
  if (time < 60) {
    return time < 10 ? `0${time}s` : `${time}s`;
  } else {
    return Math.floor(time / 60) + "minutes " + (time % 60) + "secs";
  }
};

export { formatTime };
