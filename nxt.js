const Nxt = require(`nodejs-nxt`);

const makeNxt = (path = `/dev/tty.NXT-DevB`) => new Promise((resolve, reject) => {
  const nxt = new Nxt.NXT(path, (error) => {
    if (error) reject(error);
    resolve(nxt);
  });
});

const playTone = (nxt, { duration, frequency }) => new Promise((resolve, reject) => {
  nxt.PlayTone(frequency, duration, (error, response) => {
    if (error) reject(error);
    resolve(response);
  });
});

module.exports = {
  makeNxt,
  playTone,
};
