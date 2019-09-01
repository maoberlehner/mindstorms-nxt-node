const {
  makeNxt,
  playTone,
} = require(`../nxt`);
const { pause } = require(`../utils`);

const run = async () => {
  const nxt = await makeNxt();

  await playTone(nxt, { duration: 250, frequency: 700 });
  await pause(200);

  await playTone(nxt, { duration: 250, frequency: 1200 });
  await pause(200);

  await playTone(nxt, { duration: 250, frequency: 1000 });
  await pause(200);

  await playTone(nxt, { duration: 250, frequency: 1300 });
  await pause(200);

  await playTone(nxt, { duration: 250, frequency: 800 });
  await pause(250);

  await playTone(nxt, { duration: 250, frequency: 800 });
  await pause(200);

  nxt.Disconnect();
};

run();
