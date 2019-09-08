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

const drive = (nxt, {
  port,
  power = Nxt.Power[100],
  mode = Nxt.Mode.Regulated,
  regulationMode = Nxt.RegulationMode.MotorSync,
  turnRatio = Nxt.TurnRatio[0],
  runState = Nxt.RunState.Running,
  tachoLimit = 0x00,
}) => new Promise((resolve, reject) => {
  nxt.SetOutputState(
    port,
    power,
    mode,
    regulationMode,
    turnRatio,
    runState,
    tachoLimit,
    (error, response) => {
      if (error) reject(error);
      resolve(response);
    },
  );
});

const stop = (nxt, { port }) => drive(nxt, {
  port,
  power: Nxt.Power[0],
  runState: Nxt.RunState.RampDown,
});

module.exports = {
  drive,
  makeNxt,
  playTone,
  stop,
};
