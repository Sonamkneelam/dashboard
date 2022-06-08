const app = require("./app");
const connect = require("./Configs/db");

app.listen(7000, async function () {
  try {
    await connect();
    console.log("Listening to port 6000");
  } catch (err) {
    console.log(err);
  }
});
