const pause = duration => new Promise((resolve) => {
  setTimeout(resolve, duration);
});

module.exports = {
  pause,
};
