const Nxt = require(`nodejs-nxt`);

const {
  drive,
  makeNxt,
  stop,
} = require(`../nxt`);
const { pause } = require(`../utils`);

const run = async () => {
  const nxt = await makeNxt();

  // Move forward.
  await Promise.race([
    drive(nxt, { port: Nxt.MotorPort.B }),
    drive(nxt, { port: Nxt.MotorPort.C }),
  ]);
  await pause(2000);

  // Turn.
  await Promise.race([
    drive(nxt, { port: Nxt.MotorPort.B, turnRatio: Nxt.TurnRatio[75] }),
    drive(nxt, { port: Nxt.MotorPort.C, turnRatio: Nxt.TurnRatio[75] }),
  ]);
  await pause(1700);
  nxt.ResetMotorPosition(Nxt.MotorPort.B, true);
  nxt.ResetMotorPosition(Nxt.MotorPort.C, true);
  await pause(30);

  // Move forward.
  await Promise.race([
    drive(nxt, { port: Nxt.MotorPort.B }),
    drive(nxt, { port: Nxt.MotorPort.C }),
  ]);
  await pause(2000);

  // Stop.
  await Promise.race([
    stop(nxt, { port: Nxt.MotorPort.B }),
    stop(nxt, { port: Nxt.MotorPort.C }),
  ]);
  await pause(1000);

  nxt.Disconnect();
};

run();
